import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { TbCoinRupeeFilled } from "react-icons/tb";


interface UserProfileProps{
   profile: string;
   name: string;
   coins: number;
   email : string;
   phone: string;
   isPending: boolean;
   isBlocked: boolean;
   handleBlockUnblock: ()=> void;
}

const UserProfile: React.FC<UserProfileProps> = ({
   profile,
   name, 
   coins,
   email,
   phone,
   isBlocked,
   isPending,
   handleBlockUnblock
}) => {
   return (
      <Box
         sx={{
            padding: "30px",
            backgroundColor:'white',
            borderRadius:'10px',
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display:'flex',
            justifyContent:'space-between',
            gap:2
         }}
         >
         <Box>
            {profile ? 
                  <Box
                     component="img"
                     src={profile}
                     sx={{
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        height: "200px",
                        width: "200px",
                     }}
                  />
                  :
                  <Box 
                     sx={{
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        height: "200px",
                        width: "200px",
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                     }}
                     >
                     <Typography sx={{color:'gray'}}>
                        No profile added
                     </Typography>
                  </Box>
               }
         </Box>
         <Box sx={{display:'flex',flex:1, flexDirection:'column', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
               <Typography sx={{ fontWeight:'600', fontSize:'20px'}}>
                  {name}
               </Typography>
               <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, }} >
                  <Typography sx={{ fontWeight: "600" }}>{coins}</Typography>
                  <TbCoinRupeeFilled
                     style={{
                        color: "#FFD700",
                        fontSize: "25px",
                     }}
                  />
               </Box>
            </Box>

            <Box>
               <Typography>
                  Email : <strong>{email}</strong>
               </Typography>
               <Typography>
                  Phone : <strong>{phone ? phone : "Phone number not found"}</strong>
               </Typography>
            </Box>

            <Button
               onClick={handleBlockUnblock}
               variant="contained"
               sx={{
                  backgroundColor: isBlocked ? 'rgba(0, 128, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)',
                  width:'100%',
                  textTransform:'none',
                  color:'white'
               }}
               >
                  {isPending ? (
                      <CircularProgress size={20} sx={{ color: 'white' }} />
                  ) : (
                      isBlocked ? 'Unbloack':'Block'
                  )}
            </Button>

         </Box>
      </Box>
   )
}

export default UserProfile
