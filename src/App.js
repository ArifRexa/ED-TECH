import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/shared/Header/Header';
import Footer from './Pages/shared/Footer/Footer';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route index element={<Home />} />
            
            <Route path='service' element={
              <PrivetRoute>
                {' '}
                <Services />
              </PrivetRoute>
            }
          ></Route>
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>


      </AuthProvider>

    </div>
  );
}

export default App;
