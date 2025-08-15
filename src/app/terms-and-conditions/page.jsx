import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center">
      <div className="w-full relative my-10 md:mx-10 lg:mx-60 p-10">
        <h2 className="text-center font-bold text-xl md:text-3xl lg:text-5xl mb-6">Términos y condiciones</h2>

        <div className="space-y-12 text-gray-700">

          {/* Sección 1: Documentación y Requisitos Migratorios */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">1. Documentación y Requisitos Migratorios</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                Es <strong>responsabilidad exclusiva del pasajero</strong> contar con un pasaporte con una vigencia mínima de <strong>seis (6) meses</strong> al momento de realizar su viaje internacional.
              </li>
              <li>
                En caso de no contar con pasaporte vigente al momento de la reserva, el pasajero podrá realizarla utilizando su Documento Nacional de Identidad (<strong>DNI</strong>). No obstante, deberá iniciar de inmediato el trámite de su pasaporte.
              </li>
              <li>
                La opción más recomendada es gestionarlo mediante cita previa a través del portal de la Superintendencia Nacional de Migraciones.
              </li>
              <li>
                En caso de no conseguir cita, podrá optar por la modalidad de emergencia, gestionando su pasaporte hasta <strong>48 horas antes del vuelo</strong>.
              </li>
              <li>
                La elección de cualquiera de estas opciones es responsabilidad exclusiva del pasajero.
              </li>
              <li>
                Según el Acuerdo sobre los Documentos de Viaje del MERCOSUR, los ciudadanos peruanos pueden ingresar a los siguientes países únicamente con su <strong>DNI</strong>: Argentina, Brasil, Paraguay, Uruguay, Bolivia, Chile, Colombia, Ecuador y Venezuela.
              </li>
              <li>
                Sin embargo, si el itinerario contempla una escala, conexión o tránsito por un país que no forma parte del MERCOSUR, el <strong>pasaporte será obligatorio</strong>.
              </li>
              <li>
                En todos los casos, los pasajeros deben viajar con una identificación válida, respetando el período de vigencia determinado por el país emisor.
              </li>
              <li>
                En caso de viajes con menores de edad que no estén acompañados por ambos padres, es obligatorio presentar una <strong>autorización notarial</strong> firmada por ambos progenitores, debidamente legalizada.
              </li>
              <li>
                Para más información oficial sobre este trámite, puede consultar el siguiente enlace del Gobierno del Perú: <a href="https://www.gob.pe/148-autorizacion-de-viaje-para-menores-de-edad-autorizacion-notarial" className="text-blue-500 hover:underline">https://www.gob.pe/148-autorizacion-de-viaje-para-menores-de-edad-autorizacion-notarial</a>
              </li>
              <li>
                Para ingresar a determinados países como Santa Marta (Colombia), Bahamas, Venezuela, Panamá, Costa Rica, El Salvador, Tahití, Curazao, Jamaica, Aruba, Belice y Tailandia, es requisito obligatorio contar con la <strong>vacuna contra la fiebre amarilla</strong>. Esta debe ser administrada con una anticipación de entre <strong>10 a 13 días</strong> antes del viaje.
              </li>
              <li>
                Se recomienda consultar previamente tanto con la agencia de viajes como con un centro de vacunación autorizado a fin de confirmar los requisitos actualizados de ingreso al destino.
              </li>
              <li>
                Para ingresar a Brasil, la vacuna contra la fiebre amarilla <strong>no es obligatoria</strong>, pero sí altamente recomendable si el viaje incluye zonas no urbanas o áreas selváticas. Información oficial disponible aquí: <a href="https://www.gov.br/mre/pt-br/embaixada-lima/espanol/sector-consular/viaje-a-brasil/requisitos-para-ingresar-a-brasil" className="text-blue-500 hover:underline">https://www.gov.br/mre/pt-br/embaixada-lima/espanol/sector-consular/viaje-a-brasil/requisitos-para-ingresar-a-brasil</a>
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 2: Reservas, Pagos y Política de Cancelación */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">2. Reservas, Pagos y Política de Cancelación</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                Los servicios de vuelos, traslados, hoteles, tours, etc. son <strong>no reembolsables</strong>, <strong>no endosables</strong> y <strong>no transferibles</strong>, debido a los pagos realizados previamente a proveedores.
              </li>
              <li>
                Reprogramaciones y/o cancelaciones: Las líneas aéreas u Operador podrían realizar de manera unilateral y sin previa información a la agencia de viajes: cancelaciones, reprogramaciones, retraso de vuelo, denegación de embarque y problemas aeroportuarios. Estas situaciones son ajenas a cualquier acción o conocimiento de <strong>Ruta Mundial E.I.R.L</strong>, por lo que se libera de toda responsabilidad frente a estos eventuales cambios, así como las consecuencias derivadas de estas.
              </li>
              <li>
                Si el pasajero no realiza los pagos en la fecha establecida y se niega a completar el monto pendiente, la reserva será cancelada automáticamente. <strong>No se realizará reembolso</strong> del monto abonado previamente.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 3: Responsabilidad de Ruta Mundial */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">3. Responsabilidad de Ruta Mundial</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                <strong>Ruta Mundial</strong> Solo actúa como <strong>intermediario</strong> entre las entidades proveedoras de los servicios turísticos y el cliente, siendo responsable únicamente por la organización de los mismos.
              </li>
              <li>
                Cualquier solicitud de modificación o cancelación por parte del Cliente deberá ser comunicada por <strong>escrito</strong> a la Agencia. Las modificaciones o cancelaciones podrán estar sujetas a <strong>cargos adicionales</strong> y a las políticas de cancelación de los proveedores.
              </li>
              <li>
                <strong>Ruta Mundial</strong> no es responsable de perjuicio o retraso alguno derivado de circunstancias ajenas a su control.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 4: Fuerza Mayor y Exoneración de Responsabilidad */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">4. Fuerza Mayor y Exoneración de Responsabilidad</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                <strong>Ruta Mundial</strong> no es responsable de perjuicio o retraso alguno derivado de circunstancias ajenas a su control. Estas incluyen, pero no se limitan a:
                <ul className="list-circle ml-6 mt-2 space-y-2">
                  <li><strong>Condiciones climáticas adversas</strong> (lluvias intensas, tormentas eléctricas, huracanes, etc.).</li>
                  <li><strong>Eventos locales</strong> (desfiles, ferias, cierres de calles).</li>
                  <li><strong>Problemas de operatividad</strong> (averías en el transporte, cambios en la disponibilidad de guías).</li>
                  <li><strong>Factores de seguridad</strong> (bloqueos de carreteras, protestas, huelgas).</li>
                  <li><strong>Restricciones gubernamentales o sanitarias</strong> (cuarentenas, cierres preventivos de sitios turísticos, epidemias como el COVID-19).</li>
                  <li><strong>Emergencias médicas o accidentes</strong>.</li>
                  <li><strong>Problemas logísticos</strong> (retrasos en vuelos que impidan llegar a tiempo a un tour).</li>
                </ul>
              </li>
              <li>
                En caso de reprogramaciones, retrasos o cancelaciones de Vuelo, el reclamo deberá realizarse <strong>directamente con la aerolínea</strong> correspondiente.
              </li>
              <li>
                La agencia <strong>no será responsable</strong> si un pasajero es impedido de ingresar al país de destino por decisión de autoridades migratorias ni por la falta de documentación requerida (pasaporte, visas, vacunas, permisos notariales, etc.).
              </li>
              <li>
                <strong>Ruta Mundial</strong> no se hace responsable por la falta de estos permisos, vacunas y/o visas y <strong>NO reconocerá reclamo o devolución alguna</strong> amparados en estas dificultades.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 5: Facturación y Entrega de Vouchers */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">5. Facturación y Entrega de Vouchers</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                La emisión de boletas, facturas y vouchers puede requerir un plazo de procesamiento administrativo.
              </li>
              <li>
                <strong>Ruta Mundial E.I.R.L.</strong> emitirá una boleta de venta electrónica al pasajero por el monto correspondiente a los servicios turísticos contratados, <strong>excluyendo el valor de los boletos aéreos</strong>, ya que el ticket electrónico emitido por la aerolínea es un comprobante de pago válido.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 6: Intermediación Económica y Comercial */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">6. Intermediación Económica y Comercial</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                El CLIENTE declara que <strong>Ruta Mundial E.I.R.L.</strong> actúa como <strong>intermediaria</strong> en la contratación de servicios turísticos de terceros.
              </li>
              <li>
                En virtud de ello, autoriza a <strong>Ruta Mundial E.I.R.L.</strong> a recibir pagos en su nombre y a transferir dichos fondos a los proveedores correspondientes.
              </li>
              <li>
                El CLIENTE reconoce que <strong>Ruta Mundial E.I.R.L.</strong> no es la prestadora directa de dichos servicios, y que cualquier cambio, cancelación o reembolso está sujeto a las condiciones y políticas de cada proveedor.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 7: Vuelos: Reprogramaciones, Cancelaciones y Problemas Aeroportuarios */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">7. Vuelos: Reprogramaciones, Cancelaciones y Problemas Aeroportuarios</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                Las líneas aéreas pueden realizar de forma unilateral y sin previo aviso, cancelaciones, reprogramaciones, retrasos de vuelo, adelantos, pérdida de conexiones, denegación de embarque, etc. Estas situaciones son ajenas a la agencia <strong>Ruta Mundial E.I.R.L</strong>.
              </li>
              <li>
                Cualquier reclamo o solicitud de compensación deberá ser gestionada <strong>directamente ante la aerolínea</strong> correspondiente.
              </li>
              <li>
                Si, como consecuencia de estos cambios, el pasajero no llega a tiempo para realizar servicios contratados (traslados, tours, noches de hotel), <strong>no se realizará reembolso alguno</strong>.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 8: Hoteles y Servicios */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">8. Hoteles y Servicios</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                El horario de <strong>check-in</strong> es a partir de las <strong>3:00 p.m.</strong> hasta las 5:30 p.m., y el <strong>check-out</strong> es al mediodía (<strong>12:00 p.m.</strong>). Las solicitudes de check-in temprano o check-out tardío están sujetas a disponibilidad y políticas del hotel.
              </li>
              <li>
                Se entiende como habitación <strong>doble</strong> la capacidad para 2 personas (2 camas o 1 sola cama). Habitación <strong>triple</strong> es la capacidad para 3 personas (2 camas o 1 sola cama + 1 cama plegable o sofá cama).
              </li>
              <li>
                Todas las cotizaciones corresponden a una habitación <strong>estándar</strong>, la cual no garantiza vista panorámica.
              </li>
              <li>
                Es <strong>REQUISITO IMPORTANTE</strong> que el pasajero titular cuente con una <strong>tarjeta de crédito</strong> para realizar el check-in en algunos hoteles, y algunos pueden solicitar un pago como garantía.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 9: Traslados y Excursiones */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">9. Traslados y Excursiones</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                Todos los servicios de traslados y tours se brindan en modalidad <strong>regular (compartida)</strong>. Es tu responsabilidad ser <strong>estrictamente puntual</strong>.
              </li>
              <li>
                Si el pasajero presenta demoras o inconvenientes, deberá comunicarse de <strong>inmediato con la agencia por WhatsApp</strong>.
              </li>
              <li>
                Si el pasajero no se presenta dentro del tiempo de espera establecido, se considerará como “No Show” y <strong>perderá el servicio sin derecho a reembolso</strong>.
              </li>
              <li>
                Los tours están sujetos a cambios, reprogramaciones o cancelaciones por motivos fuera del control (fuerza mayor) de la agencia y del operador local.
              </li>
              <li>
                Durante el desarrollo del tour, cualquier inconveniente debe ser comunicado <strong>inmediatamente a la agencia</strong>. Si no se reporta en el momento, no se podrá garantizar solución ni compensación posterior.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 10: Tarjetas de Asistencia al Viajero */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">10. Tarjetas de Asistencia al Viajero</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                La agencia <strong>Ruta Mundial E.I.R.L</strong> actúa únicamente como <strong>intermediaria</strong> en la adquisición de tarjetas de asistencia.
              </li>
              <li>
                Toda comunicación, coordinación o solicitud relacionada con coberturas o reclamos debe realizarse <strong>directamente con la compañía aseguradora</strong>. La agencia no se responsabiliza por decisiones, tiempos de respuesta, o cualquier procedimiento interno del asegurador.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 11: Puntualidad y Comunicaciones */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">11. Puntualidad y Comunicaciones</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                Es obligación del pasajero presentarse <strong>3 horas antes para vuelos nacionales</strong> y <strong>4 horas antes para internacionales</strong>.
              </li>
              <li>
                Cualquier inconveniente, el pasajero deberá informar a la agencia <strong>en el momento</strong>. Si no se reporta a tiempo, la agencia no garantiza una solución inmediata.
              </li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* Sección 12: Atención al Cliente */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">12. Atención al Cliente</h3>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                La agencia está comprometida a brindar asesoría <strong>antes, durante y después del viaje</strong>.
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}