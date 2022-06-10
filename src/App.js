import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import AreaChart from './Components/AreaChart/AreaChart';
import BarChart from './Components/BarChart/BarChart';
import LineChart from './Components/LineChart/LineChart';
import PieChart from './Components/Pie Chart/PieChart';
import RaderChart from './Components/RadarChart/RaderChart';
import ScatterChart from './Components/ScatterChart/ScatterChart';
import Error from './Components/NotFound/Error';
import Navbar from './Components/Navbar/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/area_chart' element={<AreaChart />} />
        <Route path='/bar_chart' element={<BarChart />} />
        <Route path='/line_chart' element={<LineChart />} />
        <Route path='/pie_chart' element={<PieChart />} />
        <Route path='/redar_chart' element={<RaderChart />} />
        <Route path='/scatter_chart' element={<ScatterChart />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
