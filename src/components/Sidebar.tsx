import { Box, Tooltip, Typography } from "@mui/material"
import logo from '../assets/images/ParkEase_Logo_noBg.png'
import { useLocation, useNavigate } from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard'
import BusinessIcon from '@mui/icons-material/Business'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount'
import PaymentIcon from '@mui/icons-material/Payment';



const listItemBox = {
    height:'50px',
    // width:'200px',
    paddingX:{xs:'20px', sm:'30px'},
    borderRadius:'10px',
    border:'1px solid #2DC98A',
    display:'grid',
    placeItems:'center',
    cursor:'pointer'
}

const listItemText ={
    fontFamily:'Libre Baskerville',
    fontWeight:'600',
    display:{xs:'none', sm:'hidden'}
}

const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();

  return (
    <Box    
        sx={{
            height:'100vh',
            width:{sx:'100px', sm:'300px'},
            backgroundColor:'#101921',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:10
        }}
        >
        <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
                width:{xs:'80px', sm:'200px'},
                height: "auto",
            }}
        />
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                gap:2
            }}
            >
            <Box
                onClick={()=> navigate('dashboard')}
                sx={{
                    ...listItemBox,
                    backgroundColor: location.pathname.startsWith('/dashboard') ? "#2DC98A" : "#101921"
                }}
            >
                <Tooltip title="Dashboard" arrow>
                    <DashboardIcon
                        sx={{
                            display:{xs:'hidden', sm:'none'},
                            color: location.pathname.startsWith('/dashboard') ? "#101921" : "#2DC98A"
                        }}
                    />
                </Tooltip>
                <Typography
                    sx={{
                        ...listItemText,
                        color: location.pathname.startsWith('/dashboard') ? "#101921" : "#2DC98A"
                    }}
                    >
                    Dashboard
                </Typography>
            </Box>
            <Box
                onClick={()=> navigate('companies')}
                sx={{
                    ...listItemBox,
                    backgroundColor: location.pathname.startsWith('/companies') ? "#2DC98A" : "#101921"
                }}
            >
                <Tooltip title="Companies" arrow>
                    <BusinessIcon
                        sx={{
                            display:{xs:'hidden', sm:'none'},
                            color: location.pathname.startsWith('/companies') ? "#101921" : "#2DC98A"
                        }}
                    />
                </Tooltip>
                <Typography
                    sx={{
                        ...listItemText,
                        color: location.pathname.startsWith('/companies') ? "#101921" : "#2DC98A"
                    }}
                    >
                    Companies
                </Typography>
            </Box>
            <Box
                onClick={()=> navigate('users')}
                sx={{
                    ...listItemBox,
                    backgroundColor: location.pathname.startsWith('/users') ? "#2DC98A" : "#101921"
                }}
            >
                <Tooltip title="Users" arrow>
                    <SwitchAccountIcon
                        sx={{
                            display:{xs:'hidden', sm:'none'},
                            color: location.pathname.startsWith('/users') ? "#101921" : "#2DC98A"
                        }}
                    />
                </Tooltip>
                <Typography
                    sx={{
                        ...listItemText,
                        color: location.pathname.startsWith('/users') ? "#101921" : "#2DC98A"
                    }}
                    >
                    Users
                </Typography>
            </Box>
            <Box
                onClick={()=> navigate('payments')}
                sx={{
                    ...listItemBox,
                    backgroundColor: location.pathname.startsWith('/payments') ? "#2DC98A" : "#101921"
                }}
            >
                <Tooltip title="Payments" arrow>
                    <PaymentIcon
                        sx={{
                            display:{xs:'hidden', sm:'none'},
                            color: location.pathname.startsWith('/payments') ? "#101921" : "#2DC98A"
                        }}
                    />
                </Tooltip>
                <Typography
                    sx={{
                        ...listItemText,
                        color: location.pathname.startsWith('/payments') ? "#101921" : "#2DC98A"
                    }}
                    >
                    Payments
                </Typography>
            </Box>
            
        </Box>
    </Box>
  )
}

export default Sidebar
