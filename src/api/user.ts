import axios from "axios";
import { UserSearchParams } from "../types/userTypes";


export const fetchUsers = async (params: UserSearchParams) => {
   try{
      const res = await axios.get('https://localhost:7277/api/User',{
         params
      });
      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};


export const getUserById = async(userId:string)=>{
   try{
      const res = await axios.get(`https://localhost:7277/api/User/userId?userId=${userId}`,
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      )
      return res.data.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}


export const blockUnblockUser = async(userId: string)=>{
   try{
      const res = await axios.patch(`https://localhost:7277/api/User/blockUnblock/${userId}`,
         {},
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      )
      return res.data;
   }
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
}