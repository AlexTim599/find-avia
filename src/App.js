import './App.css';

import FlyCards from './components/FlyCards';
import { Button } from 'react-bootstrap';
import FilterPanel from './components/FilterPanel'
import { useSelector } from "react-redux"

function App() {

  const flights = useSelector((state) => state.flights.flights)

  return (

    <div className='container-sm mt-5'>
      <div className="App"  >
        < FilterPanel />
        <div className='container-sm'>
          <FlyCards flights={flights} />
          <div className='d-flex justify-content-center'>
            <Button variant="secondary" size="md">Показать еще </Button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
