import logo from "./logo.svg";
import "./App.css";
import BioData from "./components/BioData";

function App() {
  return (
    <div className="App">
      <BioData
        name="Jayesh"
        age="25"
        gender="Male"
        address="Pune"
        email="cf@gmail.com"
        phone="12025435"
        religion="Islam"
        nationality="Bangladesi"
        skills={["HTML", "CSS", "JS", "React", "NodeJS"]}
        interests={["Reading", "Writing", "Travelling"]}
      />

      <BioData
        name="Asif"
        age="23"
        gender="Male"
        address="Pune"
        email="df@gmail.com"
        religion="Islam"
        nationality="Indian"
        skills={["HTML", "CSS", "JS", "React"]}
        interests={["Reading", "Writing"]}
      />
      
      <BioData 
        name="Sachin"
        age="25"
        gender="Male"
        address="Pune"
        email="gf@gmail.com"
        phone="12025435"
        religion="Islam"
        nationality="Indian"
        skills={["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB", "ExpressJS", "React Native"]}
        interests={["Reading", "Writing", "Travelling", "Music", "Dancing", "Cooking", "Singing", "Gaming"]}/>
    </div>
  );
}

export default App;
