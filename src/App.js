import logo from './logo.svg';
import './App.css';
import Floorplan from './FloorPlan';

function App() {

  return (
    <div className='div'>
      <Floorplan
        roomPlan={{
          sizes: ['Half', 'Full'],
          bedNum: ['Bedroom 1', 'Bedroom 2', 'Bedroom 3'],
        }}
      />

    </div>
  );
}

export default App;

