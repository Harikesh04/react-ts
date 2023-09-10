import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Form: React.FC = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
   name: Yup.string()
   .min(2, 'Name must be minimum 2')
   .max(100, 'Name must not be more than 100 characters')
   .required('Name is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
   confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
   });

  const handleSubmit = async (values: FormValues) => {
    try {
      setSubmitting(true);
      // Perform form submission logic here
      console.log(values);
      // Set submitting to false after successful submission
      setSubmitting(false);
    } catch (error) {
      // Handle form submission error
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;