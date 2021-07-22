import { useState } from 'react';
import './App.scss';
import Envelope  from './Components/Envelope/Envelope';
import InputTable from './Components/InputTable/InputTable';

function App() {
  const [takeOff,setTakeOff] = useState({});
  const [landing,setLanding] = useState({});

  
  return (
    <div className="App">
      <InputTable setTakeOff={setTakeOff} setLanding={setLanding} takeOff={takeOff} landing={landing}/>
      <Envelope takeOff={takeOff} landing={landing}/>
    </div>
  );
}

export default App;
