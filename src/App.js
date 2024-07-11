import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Menu } from './components/Menu';
import { ListCoffee } from './pages/ListCoffee'; 

import {AuthProvider}  from './auth/AuthContext';
import {LoginPage} from './pages/LoginPage'; 
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
      console.log('Café creado'); 
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
              <Footer /> {}
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
