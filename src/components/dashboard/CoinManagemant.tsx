import { Box, CircularProgress, Typography } from "@mui/material";


interface CoinManagemantProps {
   admin: number;
   company: number;
   user: number;
   total: number;
   coinPending: boolean;
}

const boxStyle={
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   height: "100%",
   flexDirection:'column',
   gap:1,
   width:'25%'
}

const CoinManagemant: React.FC<CoinManagemantProps> = ({
   admin,
   company,
   user,
   total,
   coinPending,
}) => {
   return (
      <Box sx={{ marginTop: "30px" }}>
         <Typography sx={{ fontSize: "24px", fontFamily: "Li", fontWeight: "600" }} >
               Coins Exchange
         </Typography>

         {coinPending ? 
            <Box sx={{ width:'100%', height:'120px', display:'flex', justifyContent:'center', alignItems:'center' }}>
               <CircularProgress size={24} sx={{color:'black'}} />
            </Box>
            :
            <Box sx={{ width:'100%', height:'120px', display:'flex' }}>
               <Box sx={{...boxStyle, backgroundColor:'#101921'}}>
                  <Typography sx={{ fontSize:'36px', fontWeight:'600', color:'#2DC98A'}}>
                     {admin}
                  </Typography>
                  <Typography sx={{ fontSize:'20px', fontWeight:'600', marginTop:'-20px', color:'#2DC98A' }}>
                     Held by Admin
                  </Typography>
               </Box>

               <Box sx={{...boxStyle, backgroundColor:'#2DC98A'}} >
                  <Typography sx={{ fontSize:'36px', fontWeight:'600', color:'#101921'}}>
                     {company}
                  </Typography>
                  <Typography sx={{ fontSize:'20px', fontWeight:'600', marginTop:'-20px',color:' #101921' }}>
                     Held by Companies
                  </Typography>
               </Box>
               <Box sx={{...boxStyle, backgroundColor:'#101921'}}>
                  <Typography sx={{ fontSize:'36px', fontWeight:'600', color:'#2DC98A' }}>
                     {user}
                  </Typography>
                  <Typography sx={{ fontSize:'20px', fontWeight:'600', marginTop:'-20px', color:'#2DC98A'  }}>
                     Held by Users
                  </Typography>
               </Box>
               <Box sx={{...boxStyle, backgroundColor:'#2DC98A'}}>
                  <Typography sx={{ fontSize:'36px', fontWeight:'600', color:'#101921'}}>
                     {total}
                  </Typography>
                  <Typography sx={{ fontSize:'24px', fontWeight:'600', marginTop:'-20px', color:'#101921' }}>
                     Total
                  </Typography>
               </Box>
            </Box>
         }
      </Box>
   );
};

export default CoinManagemant;
