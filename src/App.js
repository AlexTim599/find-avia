import './App.css';

import FlyCards from './components/FlyCards';
import { Button } from 'react-bootstrap';
import FilterPanel from './components/FilterPanel'
import Card from './components/Card';
import { useSelector } from "react-redux"

function App() {
  const arrfind = useSelector((state) => state.findAvia.schedule)


  return (

    <div className='container-sm mt-5'>
      <div className="App"  >
        < FilterPanel />
        <div className='container-sm'>
          <FlyCards />
          <FlyCards />
          <div className='d-flex justify-content-center'>
            <Button variant="secondary" size="md">Показать еще </Button>
          </div>
        </div>
        {/* <Card flight={arrfind[0].result.flights} /> */}


      </div>
    </div>

  );
}

export default App;
