import * as yup from 'yup';

const loginSchema = yup.object().shape({
    user_name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long')
        .max(25, "Username cannot be more than 25 characters long"),
    password: yup
        .string()
        .required("Password is Required")
        .min(6, "Password must be at least 6 characters long")
        .trim
});

export default loginSchema;