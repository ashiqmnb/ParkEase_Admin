export interface UserSearchParams{
   pageNumber?: number;
   pageSize?: number;
   search?: string;
}

export interface User{
   id: string
   name: string
   email: string
   coins: number
   addedDate: string
   isBlocked: boolean
}