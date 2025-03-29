import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Payment } from "../../types/paymentTypes";


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

interface RecentPaymentsProps{
   payments: Payment[];
   paymentPending: boolean;
}

const RecentPayments: React.FC<RecentPaymentsProps> = ({payments, paymentPending}) => {
   return (
      <Box sx={{ marginTop: "30px" }}>
         <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography sx={{ fontSize: "24px", fontFamily: "Li", fontWeight: "600" }}>
               Recent Payments
            </Typography>
            {paymentPending && <CircularProgress size={22} sx={{color:'black'}} />}
         </Box>

         <Box>
            <TableContainer  component={Paper}>
               <Table>
                  <TableHead>
                     <TableRow
                        sx={{
                           height: "40px",
                           backgroundColor: "#2DC98A",
                        }}
                     >
                        <TableCell sx={tableHeadStyle}>Transaction Id</TableCell>
                        <TableCell sx={tableHeadStyle}>Customer Id</TableCell>
                        <TableCell sx={tableHeadStyle}>Amount</TableCell>
                        <TableCell sx={tableHeadStyle}>Coin</TableCell>
                        <TableCell sx={tableHeadStyle}>Status</TableCell>
                        <TableCell sx={tableHeadStyle}>Date</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {payments?.map((payment, index) => (
                     <TableRow
                        key={index}
                        sx={{
                           height: "40px",
                           backgroundColor: index % 2 === 0 ? "white" : "#E6F8F0",
                        }}
                     >
                        <TableCell sx={tableContentStyle}>{payment.transactionId}</TableCell>
                        <TableCell sx={tableContentStyle}>{payment.customerId}</TableCell>
                        <TableCell sx={tableContentStyle}>{payment.amount}</TableCell>
                        <TableCell sx={tableContentStyle}>{payment.coin}</TableCell>
                        <TableCell sx={tableContentStyle}>{payment.status}</TableCell>
                        <TableCell sx={tableContentStyle}>
                           {new Date(payment.date).toLocaleDateString('en-GB')}
                        </TableCell>
                        
                     </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
      </Box>
   )
}

export default RecentPayments
