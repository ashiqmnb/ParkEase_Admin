import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import { UserSearchParams } from '../types/userTypes';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/user';
import UsersHead from '../components/UsersHead';
import UsersTable from '../components/tables/UsersTable';

const UsersContainer = () => {

   const [search, setSearch] = useState<string>("");
   const [pageSize, setPageSize] = useState<number>(10);
   const [pageNumber, setPageNumber] = useState<number>(1);

   const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
      setPageNumber(value);
   };

   const params: UserSearchParams  = {
      pageNumber,
      pageSize,
      search,
   }

   const {data, refetch} = useQuery({
      queryKey:['users'],
      queryFn:()=>fetchUsers(params),
   })

   useEffect(()=>{
      refetch();
   },[params])

   return (
      <Box>
         <UsersHead
            pageSize={pageSize}
            search={search}
            setPageSize={setPageSize}
            setSearch={setSearch}
         />

         <UsersTable
            handlePageChange={handlePageChange}
            page={pageNumber}
            pageSize={pageSize}
            totalPage={data?.totalPages}
            users={data?.users}

         />
      </Box>
   )
}

export default UsersContainer
