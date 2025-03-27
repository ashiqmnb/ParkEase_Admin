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
