import './App.css';
import GeneralInformation from './Component/GeneralInformation';
import Header from './Component/Header';
import EducationalInformation from './Component/EducationalInformation';
import PracticalInformation from './Component/PracticalInformation';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path='/' element={<GeneralInformation />} />
        <Route path='Education' element={<EducationalInformation />} />
        <Route path='Education/Experience' element={<PracticalInformation />} />
      </Routes>
    </div>
  );
}

export default App;
