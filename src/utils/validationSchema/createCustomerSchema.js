import * as yup from "yup";

export const createCustomerSchema = yup.object().shape({
  name: yup.string().required().max(50),
  organisationNr: yup
    .string()
    .required("must be a number")
    .matches(/^[\d]+$/, "Must be a Number")
    .max(30),
  vatNr: yup
    .string()
    .required()
    .matches(
      /^[SE]{2}[0-9]+$/,
      "Vat number should begin with 'SE' and 10 number after that"
    )
    .max(15),
  reference: yup.string().required().max(50),
  paymentTerm: yup.number().required().min(0).max(2147483647),
  website: yup.string().url().max(50),
  email: yup.string().required().email().max(30),
  phoneNumber: yup
    .string()
    .required("must be a number")
    .matches(/^[\d-]+$/, "Must be a Number & can have dash as well")
    .max(20),
});


//