import { Box, Tooltip, Typography } from "@mui/material";
import { TbCoinRupeeFilled } from "react-icons/tb";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	const coins = localStorage.getItem('coins');


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
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
				}}
			>
				<Box
					sx={{
					display: "flex",
					alignItems: "center",
					gap: 0.5,
					}}
				>
					<Typography sx={{ fontWeight: "600" }}>{coins}</Typography>
					<TbCoinRupeeFilled
					style={{
						color: "#FFD700",
						fontSize: "25px",
					}}
					/>
				</Box>
				<Tooltip title="notifications" arrow>
					<NotificationsIcon sx={{ cursor: "pointer" }} />
				</Tooltip>
				<Tooltip title="log out" arrow>
					<LogoutIcon
					onClick={() => {
						localStorage.clear();
						navigate("/login");
					}}
					sx={{ cursor: "pointer" }}
					/>
				</Tooltip>
			</Box>
			</Box>
		</Box>
	);
};

export default Navbar;
