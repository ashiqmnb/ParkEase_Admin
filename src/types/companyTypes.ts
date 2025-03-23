export interface FetchCompaniesParams {
   search?: string;
   type?: string;
   status?: string;
   pageNumber?: number;
   pageSize?: number;
}

export interface CompanyFormValues {
   name: string;
   email: string;
   password: string;
   type: string;
}


export interface Company {
   id: string
   name: string;
   email: string;
   type: string;
   status: string;
   addedDate: string;
   isBlocked: boolean
}


export interface ProfileDescription{
   addressId: string;
   coins: number;
   description: string | null;
   district: string;
   email: string;
   isBlocked: boolean;
   name: string;
   phone: string | null;
   place: string;
   postalCode: number;
   profile: string | null;
   state: string;
   subscriptionStatus: string;
   type: string;
   startDate: string;
   endDate: string;
}

export interface ProfileMapImage{
   images: string[] | null;
   latitude: number;
   longitude: number;
}