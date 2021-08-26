import * as yup from 'yup';

const registerSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required')
        .min(3, 'First name must be at least 3 characters long')
        .max(25, "First name must be less or equal than 25 characters long"),
    last_name: yup
        .string()
        .trim()
        .required('Last name is required')
        .min(3, 'Last name must be at least 3 characters long')
        .max(50, "Last name must be less or equal than 50 characters long"),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    user_name: yup
        .string()
        .trim()
        .required('User name is required')
        .min(3, 'User name must be at least 3 character long')
        .max(50, "User name must be less or equal than 50 characters long"),
    password: yup
        .string()
        .trim()
        .required("Password is Required")
        .min(6, "Passwords must be at least 6 characters long"),
    confirm_password: yup
        .string()
        .trim()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    user_type: yup
        .string()
        .oneOf(['client', 'instructor'], 'User type is required'),
    terms: yup
        .boolean()
        .oneOf([true], 'Terms of Services must be accepted')
});
export default registerSchema;