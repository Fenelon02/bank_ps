import Services_Grid from "./Services_Grid";

export default function Offered_services() {
  return (
    <div id="Services" className="px-8 md:px-12 lg:px-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold text-center mt-4 ">Serviços Ofertados</h2>
      <Services_Grid />
    </div>
  );
}