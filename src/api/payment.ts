import axios from "axios";

export const getPayments = async (pageNumber: number, pageSize: number) => {
   try {
      var res = await axios.get(`https://localhost:7050/api/Transaction/payments/${pageNumber}/${pageSize}`);
      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};
