import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Transaction } from "../../types/paymentTypes";

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

interface RecentTransactionsProps{
   transactions: Transaction[];
   transPending: boolean;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({transactions, transPending}) => {
   return (
      <Box sx={{ marginTop: "30px" }}>
         <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography sx={{ fontSize: "24px", fontFamily: "Li", fontWeight: "600" }}>
               Recent Transactions
            </Typography>
            {transPending && <CircularProgress size={22} sx={{color:'black'}} />}
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
                        <TableCell sx={tableHeadStyle}>Sender Id</TableCell>
                        <TableCell sx={tableHeadStyle}>Receiver Id</TableCell>
                        <TableCell sx={tableHeadStyle}>Coin</TableCell>
                        <TableCell sx={tableHeadStyle}>Description</TableCell>
                        <TableCell sx={tableHeadStyle}>Status</TableCell>
                        <TableCell sx={tableHeadStyle}>Date</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {transactions?.map((trans, index) => (
                     <TableRow
                        key={index}
                        sx={{
                           height: "40px",
                           backgroundColor: index % 2 === 0 ? "white" : "#E6F8F0",
                        }}
                     >
                        <TableCell sx={tableContentStyle}>{trans.transactionId}</TableCell>
                        <TableCell sx={tableContentStyle}>{trans.senderId}</TableCell>
                        <TableCell sx={tableContentStyle}>{trans.receiverId}</TableCell>
                        <TableCell sx={tableContentStyle}>{trans.coin}</TableCell>
                        <TableCell sx={tableContentStyle}>{trans.description}</TableCell>
                        <TableCell sx={tableContentStyle}>{trans.status}</TableCell>
                        <TableCell sx={tableContentStyle}>
                           {new Date(trans.date).toLocaleDateString('en-GB')}
                        </TableCell>
                        
                     </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
      </Box>
   );
};

export default RecentTransactions;
