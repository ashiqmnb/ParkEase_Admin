import axios from "axios";


export const getActiveUseersCompanies = async () => {
   try {
      var res = await axios.get('https://localhost:7277/api/User/active-users-companies',
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data;
   } 
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};



export const getTotalSlots = async ()=>{
   try{
      const res = await axios.get('https://localhost:7144/api/Slots/total-slots',
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}



export const getTotalRevenue = async ()=>{
   try{
      const res = await axios.get('https://localhost:7050/api/Transaction/total-revenue',
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}



export const getRecetTransactions = async ()=>{
   try{
      const res = await axios.get('https://localhost:7050/api/Transaction/recent-transactions/admin',
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );

      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}



export const getRecentPayments = async ()=>{
   try{
      const res = await axios.get('https://localhost:7050/api/Transaction/recent-payments/admin',
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}


export const getCoinStatus = async ()=>{
   try{
      const res = await axios.get('https://localhost:7277/api/Coin/coin-status',
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}