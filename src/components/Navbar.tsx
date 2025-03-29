import { Box, Tooltip, Typography } from "@mui/material";
import { TbCoinRupeeFilled } from "react-icons/tb";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import LogoutModal from "./modals/LogoutModal";
import { useState } from "react";

const Navbar = () => {
   const navigate = useNavigate();

   const coins = localStorage.getItem("coins");
   const [openLogout, setOpenLogout] = useState<boolean>(false);

   const handleLogout = ()=>{
      localStorage.clear();
      navigate("/login");
   }

   return (
      <Box
         sx={{
            height: "100%",
            width: "auto",
            backgroundColor: "#2DC98A",
         }}
         >
         <Box
            sx={{
               height: "100%",
               paddingX: "30px",
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Typography
               sx={{
                  fontFamily: "Libre Baskerville",
                  fontSize: "clamp(14px, 2vw, 24px)",
                  fontWeight: "600",
               }}
            >
               Admin Panal
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
               <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, }} >
                  <Typography sx={{ fontWeight: "600" }}>{coins}</Typography>
                  <TbCoinRupeeFilled
                     style={{
                        color: "#FFD700",
                        fontSize: "25px",
                     }}
                  />
               </Box>
               <Tooltip title="log out" arrow>
                  <LogoutIcon 
                     onClick={()=> setOpenLogout(true)}
                     sx={{ cursor: "pointer" }}
                  />
               </Tooltip>
            </Box>
         </Box>
         
         <LogoutModal
            open={openLogout}
            onClose={()=> setOpenLogout(false)}
            onConfirm={handleLogout}
         />
      </Box>
   );
};

export default Navbar;
