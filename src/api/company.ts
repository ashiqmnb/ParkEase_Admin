import axios from "axios";
import { CompanyFormValues, FetchCompaniesParams } from "../types/companyTypes";

export const fetchCompanies = async (params: FetchCompaniesParams) => {
   try {
      const res = await axios.get("https://localhost:7277/api/Company/admin", {
         params,
      });
      return res.data.data;
   } 
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};

export const addNewCompany = async (values: CompanyFormValues) => {
   try {
      await axios.post(
         "https://localhost:7277/api/Auth/comapny/register",
         values,
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }
      );
   } 
   catch (err: any) {
      return Promise.reject(err.response.data);
   }
};



export const getCompanyById = async (id: string)=>{
   try{
      const res = await axios.get(`https://localhost:7277/api/Company?companyId=${id}`,
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


export const blockUblockCompany = async (id: string)=>{
   try{
      const res = await axios.patch(`https://localhost:7277/api/Company/blockUnblock/${id}`,
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

