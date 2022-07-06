import * as yup from 'yup';

const phoneNumberRegEx = /^01[0125][0-9]{8}$/gm;

export const validarionMainSchema = yup.object().shape({
    firstName: yup.string().min(3).required(),
    midName: yup.string().min(3),
    lastName: yup.string().min(3).required(),
    phoneNumber: yup.string().matches(phoneNumberRegEx, { message: 'Number must be a valid egyptian number' }).required(),
    nationalID: yup.number().min(14).required(),
    email: yup.string().email("Please enter a valid email").required(),
    address1: yup.string().required(),
    address2: yup.string(),
    linkedInProfile: yup.string().required(),
    twitterProfile: yup.string(),
    facebookProfile: yup.string(),
    courses: yup.string().required()
})

export const emailOnlySchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
})