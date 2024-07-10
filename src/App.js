import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Menu } from './components/Menu';
import { ListCoffee } from './pages/ListCoffee'; // Importa ListCoffee con llaves

import {AuthProvider}  from './auth/AuthContext';
import {LoginPage} from './pages/LoginPage'; // Asegúrate de importar LoginPage correctamente
import { CreateCoffeePage } from './pages/CreateCoffePage';
import { PrivateRoute } from './auth/PrivateRoute';
import { CreateUser } from './pages/CreateUser';
import { ListUsers } from './pages/ListUser';

function App() {
  const handleSubmitCoffee = () => {
      console.log('Café creado'); // Aquí puedes agregar la lógica de lo que quieres hacer cuando se envíe el café
  };

  return (
      <AuthProvider>
          <HashRouter>
              <Menu />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/page1" element={<Page1 />} />
                  <Route path="/page2" element={<Page2 />} />
                  <Route path="/listCoffees" element={<ListCoffee />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/create-coffee" element={<PrivateRoute><CreateCoffeePage onSubmit={handleSubmitCoffee} /></PrivateRoute>} />
                  <Route path="/create-user" element={<PrivateRoute><CreateUser /></PrivateRoute>} />
                  <Route path="/list-users" element={<PrivateRoute><ListUsers /></PrivateRoute>} />
                  <Route path="*" element={<p>Ups, no existe la ruta</p>} />
              </Routes>
          </HashRouter>
      </AuthProvider>
  );
}


export default App;
