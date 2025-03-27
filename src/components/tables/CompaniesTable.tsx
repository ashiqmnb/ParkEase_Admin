import {
   Box,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Tooltip,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import CustomPagination from "../CustomPagination";
import { Company } from "../../types/companyTypes";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


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

interface CompaniesTableProps {
   companies: Company[];
   page: number,
   handlePageChange: (_: React.ChangeEvent<unknown>, value: number)=>void,
   totalPage: number,
   pageSize: number
}



const CompaniesTable: React.FC<CompaniesTableProps> = ({ companies, page, handlePageChange, totalPage, pageSize }) => {

   const starting = pageSize*(page-1)+1 ;
   const navigate = useNavigate();

   return (
      <Box sx={{ padding: "30px" }}>
         <TableContainer  component={Paper}>
            <Table>
               <TableHead>
                  <TableRow
                     sx={{
                        height: "40px",
                        backgroundColor: "#2DC98A",
                     }}
                  >
                     <TableCell sx={{...tableHeadStyle, paddingLeft:'20px'}}>Sl No</TableCell>
                     <TableCell sx={tableHeadStyle}>Name</TableCell>
                     <TableCell sx={tableHeadStyle}>Email</TableCell>
                     <TableCell sx={tableHeadStyle}>Type</TableCell>
                     <TableCell sx={tableHeadStyle}>Status</TableCell>
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
                  {companies?.map((company, index) => (
                  <TableRow
                     onClick={()=> navigate(`/companies/${company.id}`)}
                     key={index}
                     sx={{
                        height: "40px",
                        backgroundColor: index % 2 === 0 ? "white" : "#E6F8F0",
                     }}
                  >
                     <TableCell sx={{...tableContentStyle, paddingLeft:'20px'}}>{index + starting}</TableCell>
                     <TableCell sx={tableContentStyle}>{company.name}</TableCell>
                     <TableCell sx={tableContentStyle}>{company.email}</TableCell>
                     <TableCell sx={tableContentStyle}>{company.type}</TableCell>
                     <TableCell sx={tableContentStyle}>{company.status}</TableCell>
                     <TableCell sx={tableContentStyle}>
                        {new Date(company.addedDate).toLocaleDateString('en-GB')}
                     </TableCell>
                     <TableCell sx={tableContentStyle}>
                        {company.isBlocked ?
                           <CancelIcon sx={{color:'red'}} />
                           :
                           <CheckCircleIcon sx={{color:'green'}}/>
                        }
                        
                     </TableCell>
                  </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         <Box sx={{ display: "flex", justifyContent: "center", marginTop:'20px' }}>
            <CustomPagination count={totalPage} page={page} handleChange={handlePageChange} />
         </Box>
      </Box>
   );
};

export default CompaniesTable;
