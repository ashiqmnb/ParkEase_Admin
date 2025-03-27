import axios from "axios";

export const getSlotCount = async (companyId: string) => {
   try {
      const res = await axios.get(
         `https://localhost:7144/api/Slots/count?companyId=${companyId}`,
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
