export default function HomeTemplate() {
  return (
    <>
      <section className="h-screen bg-[url(https://fisiotali.sirv.com/landing/images/banner-img.png)] bg-cover bg-center">
        <div className="pt-20 h-[85%] flex flex-col justify-center text-center">
          <h1 className="text-8xl font-[Cascadia_Mono] font-bold italic text-lime-800">
            FISIOTALI
          </h1>
          <p className="text-xl font-semibold">
            Centro Fisioterapéutico y Quiropráctico
          </p>
          <p>
            Expertos en Protocolos de Avanzada para la Salud Osteoneuromuscular
          </p>
          <footer className="mt-16 flex gap-4 justify-center">
            <button className="bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-colors">
              Agendar Cita
            </button>
            <button className="bg-lime-500  text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-colors">
              Servicios
            </button>
          </footer>
        </div>
        <footer className="h-[15%] grid grid-cols-4 opacity-80 bg-lime-950/50">
          <div className="border border-white flex flex-col justify-center items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">15+</h3>
              <p className="text-white text-sm">Años de experiencia</p>
            </div>
          </div>
          <div className="border border-white flex flex-col justify-center items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">1045+</h3>
              <p className="text-white text-sm">Pacientes atendidos</p>
            </div>
          </div>
          <div className="border border-white flex flex-col justify-center items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">3567+</h3>
              <p className="text-white text-sm">Procedimientos realizados</p>
            </div>
          </div>
          <div className="bg-white text-lime-500 flex flex-col justify-center items-center">
            <div>
              <h3 className="text-2xl font-bold">Unicación</h3>
              <p className="text-sm">Barranquilla - Colombia</p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
