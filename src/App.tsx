import "./App.css";
import Alumno from "./components/Alumno";

function App() {
  return (
    <>
      <Alumno
        name="Bruno"
        lastName="Osorio"
        aboutMe="Soy estudiante"
        job="Estudiante"
        ageOfExperience={2}
      />
      <Alumno
        name="Maria"
        lastName="Rodriguez"
        aboutMe="Soy Estudiante"
        job="Camarera"
        ageOfExperience={3}
      />
      <Alumno
        name="Angel"
        lastName="Caridad"
        aboutMe="Diseñador, Estudiante"
        job="Desarrollador"
        ageOfExperience={4}
      />
    </>
  );
}

export default App;
