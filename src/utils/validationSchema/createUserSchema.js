
import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  firstName: yup.string().required().min(1).max(30),
  lastName: yup.string().required().min(1).max(30),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  organisationName: yup.string().required(),
});
