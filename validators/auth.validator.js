const yup = require("yup");

exports.registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "name must be min 2 character")
    .max(255, "name must be max 255 character")
    .required(),
  username: yup
    .string()
    .min(2, "username must be min 2 character")
    .max(255, "username must be max 255 character")
    .required(),
  password: yup
    .string()
    .min(8, "password must be min 8 character")
    .max(255, "password must be max 255 character")
    .required(),
  email: yup.string().email(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "confirm password isn't match with password"),
});
