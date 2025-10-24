import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(""); // Estado para mostrar mensaje de éxito

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Formulario enviado correctamente");
    setTimeout(() => setFormStatus(""), 3000);
    e.target.reset(); // Limpia el formulario
  };

  const programas = [
    {
      nombre: "ADSO",
      descripcion:
        "Desarrollo de software, análisis de sistemas y creación de aplicaciones modernas.",
    },
    {
      nombre: "ANIMACIÓN 3D",
      descripcion:
        "Diseño, modelado y animación digital para cine, videojuegos y publicidad.",
    },
    {
      nombre: "REDES DE DATOS",
      descripcion:
        "Configuración y administración de redes empresariales seguras y eficientes.",
    },
  ];

  return (
    <div className="font-sans bg-gray-100">
      {/* NAVBAR */}
      <header className="flex justify-between items-center p-4 bg-green-700 text-white fixed w-full top-0">
        <h1 className="text-xl font-bold">SENA</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-gray-300">Inicio</a>
          <a href="#empresa" className="hover:text-gray-300">Empresa</a>
          <a href="#contacto" className="hover:text-gray-300">Contacto</a>
        </nav>

        {/* Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="bg-green-600 text-white p-4 flex flex-col gap-3 md:hidden mt-14">
          <a href="#inicio">Inicio</a>
          <a href="#empresa">Empresa</a>
          <a href="#contacto">Contacto</a>
        </nav>
      )}

      {/* HERO */}
      <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          Servicio Nacional de Aprendizaje
        </h2>
        <p className="text-xl md:text-2xl font-semibold mb-6">
          FORMACIÓN PARA EL TRABAJO
        </p>
        <a
          href="#empresa"
          className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800"
        >
          CONOCER MÁS
        </a>
      </section>

      {/* PROGRAMAS DE FORMACIÓN */}
      <section id="empresa" className="py-20 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold text-green-700 mb-10">
          PROGRAMAS DE FORMACIÓN
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {programas.map((programa) => (
            <div
              key={programa.nombre}
              className="bg-gray-200 p-6 rounded shadow hover:shadow-lg"
            >
              <h4 className="text-xl font-bold text-green-700">{programa.nombre}</h4>
              <p className="mt-2 text-sm">{programa.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center text-green-700 mb-10">
          CONTACTO
        </h3>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-6 rounded shadow"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border p-2 mb-4 rounded"
            required
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full border p-2 mb-4 rounded"
            required
          />
          <textarea
            placeholder="Mensaje"
            className="w-full border p-2 mb-4 rounded h-28"
            required
          ></textarea>

          <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
            Contacto
          </button>

          {formStatus && (
            <p className="mt-3 text-green-700 text-center font-semibold">
              {formStatus}
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 bg-green-700 text-white">
        © 2025 SENA | Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
