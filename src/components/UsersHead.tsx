import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

interface UsersHeadProps{
   search: string;
   setSearch: (value: string) => void;
   pageSize: number;
   setPageSize: (value: number) => void;
}

const UsersHead: React.FC<UsersHeadProps> = ({search, setSearch, pageSize, setPageSize}) => {
   return (
      <Box
         sx={{
            display: "flex",
            marginX: "30px",
            marginTop: "30px",
            justifyContent: "space-between",
            alignItems: "center",
         }}
         >
         <Typography
            sx={{
               fontFamily: "Libre Baskerville",
               fontSize: 18,
               fontWeight: 600,
            }}
         >
            Subscribed Users
         </Typography>
         <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
               size="small"
               label="Search Company"
               variant="outlined"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               sx={{
                  width: "220px",
                  "& .MuiInputBase-input": { fontSize: "14px" },
                  "& .MuiInputLabel-root": { fontSize: "12px" },
               }}
            />

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
      </Box>
   );
};

export default UsersHead;
