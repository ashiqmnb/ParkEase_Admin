import { Box } from "@mui/material";
import CompaniesTable from "../components/tables/CompaniesTable";
import CompaniesHead from "../components/CompaniesHead";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addNewCompany, fetchCompanies } from "../api/company";
import { CompanyFormValues, FetchCompaniesParams } from "../types/companyTypes";
import AddNewCompanyModal from "../components/modals/AddNewCompanyModal ";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

export const CompaniesContainer = () => {

   const [search, setSearch] = useState<string>("");
   const [type, setType] = useState<string>("");
   const [status, setStatus] = useState<string>("");
   const [pageSize, setPageSize] = useState<number>(10);
   const [pageNumber, setPageNumber] = useState<number>(1);

   const [modalOpen, setModalOpen] = useState(false);
   
   const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
      setPageNumber(value);
   };

   const params :FetchCompaniesParams = {
      pageNumber,
      pageSize,
      type,
      search,
      status
   }

   const {data, refetch} = useQuery({
      queryKey:['companies'],
      queryFn:()=>fetchCompanies(params),
   })

   const addNewCompanyMutation = useMutation({
      mutationFn: addNewCompany,
      onSuccess:()=>{
         toast.success('New company added successfully');
         refetch();
         setModalOpen(false);
         formik.resetForm();
      },
      onError:(err: any)=>{
         toast.error(err.error || "Something went wrong, please try again later");
      }
   })

   const validationSchema = Yup.object({
      name: Yup
         .string()
         .max(25, "Name cannot exceed 25 characters")
         .required("Name is required"),
      email: Yup
         .string()
         .trim()
         .email("Enter a valid email")
         .required("Email is required"),
         password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      type: Yup
         .string()
         .oneOf(["customer", "public"], "Invalid type")
         .required("Type is required"),
   });

   const formik = useFormik<CompanyFormValues>({
      initialValues: {
         name: "",
         email: "",
         password: "",
         type: "",
      },
      validationSchema,
      onSubmit: (values) => {
         addNewCompanyMutation.mutate(values)
      },
   });

   useEffect(()=>{
      refetch();
   },[params])

   return (
      <Box>
         <CompaniesHead
            search={search} 
            setSearch={setSearch} 
            type={type} 
            setType={setType} 
            status={status} 
            setStatus={setStatus}
            pageSize={pageSize}
            setPageSize={setPageSize}
            onOpen={()=>setModalOpen(true)}
         />
         <CompaniesTable
            companies={data?.companies}
            page={pageNumber}
            handlePageChange={handlePageChange} 
            totalPage={data?.totalPages}
            pageSize={pageSize}
         />

         <AddNewCompanyModal
            isPending={addNewCompanyMutation.isPending}
            formik={formik}
            isOpen={modalOpen}
            onClose={()=>setModalOpen(false)}
         />
      </Box>
   );
};
