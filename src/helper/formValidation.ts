import * as Yup from "yup";

export const validateSchema = Yup.object().shape ({
    schoolName: Yup.string().required("School Name must be at least 5 characters long."),
    schoolType: Yup.string().required("Please select a school type."),
    schoolMailId: Yup.string().email("Invalid email format.").required("This field is required"),
    principalContact:Yup.string().email("Invalid email format.").required("This field is required"),
    contactNumber: Yup.string().required("Contact Number is required."),
    createPassword:  Yup.string()
    .required("This field is required")
    .min(8, "Password must be 8 or more characters")
    .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password should contain at least one uppercase and lowercase character")
    .matches(/\d/, "Password should contain at least one number")
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    confirmPassword: Yup.string()
    .required("This field is required")
    .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.createPassword === value;
    }),
});

export const planSchema = Yup.object().shape ({
    planName: Yup.string().required("School Name must be at least 5 characters long."),
    planType: Yup.string().required("Please select a plan type."),
    
});


// export const validateSchoolName = (schoolName: string): string | null => {
//     if (schoolName.length < 5) {
//       return "School Name must be at least 5 characters long.";
//     }
//     return null; // No validation error
//   };

//   export const validateSchoolType = (schoolType: string): string | null => {
//     if (schoolType === "select") {
//       return "Please select a school type.";
//     }
//     return null; // No validation error
//   };

//    export function validateSchoolMailId(schoolMailId: string): string | null {
//     if (!schoolMailId) {
//       return "School Mail Id is required.";
//     }
   
//      if (!/^\S+@\S+\.\S+$/.test(schoolMailId)) {
//        return "Invalid email format.";
//      }
//     return null;
//   }
  
//   export function validateContactNumber(contactNumber: string): string | null {
//     if (!contactNumber) {
//       return "Contact Number is required.";
//     }
 
//      if (!/^\+?\d{10,}$/.test(contactNumber)) {
//        return "Invalid contact number format.";
//      }
//     return null;
//   }
  