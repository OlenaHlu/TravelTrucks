import React from "react";
import css from "./BookForm.module.css";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

const BookForm = () => {
  const initialValues = { name: "", email: "", bookingDate: "", comment: "" };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const bookSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(18, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Name must contain only letters")
      .required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    bookingDate: Yup.date()
      .typeError("Invalid date format!")
      .min(tomorrow, "Booking date cannot be earlier than tomorrow!")
      .required("Required!"),
    comment: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookSchema}
      onSubmit={(formData, { resetForm }) => {
        toast.success("Booking successfully completed!");
        resetForm();
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.bookContainer}>
          <div className={css.InfoContainer}>
            <h3 className={css.formTitle}>Book your campervan now</h3>
            <p className={css.formText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <div className={css.formContainer}>
            <Field
              className={css.formField}
              name="name"
              type="text"
              placeholder="Name*"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="div"
            />

            <Field
              className={css.formField}
              name="email"
              type="email"
              placeholder="Email*"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="div"
            />
            <div>
              <Field name="bookingDate">
                {({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => setFieldValue("bookingDate", date)}
                    placeholderText="Booking date*"
                    dateFormat="dd/MM/yyyy"
                    className={css.formField}
                  />
                )}
              </Field>
            </div>
            <ErrorMessage
              className={css.errorMessage}
              name="bookingDate"
              component="div"
            />
            <Field
              className={`${css.formField} ${css.textarea}`}
              name="comment"
              type="text"
              placeholder="Comment"
              as="textarea"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="comment"
              component="div"
            />
          </div>

          <button className={css.formBtn} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
