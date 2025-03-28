import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Toaster } from "sonner";
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Companies from './pages/Companies';
import Users from './pages/Users';
import Payments from './pages/Payments';
import Login from './pages/Login';
import CompanyById from './pages/CompanyById';
import UserById from './pages/UserById';




function AppContext(){
  return(
    <Box>
      <Toaster 
        position="top-right" 
        richColors
        duration={3000}
        // expand={true} 
      />
      

      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='dashboard' element={<Dashboard/>}/>

          <Route path='companies' element={<Companies/>}/>
          <Route path='companies/:companyId' element={<CompanyById/>}/>


          <Route path='users' element={<Users/>}/>
          <Route path='users/:userId' element={<UserById/>}/>

          <Route path='payments' element={<Payments/>}/>
        </Route>

        <Route path='/login' element={<Login/>}/>

      </Routes>
    </Box>
  )
}


function App() {
  return (
    <Router>
      <AppContext/>
    </Router>
  )
}

export default App
