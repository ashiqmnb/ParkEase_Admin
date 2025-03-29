import { Box } from "@mui/material";
import DashboardCount from "../components/dashboard/DashboardCount";
import { useQuery } from "@tanstack/react-query";
import { getActiveUseersCompanies, getCoinStatus, getRecentPayments, getRecetTransactions, getTotalRevenue, getTotalSlots } from "../api/dashboard";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import RecentPayments from "../components/dashboard/RecentPayments";
import CoinManagemant from "../components/dashboard/CoinManagemant";

const DashboardContainer = () => {

   const { data: userCompanyCount, isPending: userPending } = useQuery({
      queryKey:['userCompanyCount'],
      queryFn: getActiveUseersCompanies
   })

   const { data: totalSlots, isPending: slotPending } = useQuery({
      queryKey:['totalSlots'],
      queryFn: getTotalSlots
   })

   const { data: totalRevenue, isPending: revenuePending } = useQuery({
      queryKey:['totalRevenue'],
      queryFn: getTotalRevenue
   })

   const { data: recentTrans, isPending: transPending } = useQuery({
      queryKey:['recentTrans'],
      queryFn: getRecetTransactions
   })

   const { data: recentPayments, isPending: paymentPending  } = useQuery({
      queryKey:['RecentPayments'],
      queryFn: getRecentPayments
   })


   const { data: coinStatus, isPending: coinPending } = useQuery({
      queryKey:['coinStatus'],
      queryFn: getCoinStatus
   })

   return (
      <Box sx={{ padding: "30px" }}>

         <DashboardCount 
            companies={userCompanyCount?.companies}
            users={userCompanyCount?.users}
            revenue={totalRevenue}
            slots={totalSlots}
            revenuePending={revenuePending}
            slotPending={slotPending}
            usersPending={userPending}
         />

         <CoinManagemant
            admin={coinStatus?.admin}
            company={coinStatus?.company}
            user={coinStatus?.user}
            total={coinStatus?.total}
            coinPending={coinPending}
         />

         <RecentTransactions 
            transactions={recentTrans}
            transPending={transPending}
         />

         <RecentPayments
            payments={recentPayments}
            paymentPending={paymentPending}
         />

      </Box>
   );
};

export default DashboardContainer;
