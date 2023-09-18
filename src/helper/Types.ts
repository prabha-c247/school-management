interface School {
    id: number;
    schoolLogo: string; // URL or file path to the logo image
    schoolName: string;
    affiliation:string;
    schoolMobileNumber: string;
    principalName:string;
    schoolType:string;
    identificationNumber:string;
    mailId:string;
    principalContactNumber:string;
    schoolAddress:string;
    city:string;
    pinCode:string;
  }
  
export type {School}  ;

export type Plan={
  planName: string;
  planNo: string;
  planCreationDate:string;
  currentMode:string;
  planUsageLimit: string;
  features:string;
  trialPeriodLimit:string;
  billingCycle:string;
  codes:string;
  visibility:string;
  description:string;
  paymentOption:string;
}

export type login ={
  mailPhone:string;
  password:string;
}

export type setting = {
  name: string;
  contactInfo: string;
  img:string;
}

export interface ValidationErrors {
  schoolNameError: string | null;
  schoolTypeError: string | null;
  SchoolMailId: string | null;
  schoolMobileNumber : string | null
  // Add more fields for other form fields...
}