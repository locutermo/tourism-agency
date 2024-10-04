"use client";
import { useState } from "react";

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    documentType: "DNI",
    documentNumber: "",
    email: "",
    phone: "",
    serviceName: "",
    travelDate: "",
    claimType: "",
    message: "",
    acceptPolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/claims", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log({response,result})
    if (response.ok) {
      alert("Reclamo enviado, espere la respuesta por correo");
    } else {
      console.error("Error:", result);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white lg:my-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        Libro de Reclamaciones
      </h1>
      <p className="text-center mb-8">
        Lamentamos lo sucedido. En este formulario podrá registrar su queja o
        reclamo.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Primera Parte del Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold" htmlFor="firstName">
              Nombre*
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-semibold" htmlFor="lastName">
              Apellido*
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold" htmlFor="documentType">
              Tipo de documento*
            </label>
            <select
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Carnet de extranjería">
                Carnet de extranjería
              </option>
            </select>
          </div>
          <div>
            <label className="block font-semibold" htmlFor="documentNumber">
              N° de documento*
            </label>
            <input
              id="documentNumber"
              name="documentNumber"
              type="text"
              value={formData.documentNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold" htmlFor="email">
              Correo electrónico*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-semibold" htmlFor="phone">
              Teléfono*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        {/* Segunda Parte del Formulario */}
        <h2 className="text-xl font-semibold mb-4">2. Detalle de Reclamo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold" htmlFor="serviceName">
              Nombre del servicio / Paquete / Tours*
            </label>
            <input
              id="serviceName"
              name="serviceName"
              type="text"
              value={formData.serviceName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-semibold" htmlFor="travelDate">
              Fecha del viaje*
            </label>
            <input
              id="travelDate"
              name="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              name="claimType"
              value="Queja"
              checked={formData.claimType === "Queja"}
              onChange={handleChange}
              className="mr-2"
            />
            Queja
          </label>
          <label>
            <input
              type="radio"
              name="claimType"
              value="Reclamo"
              checked={formData.claimType === "Reclamo"}
              onChange={handleChange}
              className="mr-2"
            />
            Reclamo
          </label>
        </div>

        <div>
          <label className="block font-semibold" htmlFor="message">
            Mensaje*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows={5}
          />
        </div>

        <div className="flex items-start">
          <input
            id="acceptPolicy"
            name="acceptPolicy"
            type="checkbox"
            checked={formData.acceptPolicy}
            onChange={handleChange}
            required
            className="mt-1"
          />
          <label htmlFor="acceptPolicy" className="ml-2">
            Declaro haber leído y acepto las Políticas de Privacidad.
          </label>
        </div>
        <div className="flex flex-col space-y-5 text-gray-500">
          <span>
            (*) Todos nuestros procedimientos están basados en el manual de
            protección del consumidor y el manual de uso del libro de
            reclamaciones
          </span>
          <span>
            (*) La respuesta a este reclamo o queja será enviada al e-mail
            indicado en este formulario
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Enviar Reclamo
        </button>
      </form>
    </div>
  );
}
