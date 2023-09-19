import * as Yup from "yup";

const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
  };
  
export const validateSchema = Yup.object().shape ({
    schoolName: Yup.string().required("School Name must be at least 5 characters long."),
    schoolType: Yup.string().required("Please select a school type."),
    schoolMailId: Yup.string().email("Invalid email format.").required("This field is required"),
    principalContact:Yup.string().email("Invalid email format.").required("This field is required"),
    contactNumber: Yup.string().required("Contact Number is required."),
    createPassword: Yup.string().required("Please enter a password")    
    .min(8, "Password must have at least 8 characters")    
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    confirmPassword: Yup.string()
    .required("This field is required")
    .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.createPassword === value;
    }),
});

export const editSchoolSchema = Yup.object().shape({
    schoolName: Yup.string().required("School Name must be at least 5 characters long."),

})

export const planSchema = Yup.object().shape ({
    planName: Yup.string().required("School Name must be at least 5 characters long."),
    planType: Yup.string().required("Please select a plan type."),
    
});



export const loginSchema = Yup.object().shape({
    emailOrPhone: Yup.string()
    .required('Required')
    .matches(/^\d{10}$/, 'Must be a 10-digit phone number or a valid email'),
     password: Yup.string()
    .required('Required')
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
})