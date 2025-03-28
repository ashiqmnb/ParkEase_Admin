import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CustomPagination from "../CustomPagination";
import { User } from "../../types/userTypes";

const tableHeadStyle = {
   fontFamily: "Inter",
   fontWeight: "600",
   height: "50px",
   padding: "5px",
   lineHeight: "1",
};
const tableContentStyle = {
   fontFamily: "Inter",
   height: "40px",
   padding: "5px",
   ineHeight: "1",
   cursor: "pointer",
};


interface UsersTableProps{
   users: User[],
   page: number,
   handlePageChange: (_: React.ChangeEvent<unknown>, value: number)=>void,
   totalPage: number,
   pageSize: number
}

const UsersTable: React.FC<UsersTableProps> = ({handlePageChange, page, pageSize, totalPage, users}) => {
  const starting = pageSize*(page-1)+1 ;
   const navigate = useNavigate();

   return (
      <Box sx={{ padding: "30px" }}>
         <TableContainer component={Paper}>
            <Table>
               <TableHead>
                  <TableRow
                  sx={{
                     height: "40px",
                     backgroundColor: "#2DC98A",
                  }}
                  >
                  <TableCell sx={{ ...tableHeadStyle, paddingLeft: "20px" }}>
                     Sl No
                  </TableCell>
                  <TableCell sx={tableHeadStyle}>Name</TableCell>
                  <TableCell sx={tableHeadStyle}>Email</TableCell>
                  <TableCell sx={tableHeadStyle}>Coin</TableCell>
                  <TableCell sx={tableHeadStyle}>Added Date</TableCell>
                  <Tooltip
                     title="Block or Unblock"
                     placement="top-start"
                     PopperProps={{
                        modifiers: [
                        {
                           name: "offset",
                           options: {
                              offset: [10, -20],
                           },
                        },
                        ],
                     }}
                  >
                     <TableCell sx={tableHeadStyle}>B/U</TableCell>
                  </Tooltip>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {users?.map((user, index) => (
                     <TableRow
                        onClick={() => navigate(`/users/${user.id}`)}
                        key={index}
                        sx={{
                           height: "40px",
                           backgroundColor: index % 2 === 0 ? "white" : "#E6F8F0",
                        }}
                     >
                        <TableCell sx={{ ...tableContentStyle, paddingLeft: "20px" }}>
                           {index + starting}
                        </TableCell>
                        <TableCell sx={tableContentStyle}>{user.name}</TableCell>
                        <TableCell sx={tableContentStyle}>{user.email}</TableCell>
                        <TableCell sx={tableContentStyle}>{user.coins}</TableCell>
                        <TableCell sx={tableContentStyle}>
                           {new Date(user.addedDate).toLocaleDateString("en-GB")}
                        </TableCell>
                        <TableCell sx={tableContentStyle}>
                           {user.isBlocked ? (
                              <CancelIcon sx={{ color: "red" }} />
                           ) : (
                              <CheckCircleIcon sx={{ color: "green" }} />
                           )}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <CustomPagination count={totalPage} page={page} handleChange={handlePageChange}/>
         </Box>
      </Box>
   );
};

export default UsersTable;
