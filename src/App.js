import './App.css';
import SortedAside from './components/SortedAside';
import FiltredAside from './components/FiltredAside';
import PriceAside from './components/PriceAside';
import AirlinesAside from './components/AirlinesAside';
import FlyCards from './components/FlyCards';
import { Button } from 'react-bootstrap';

function App() {
  return (

    <div className='container-sm mt-5'>
      <div className="App"  >
        <div style={{ width: '300px', fontSize: '13px', marginTop: "30px" }}>
          <SortedAside />
          <FiltredAside />
          <PriceAside />
          <AirlinesAside />
        </div>
        <div className='container-sm'>
          <FlyCards />
          <FlyCards />
          <div className='d-flex justify-content-center'>
            <Button variant="secondary" size="md">Показать еще </Button>
          </div>
        </div>


      </div>
    </div>

  );
}

export default App;
