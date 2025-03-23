import { Box, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button } from "@mui/material";

interface CompaniesHeadProps {
   search: string;
   setSearch: (value: string) => void;
   type: string;
   setType: (value: string) => void;
   status: string;
   setStatus: (value: string) => void;
   pageSize: number;
   setPageSize: (value: number) => void;
   onOpen: ()=>void
}

const CompaniesHead: React.FC<CompaniesHeadProps> = ({ 
   search, 
   setSearch, 
   type, 
   setType, 
   status, 
   setStatus, 
   pageSize,
   setPageSize,
   onOpen
}) => {
   return (
      <Box 
         sx={{
            display:'flex',
            marginX:'30px',
            marginTop:'30px',
            justifyContent:'space-between',
            alignItems:'center'
         }}
         >
         <Typography
            sx={{
               fontFamily: "Libre Baskerville",
               fontSize: 18,
               fontWeight: 600,
            }}
         >
            Subscribed Companies
         </Typography>

         <Box sx={{display:'flex', gap:2}}>
            <TextField
               size="small"
               label="Search Company"
               variant="outlined"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               sx={{ 
                  width: '220px', 
                  "& .MuiInputBase-input": { fontSize: "14px" },
                  "& .MuiInputLabel-root": { fontSize: "12px" }
               }}
            />

            <FormControl sx={{ minWidth: 150 }} size="small">
               <InputLabel>Type</InputLabel>
               <Select 
                  sx={{ fontSize: "14px" }}
                  value={type} 
                  onChange={(e) => setType(e.target.value)} 
                  label="Type"
               >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="public">Public</MenuItem>
                  <MenuItem value="customer">Customer</MenuItem>
               </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 150 }} size="small">
               <InputLabel>Status</InputLabel>
               <Select 
                  sx={{ fontSize: "14px" }}
                  value={status} 
                  onChange={(e) => setStatus(e.target.value)} 
                  label="Status"
               >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
               </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 100 }} size="small">
               <InputLabel>Page Size</InputLabel>
               <Select 
                  value={pageSize} 
                  onChange={(e) => setPageSize(Number(e.target.value))} 
                  label="Page Size"
                  sx={{ fontSize: "14px" }}
               >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
               </Select>
            </FormControl>
         </Box>
         <Button
            onClick={onOpen}
            sx={{
               backgroundColor:'#101921',
               color:'white',
               textTransform:'none',
               paddingX:'20px'
            }}
            >
            Add New Company
         </Button>
      </Box>
   );
};

export default CompaniesHead;
