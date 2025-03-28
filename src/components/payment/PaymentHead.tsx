import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

interface PaymentHeadProps{
   pageSize: number;
   setPageSize: (value: number) => void;
}


const PaymentHead: React.FC<PaymentHeadProps> = ({pageSize, setPageSize}) => {
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
            sx={{ fontFamily: "Libre Baskerville", fontSize: 18, fontWeight: 600 }}
            >
            Payment History
         </Typography>

         <Box sx={{ display: "flex", gap: 2 }}>
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
}

export default PaymentHead
