import {Routes, Route, Router} from 'react-router-dom';
import Home from './components/Home/Home';
import Formulario from './components/Formulario/ProductoForm';

function App () {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<Formulario />} />
      </Routes>
  );
}

export default App;
