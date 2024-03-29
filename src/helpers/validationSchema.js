import * as yup from 'yup';

const phoneNumberRegEx = /^[+]201[0125][0-9]{8}$/gm;
const nationalIDNumberRegEx = /^[0-9]{14}$/gm;

export const validarionMainSchema = yup.object().shape({
    firstName: yup.string().min(3).required(),
    midName: yup.string().min(3),
    lastName: yup.string().min(3).required(),
    phoneNumber: yup.string().matches(phoneNumberRegEx, { message: 'Number must be a valid egyptian number' }).required(),
    nationalID: yup.string().matches(nationalIDNumberRegEx, { message: 'Number must be a valid egyptian ID number' }).required(),
    email: yup.string().email("Please enter a valid email").required(),
    address1: yup.string().required(),
    address2: yup.string(),
    linkedInProfile: yup.string().required(),
    twitterProfile: yup.string(),
    facebookProfile: yup.string(),
    selectedCourse: yup.string().required()
})