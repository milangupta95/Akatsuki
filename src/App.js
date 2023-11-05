import './App.css';
import Navbar from './Components/PublicComponents/Navbar';
import RegistrationPage from './Components/DashboardComponents/RegistrationPage';
import { deepPurple, violet, red, grey, blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import HomePage from './Components/PublicComponents/HomePage';
import CustomerTable from './Components/DashboardComponents/CustomerTable';
import Coupons from './Components/DashboardComponents/Coupons';
import Footer from './Components/PublicComponents/Footer';
import Signup from './Components/PublicComponents/Signup';
import Login from './Components/PublicComponents/Login';
import Public from './Components/PublicComponents/Public';
import Dashboard from './Components/DashboardComponents/Dashboard';
import Analytics from './Components/DashboardComponents/Analytics';
import Stream from './Components/DashboardComponents/Stream';
import Store from './Components/DashboardComponents/Store';


function App() {
  const theme = createTheme({
    palette: {
      info: deepPurple,
      error: red,
      secondary: blueGrey
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Public></Public>}>
          <Route path='' element={<HomePage></HomePage>} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='register' element={<RegistrationPage />} />
          <Route path='customers' element={<CustomerTable />} />
          <Route path='coupons' element={<Coupons />} />
          <Route path='analytics' element={<Analytics/>}/>
          <Route path='stream' element={<Stream/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='' element={<Navigate to='/dashboard/analytics'/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
