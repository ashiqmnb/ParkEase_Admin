import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Payment } from "../../types/paymentTypes"


interface PaymentTableProps{
    payments: Payment[];
    pageSize: number;
    page: number;
}
// transactionId: string;
// customerId: string;
// amount: number;
// coin: number;
// status: string;
// date: string;


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

const PaymentTable: React.FC<PaymentTableProps> = ({payments, page, pageSize}) => {

    const starting = pageSize * (page - 1) + 1;

  return (
    <Box sx={{marginY:'20px'}}>
         {payments?.length > 0 ? (
         <Box sx={{ paddingX: "30px" }}>
            <TableContainer component={Paper}>
               <Table>
               <TableHead>
                  <TableRow sx={{ height: "40px", backgroundColor: "#2DC98A" }}>
                     <TableCell sx={{ ...tableHeadStyle, paddingLeft: "20px" }}>
                        Sl No
                     </TableCell>
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
                        sx={{  height: "40px", backgroundColor: index % 2 === 0 ? "white" : "#E6F8F0",}}
                     >
                        <TableCell sx={{ ...tableContentStyle, paddingLeft: "20px" }} > {index + starting} </TableCell>
                        <TableCell sx={tableContentStyle}> {payment.transactionId} </TableCell>
                        <TableCell sx={tableContentStyle}> {payment.customerId} </TableCell>
                        <TableCell sx={tableContentStyle}>{payment.amount}</TableCell>
                        <TableCell sx={tableContentStyle}> {payment.coin} </TableCell>
                        <TableCell sx={tableContentStyle}> {payment.status} </TableCell>
                        <TableCell sx={{...tableContentStyle, paddingRight:'20px'}}>
                           {new Date(payment.date).toLocaleDateString("en-GB")}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
               </Table>
            </TableContainer>
         </Box>
         ) : (
         <Typography sx={{ fontWeight: "600", color: "gray" }}>
            No Payment history
         </Typography>
         )}
      </Box>
  )
}

export default PaymentTable
