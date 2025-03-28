import { Box } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { blockUnblockUser, getUserById } from "../api/user";
import UserProfile from "../components/UserProfile";
import { toast } from "sonner";

const UserByIdContainer = () => {
   const { userId } = useParams<{ userId: string }>();

   const { data: user, refetch } = useQuery({
      queryKey:['user'],
      queryFn:()=> userId && getUserById(userId)
   })

   const blockUnlockUserMutation = useMutation({
      mutationFn: blockUnblockUser,
      onSuccess:(data)=>{
         toast.success(data.data);
         refetch();
      },
      onError:(err: any)=>{
         console.log("Error", err)
      }
   })

   const handleBlockUnblock = ()=>{
      blockUnlockUserMutation.mutate(userId || '');
   }

   return (
      <Box sx={{ backgroundColor: "#E6F8F0", height:'90vh', padding: "30px" }}>
         <UserProfile
            profile={user?.profile}
            coins={user?.coins}
            name={user?.name}
            email={user?.email}
            phone={user?.phone}
            isBlocked={user?.isBlocked}
            isPending={blockUnlockUserMutation.isPending}
            handleBlockUnblock={handleBlockUnblock}
         />
      </Box>
   );
};

export default UserByIdContainer;
