export interface Payment {
   amount: number;
   coin: number;
   customerId: string;
   status: string;
   transactionId: string;
   date: string;
}

export interface Transaction{
   coin: number;
   date: string;
   description: string;
   receiverId: string;
   senderId: string;
   status: string;
   transactionId: string;
}