const yup = require("yup");

exports.articleSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "حداقل برای عنوان 2 کاراکتر وارد کنید")
    .max(255, "حداکثر برای عنوان 255 کاراکتر وارد کنید")
    .required(),
  slug: yup
    .string()
    .min(2, "حداقل برای اسلاگ 2 کاراکتر وارد کنید")
    .max(255, "حداکثر برای اسلاگ 255 کاراکتر وارد کنید")
    .required(),
  content: yup
    .string()
    .min(2, "حداقل برای محتوا 2 کاراکتر وارد کنید")
    .max(255, "حداکثر برای محتوا 255 کاراکتر وارد کنید")
    .required(),
});
