import { Box } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { blockUblockCompany, getCompanyById } from "../api/company";
import ProfileDetails from "../components/companyById/ProfileDetails";
import MapAndImages from "../components/companyById/MapAndImages";
import { toast } from "sonner";
import { getSlotCount } from "../api/slots";

const CompanyByIdContainer = () => {

   const { companyId } = useParams<{ companyId: string }>();

   const { data, refetch } = useQuery({
      queryKey: ['company', companyId],
      queryFn: () => companyId ? getCompanyById(companyId) : Promise.reject("No company ID"),
      enabled: !!companyId,
   });

   const {data: slotsCount} = useQuery({
      queryKey:['slotsCount'],
      queryFn: ()=> companyId ? getSlotCount(companyId) : Promise.reject("No company ID"),
      enabled: !!companyId,
   })

   const blockUnlockCompanyMutation = useMutation({
      mutationFn: blockUblockCompany,
      onSuccess:(data)=>{
         toast.success(data.data);
         refetch();
      },
      onError:(err: any)=>{
         console.log("Error", err)
      }
   })

   const handleBlockUnblock = ()=>{
      blockUnlockCompanyMutation.mutate(companyId || '');
   }

   return (
      <Box sx={{ backgroundColor: "#E6F8F0", padding: "30px" }}>
         <ProfileDetails 
            name={data?.name}
            coins={data?.coins}
            description={data?.description}
            district={data?.district}
            email={data?.email}
            endDate={data?.endDate}
            isBlocked={data?.isBlocked}
            phone={data?.phone}
            place={data?.place}
            postalCode={data?.postalCode}
            profile={data?.profile}
            startDate={data?.startDate}
            state={data?.state}
            subscriptionStatus={data?.subscriptionStatus}
            type={data?.type}
            handleBlock={handleBlockUnblock}
            isPending={blockUnlockCompanyMutation.isPending}
            twoWheeler={slotsCount?.twoWheeler}
            fourWheeler={slotsCount?.fourWheeler}
         />

         <MapAndImages
            images={data?.images || []}
            latitude={Number(data?.latitude)}
            longitude={Number(data?.longitude)}
            />
      </Box>
   );
};

export default CompanyByIdContainer;
