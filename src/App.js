import './App.css';
import Navbar from './Components/PublicComponents/Navbar';
import { deepPurple, violet, red, grey, blueGrey, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import HomePage from './Components/PublicComponents/HomePage';
import CustomerTable from './Components/DashboardComponents/Customer/CustomerTable';
import Coupons from './Components/DashboardComponents/Coupons/Coupons';
import Footer from './Components/PublicComponents/Footer';
import Signup from './Components/PublicComponents/Signup';
import Login from './Components/PublicComponents/Login';
import Public from './Components/PublicComponents/Public';
import Dashboard from './Components/DashboardComponents/Dashboard';
import Analytics from './Components/DashboardComponents/Analytics/Analytics';
import Stream from './Components/DashboardComponents/Analytics/Stream';
import Store from './Components/DashboardComponents/Analytics/Store';
import Setup from './Components/DashboardComponents/Setup/Setup';
import CustomerProfile from './Components/DashboardComponents/Customer/CustomerProfile';


function App() {
  const theme = createTheme({
    palette: {
      info: deepPurple,
      error: red,
      secondary: blueGrey,
      primary: {
        main: "#5A6ACF"
      }
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
          <Route path='customers' element={<CustomerTable />} />
          <Route path='coupons' element={<Coupons />} />
          <Route path='analytics' element={<Analytics/>}/>
          <Route path='stream' element={<Stream/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='setup' element={<Setup/>}/>
          <Route path='customer' element={<CustomerProfile/>}/>
          <Route path='' element={<Navigate to='/dashboard/analytics'/>}/>
        </Route>

        
      </Routes>
    </ThemeProvider>
  );
}

export default App;
