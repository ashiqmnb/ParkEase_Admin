import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { TbCoinRupeeFilled } from "react-icons/tb";


interface ProfileDetailsProps{
   name: string,
   coins: number,
   description: string,
   district: string,
   email: string,
   isBlocked: boolean,
   phone: string,
   place: string,
   postalCode: number,
   profile: string,
   state: string,
   subscriptionStatus: string,
   type: string,
   startDate: string,
   endDate: string,
   handleBlock: ()=>void,
   isPending: boolean
}

const ProfileDetails : React.FC<ProfileDetailsProps> = ({
   name, coins, description, district, email, isBlocked,
   phone, place, postalCode, profile, state, subscriptionStatus,
   type, startDate, endDate, handleBlock, isPending
}) => {


   return (
      <Box
         sx={{
            padding: "30px",
            backgroundColor:'white',
            borderRadius:'10px',
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
         }}
      >
         <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography 
               sx={{
                  fontFamily: "Li",
                  fontSize: "24px",
                  color: "#101921",
                  marginBottom: "10px",
               }}
               >
                  {name}
            </Typography>
            <Box sx={{display:'flex', alignItems:'center',gap:2}}>
               <Typography sx={{ fontSize:'16px',}}>
                  Listed Slots
               </Typography>
               <Typography sx={{ fontSize:'14px',  fontWeight:'600',}}>
                  12 (2W)  24(4W)
               </Typography>
            </Box>
         </Box>

         <Box
            sx={{display:'flex', gap:2}}
            >
            {profile ? 
               <Box
                  component="img"
                  src={profile}
                  sx={{
                     borderRadius:'5px',
                     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                     height: "250px",
                     width: "250px",
                  }}
               />
               :
               <Box 
                  sx={{
                     borderRadius:'5px',
                     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                     height: "250px",
                     width: "250px",
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

            {/* right side */}
            <Box sx={{flex:1}}>
              <Box sx={{display:'flex', gap:2}}>
                  {/* description */}
                  <Box
                     sx={{
                        backgroundColor:'#EFF3F2',
                        padding:'10px',
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        width:'40%',
                        flex:1,
                     }}
                     >
                     <Typography sx={{ fontSize:'16px', fontWeight:'600' }}>
                        Description
                     </Typography>
                     {description ? 
                        <Typography sx={{ fontSize:'14px'}} >
                           {description}
                        </Typography>
                        :
                        <Typography sx={{color:'gray'}}>
                           No address added
                        </Typography>
                     }
                  </Box>

                  <Box
                     sx={{
                        backgroundColor:'#EFF3F2',
                        padding:'10px',
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        width:'40%',
                        flex:1
                     }}
                     >
                     <Typography sx={{ fontSize:'16px', fontWeight:'600' }}>
                        Contact
                     </Typography>
                     <Typography sx={{ fontSize:'14px'}} >
                        Email :- {email}
                     </Typography>
                     <Typography sx={{ fontSize:'14px'}} >
                       Phone :-  {phone}
                     </Typography>
                  </Box>
              </Box>
              <Box
               sx={{display:'flex', gap:2, marginTop:'20px', justifyContent:'space-between'}}
               >
                  <Box
                     sx={{
                        backgroundColor:'#EFF3F2',
                        padding:'10px',
                        borderRadius:'5px',
                        width:'40%',
                        fontFamily:'Inter',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                     }}
                     >
                     <Typography sx={{ fontSize:'16px', fontWeight:'600' }}>
                        Address
                     </Typography>

                     {place && district && state ? 
                        <Typography sx={{ fontSize:'14px'}}>
                           {place}, {district}, {state}, {postalCode}
                        </Typography>
                        :
                        <Typography sx={{color:'gray'}}>
                           No address added
                        </Typography>
                     }

                     <Typography>
                        Type : {type}
                     </Typography>
                  </Box>
                  <Box
                     sx={{
                        backgroundColor:'#EFF3F2',
                        padding:'10px',
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        width:'35%'
                     }}
                     >
                     <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography sx={{ fontSize:'16px', fontWeight:'600' }}>
                           Subscription Status
                        </Typography>
                        <Typography 
                           sx={{
                              paddingX:'10px', 
                              fontSize:'14px',
                              borderRadius:'20px', 
                              fontFamily:'Li',
                              border: `2px solid ${subscriptionStatus === 'Active' ? 'green' : 'red'}`,
                              backgroundColor: subscriptionStatus === 'Active' ? 'rgba(0, 128, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                              color: subscriptionStatus === 'Active' ? 'green' : 'red',
                           }}
                           >
                           {subscriptionStatus}
                        </Typography>
                     </Box>
                     {subscriptionStatus === "Active" ?
                        <Box>
                           <Typography sx={{ fontSize:'14px'}}>
                              Start Date : {new Date(startDate).toLocaleDateString('en-GB')}
                           </Typography>
                           <Typography sx={{ fontSize:'14px'}}>
                              End Date : {new Date(endDate).toLocaleDateString('en-GB')}
                           </Typography>
                        </Box>
                        :
                        <Box sx={{marginTop:'20px'}}>
                           <Typography sx={{color:'gray'}}>
                              No Active Subscription
                           </Typography>S
                        </Box>
                        }
                  </Box>
                  <Box
                     sx={{
                        backgroundColor:'#EFF3F2',
                        padding:'10px',
                        borderRadius:'5px',
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        width:'15%',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        gap:1
                     }}
                     >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, }} >
                           <Typography sx={{ fontWeight: "600" }}>{coins}</Typography>
                           <TbCoinRupeeFilled
                              style={{
                                 color: "#FFD700",
                                 fontSize: "25px",
                              }}
                           />
                        </Box>
                        <Button
                           onClick={handleBlock}
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
            </Box>
         </Box>
      </Box>
   );
};

export default ProfileDetails;
