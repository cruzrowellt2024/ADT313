import './App.css';
import Name from './component/Name/Name';
import Section from './component/Section/Section';
import Description from './component/Description/Description';

function App() {
  const studentInfo = {
    fName: 'Rowell',
    lName: 'Cruz',
    section: 'BSIT - 3A',
    desc: 'A student of BS Information Technology who is pursuing networking career.'
  }

  return (
    <div className="App">
      <Name firstname={studentInfo.fName} lastname={studentInfo.lName}/>
      <Section section={studentInfo.section}/>
      <Description description={studentInfo.desc}/>
    </div>
  );
}

export default App;
