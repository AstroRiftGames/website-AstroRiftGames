const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-5xl font-semibold mb-6">Contacto</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nombre" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" />
        <textarea placeholder="Mensaje" rows="5" className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-lg">Enviar mensaje</button>
      </form>
    </section>
    )
  }
  
export default Contact