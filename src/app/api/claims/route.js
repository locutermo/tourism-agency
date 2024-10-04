import { createClaim } from "../service";
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
      const body = await req.json();
  
      const requiredFields = [
        'acceptPolicy',
        'claimType',
        'documentNumber',
        'documentType',
        'email',
        'firstName',
        'lastName',
        'message',
        'phone',
        'serviceName',
        'travelDate',
      ];
  
      for (const field of requiredFields) {
        if (!body[field]) {
          return NextResponse.json({ error: `El campo ${field} es obligatorio` }, { status: 400 });
        }
      }
  
      // Crear el reclamo en la base de datos
      const insertedId = await createClaim(body);
      const responseEmail = await sendEmail(body);

      // Devolver respuesta exitosa
      return NextResponse.json(
        { message: 'Reclamo creado exitosamente', claimId: insertedId },
        { status: 201 }
      );
    } catch (error) {
      // Manejo de errores
      console.log({error})
      return NextResponse.json(
        { error: 'Error al crear el reclamo' },
        { status: 500 }
      );
    }
  }

  const sendEmail = async (claim) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Dirección de correo electrónico que envía (por ejemplo, tu Gmail)
        pass: process.env.EMAIL_PASS, // Contraseña o token de aplicación de Gmail
      },
    });
  
    const subject = `RECLAMO O QUEJA DE ${claim.documentNumber}`;
    const text = `
      Tipo de Reclamo: ${claim.claimType}
      Nombre: ${claim.firstName} ${claim.lastName}
      Documento: ${claim.documentType} - ${claim.documentNumber}
      Email: ${claim.email}
      Teléfono: ${claim.phone}
      Servicio: ${claim.serviceName}
      Fecha del viaje: ${claim.travelDate}
      Mensaje: ${claim.message}
      Acepta Políticas: ${claim.acceptPolicy ? 'Sí' : 'No'}
    `;
  
    return await transporter.sendMail({
      from: 'info.rutamundial@gmail.com',
      to: 'locutermo@gmail.com, josemateoc20@gmail.com, ruttarazona99@gmail.com',
      subject: subject, 
      text: text,
    });
  };