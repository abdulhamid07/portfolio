"use client";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../constants";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});
interface IFormValues {
  name: string;
  email: string;
  message: string;
}
const initialValues: IFormValues = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const formik = useFormik<IFormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: IFormValues) => {
    const response = await axios.post("/api/contact", values);
    if (response.status === 200) {
      toast.success(
        "Thank you for connecting. I'll respond to your message shortly",
        { duration: 4000 }
      );
    } else {
      toast.error("Something went wrong. Try again later");
    }
    formik.setSubmitting(false);
    formik.resetForm();
  };

  const loading = formik.isSubmitting;

  return (
    <>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text & form */}
            <motion.h2
              variants={fadeIn({ direction: "up", delay: 0.2 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center xl:mb-12"
            >
              {"Let's"} <span className="text-accent">connect.</span>
            </motion.h2>

            {/* form */}
            <motion.form
              onSubmit={formik.handleSubmit}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              variants={fadeIn({ direction: "up", delay: 0.4 })}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="w-full space-y-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  className="input"
                  disabled={loading}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm text-left">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="w-full space-y-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="input"
                  disabled={loading}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm text-left">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="w-full space-y-1">
                <textarea
                  id="message"
                  name="message"
                  placeholder="message"
                  className="textarea"
                  disabled={loading}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-sm text-left">
                    {formik.errors.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn rounded-full border border-white/50 w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                {loading ? (
                  <FaSpinner className="animate-spin text-[22px] text-white" />
                ) : (
                  <>
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                      {"Let's talk"}
                    </span>
                    <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
