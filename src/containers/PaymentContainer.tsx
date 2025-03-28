import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import PaymentHead from "../components/payment/PaymentHead";
import { useQuery } from "@tanstack/react-query";
import { getPayments } from "../api/payment";
import CustomPagination from "../components/CustomPagination";
import PaymentTable from "../components/payment/PaymentTable";

const PaymentContainer = () => {
   const [pageSize, setPageSize] = useState<number>(6);
   const [pageNumber, setPageNumber] = useState<number>(1);

   const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
      setPageNumber(value);
   };

   const { data: payments, refetch } = useQuery({
      queryKey:['payments'],
      queryFn:()=>getPayments(pageNumber, pageSize)
   })

   console.log("payments", payments)

   useEffect(()=>{
      refetch();
   }, [pageNumber, pageSize])

   return (
      <Box>
         <PaymentHead
            pageSize={pageSize}
            setPageSize={setPageSize}
         />

         <PaymentTable
            page={pageNumber}
            pageSize={payments?.totalPages}
            payments={payments?.payments}
         />

         <CustomPagination
            count={payments?.totalPages}
            handleChange={handlePageChange}
            page={pageNumber}
         />
      </Box>
   );
};

export default PaymentContainer;
