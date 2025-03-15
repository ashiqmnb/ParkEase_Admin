import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import CustomPagination from "../CustomPagination";


const tableHeadStyle = {
	fontFamily:'Inter',
	fontWeight:'600',
	height: "50px", 
	padding: "5px", 
	lineHeight: "1" 
}
const tableContentStyle = {
	fontFamily: "Inter", 
	height: "40px", 
	padding: "5px", 
	ineHeight: "1",
	cursor:'pointer'
}

interface Company {
	name: string;
	email: string;
	type: string;
	status: string;
	addedDate: string;
}

interface CompaniesTableProps {
	companies : Company[]
}

const CompaniesTable: React.FC<CompaniesTableProps>= ({companies}) => {

	const [page, setPage] = React.useState(1);
	const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
	 	setPage(value);
	};


  return (
   <Box
     	sx={{
       	padding: "30px",
     	}}
   >
     	<Typography
       	sx={{
				fontFamily: "Libre Baskerville",
				fontSize: "25",
				fontWeight: "600",
       	}}
     	>
       	Subscribed Companies
     	</Typography>
	  	<TableContainer sx={{marginTop:'20px'}} component={Paper}>
  			<Table>
  			  	<TableHead>
  					<TableRow
  			   	   sx={{
  			   	     height: "40px",
  			   	     backgroundColor: "#2DC98A",
  			   	   }}
  			   	>
  			   	   <TableCell sx={tableHeadStyle}>Sl No</TableCell>
  			   	   <TableCell sx={tableHeadStyle}>Name</TableCell>
  			   	   <TableCell sx={tableHeadStyle}>Email</TableCell>
  			   	   <TableCell sx={tableHeadStyle}>Type</TableCell>
  			   	   <TableCell sx={tableHeadStyle}>Status</TableCell>
  			   	   <TableCell sx={tableHeadStyle}>Added Date</TableCell>
  			   	</TableRow>
  			  	</TableHead>
  			  	<TableBody>
  			    	{companies.map((company, index) => (
  			      	<TableRow
  			      	  key={index}
  			      	  sx={{
  			      	    height: "40px",
  			      	    backgroundColor: index % 2 === 0 ? "white" : "#E6F8F0",
  			      	  }}
  			      	>
  			        		<TableCell sx={tableContentStyle}>{index + 1}</TableCell>
  			        		<TableCell sx={tableContentStyle}>{company.name}</TableCell>
  			        		<TableCell sx={tableContentStyle}>{company.email}</TableCell>
  			        		<TableCell sx={tableContentStyle}>{company.type}</TableCell>
  			        		<TableCell sx={tableContentStyle}>{company.status}</TableCell>
  			        		<TableCell sx={tableContentStyle}>{company.addedDate}</TableCell>
  			      	</TableRow>
  			    	))}
  			  	</TableBody>
  			</Table>
		</TableContainer>
		<Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
			<CustomPagination count={8} page={page} handleChange={handleChange}/>
		</Box>
   </Box>
  );
};

export default CompaniesTable;
