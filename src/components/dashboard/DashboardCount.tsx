import { Box, CircularProgress, Typography } from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


interface DashboardCountProps {
   companies: number;
   users: number;
   slots: number;
   revenue: number;
   usersPending: boolean;
   slotPending: boolean;
   revenuePending: boolean;
}

const DashboardCount: React.FC<DashboardCountProps> = ({
   companies, 
   users, 
   slots, 
   revenue,
   revenuePending,
   slotPending,
   usersPending
}) => {
   return (
      <Box
         sx={{
            width: "100%",
            height: "170px",
            display:'flex',
         }}
      >
         <Box
            sx={{
               height: "100%",
               width: "25%",
               backgroundColor: "rgba(45, 201, 138, 0.3)",
               display:'flex',
               justifyContent:'center',
               alignItems:'center',
            }}
            >
               {usersPending ? 
                  <CircularProgress size={30} sx={{color:'black'}}/>
                  :
                  <Box 
                     sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height: "100%",
                        gap:1
                     }}>
                     <BusinessIcon sx={{ color:'#2DC98A', fontSize:'80px' }} />
                     <Box>
                        <Typography sx={{ fontSize:'40px', fontWeight:'600'}}>
                           {companies}
                        </Typography>
                        <Typography sx={{ fontSize:'24px', fontWeight:'600', marginTop:'-20px' }}>
                           Companies
                        </Typography>
                     </Box>
                  </Box>
               }
               
         </Box>
         <Box
            sx={{
               height: "100%",
               width: "25%",
               backgroundColor: "rgba(16, 25, 33, 0.3)",
               display:'flex',
               justifyContent:'center',
               alignItems:'center',
            }}
            >
               {usersPending ? 
                  <CircularProgress size={30} sx={{color:'black'}}/>
                  :
                  <Box 
                     sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height: "100%",
                        gap:1
                     }}>
                     <PeopleOutlineIcon sx={{ color:'#101921', fontSize:'100px' }} />
                     <Box>
                        <Typography sx={{ fontSize:'40px', fontWeight:'600'}}>
                           {users}
                        </Typography>
                        <Typography sx={{ fontSize:'24px', fontWeight:'600', marginTop:'-20px' }}>
                           Users
                        </Typography>
                     </Box>
                  </Box>
               }
         </Box>
         <Box
            sx={{
               height: "100%",
               width: "25%",
               backgroundColor: "rgba(45, 201, 138, 0.3)",
               display:'flex',
               justifyContent:'center',
               alignItems:'center',
            }}
            >
               {slotPending ? 
                  <CircularProgress size={30} sx={{color:'black'}}/>
                  :
                  <Box 
                     sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height: "100%",
                        gap:1
                     }}>
                     <LocalParkingIcon sx={{ color:'#2DC98A', fontSize:'80px' }} />
                     <Box>
                        <Typography sx={{ fontSize:'40px', fontWeight:'600'}}>
                           {slots}
                        </Typography>
                        <Typography sx={{ fontSize:'24px', fontWeight:'600', marginTop:'-20px' }}>
                           Slots
                        </Typography>
                     </Box>
                  </Box>
               }
         </Box>
         <Box
            sx={{
               height: "100%",
               width: "25%",
               backgroundColor: "rgba(16, 25, 33, 0.3)",
               display:'flex',
               justifyContent:'center',
               alignItems:'center',
            }}
            >
               {revenuePending ? 
                  <CircularProgress size={30} sx={{color:'black'}}/>
                  :
                  <Box 
                     sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height: "100%",
                        gap:1
                     }}>
                     <CurrencyRupeeIcon sx={{ color:'#101921', fontSize:'80px' }} />
                     <Box>
                        <Typography sx={{ fontSize:'40px', fontWeight:'600'}}>
                           {revenue}
                        </Typography>
                        <Typography sx={{ fontSize:'24px', fontWeight:'600', marginTop:'-20px' }}>
                           Revenue
                        </Typography>
                     </Box>
                  </Box>
               }
         </Box>
      </Box>
   );
};

export default DashboardCount;
