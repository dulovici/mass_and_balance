import { useState } from 'react';
import './App.scss';
import Envelope  from './Components/Envelope/Envelope';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import InputTable from './Components/InputTable/InputTable';

function App() {
  const [takeOff,setTakeOff] = useState({});
  const [landing,setLanding] = useState({});

  
  return (
    <div className="App">
      <Header />
      <InputTable setTakeOff={setTakeOff} setLanding={setLanding} takeOff={takeOff} landing={landing}/>
      <Envelope takeOff={takeOff} landing={landing}/>
      <Footer />
    </div>
  );
}

export default App;
