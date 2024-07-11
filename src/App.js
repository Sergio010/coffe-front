import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Menu } from './components/Menu';
import { ListCoffee } from './pages/ListCoffee'; // Importa ListCoffee con llaves

import {AuthProvider}  from './auth/AuthContext';
import {LoginPage} from './pages/LoginPage'; // Asegúrate de importar LoginPage correctamente
import { CreateCoffeePage } from './pages/CreateCoffePage';
import { PrivateRoute } from './auth/PrivateRoute';
import { CreateUser } from './pages/CreateUser';
import { ListUsers } from './pages/ListUser';


import Hero from './components/Hero/Hero';
import Services from './components/General/Services/Services';
import Bottom from './components/General/Bottom/Bottom';

import  Footer from './components/Footer';

import { AcercaDe } from './pages/AcercaDe';

function App() {
    const handleSubmitCoffee = () => {
      console.log('Café creado'); // Aquí puedes agregar la lógica de lo que quieres hacer cuando se envíe el café
    };
  
    return (
      <AuthProvider>
        <HashRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Services />
              <Home />
              <Footer /> {/* Aquí integramos el componente Footer al final de la página */}
            </>} />
            <Route path="/listCoffees" element={<ListCoffee />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-coffee" element={<CreateCoffeePage onSubmit={handleSubmitCoffee} />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/list-users" element={<ListUsers />} />

            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="*" element={<p>Ups, no existe la ruta</p>} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    );
  }

export default App;
