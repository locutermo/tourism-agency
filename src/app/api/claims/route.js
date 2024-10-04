import { createClaim } from "../service";
import { NextResponse } from 'next/server';

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
  
      // Devolver respuesta exitosa
      return NextResponse.json(
        { message: 'Reclamo creado exitosamente', claimId: insertedId },
        { status: 201 }
      );
    } catch (error) {
      // Manejo de errores
      return NextResponse.json(
        { error: 'Error al crear el reclamo' },
        { status: 500 }
      );
    }
  }