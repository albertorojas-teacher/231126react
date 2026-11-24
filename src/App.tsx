// Importamos los componentes  visuales y la lista de datos que mostrara la pagina
import Header from "./components/Header";
import DevCard from "./components/DevCard";
import { developers } from "./data/developers";

// App compone la pagina principal a partir de componentes mas pequeños
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Pasamos el titulo y el numero de desarrolladores como props a header */}
      <Header title="DevTeam Directory" totalDevs={developers.length} />

      <main className="max-w-4xl mx-auto p-6">
        {/* La cuadricula que cambia de una a 3 columnas segun el ancho de la pantalla  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* mapeo o map para crear una tarjeta por perfil, key ayuda a react a identificarla en la lista */}
          {developers.map((dev) => (
            <DevCard key={dev.id} dev={dev} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
