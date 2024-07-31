import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <section className="container contact-options-container" id="contact-form">
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[a-zA-Z\s'-]+$/, "Invalid name")
            .required("Name is Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is Required"),
          subject: Yup.string().required("Subject is Required"),
          message: Yup.string().required("Message is Required"),
        })}
        onSubmit={( { setSubmitting }) => {
          setTimeout(() => {
            alert("Your Message is sent");
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <div className="contact-options">
                <div className="options">
                  <FontAwesomeIcon icon={faHouse} />
                  <p>Salem,Tamilnadu</p>
                </div>
                <div className="options">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>1234567890</p>
                </div>
                <div className="options">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>skillupgrade@gmail.com</p>
                </div>
              </div>

              <div className="contact-options">
                <div className="input-group">
                  <Field
                    name="name"
                    id='name'
                    type="text"
                    className="input"
                    touched={values.name?'true':'flase'}
                  />
                  <label htmlFor="name" className="user-label">
                    Enter Your Name
                  </label>
                  <div className="error-message">
                    <ErrorMessage name="name" />
                  </div>
                </div>

                <div className="input-group">
                  <Field
                    name="email"
                    id="email"
                    type="email"
                    className="input"
                    touched={values.email?'true':'flase'}
                  />
                  <label htmlFor="email" className="user-label">
                    Enter Email Address
                  </label>
                  <div className="error-message">
                    <ErrorMessage name="email" />
                  </div>
                </div>

                <div className="input-group">
                  <Field
                    name="subject"
                    id="subject"
                    type="text"
                    className="input"
                    touched={values.subject?'true':'flase'}
                  />
                  <label htmlFor="subject" className="user-label">
                    Enter Subject
                  </label>
                  <div className="error-message">
                    <ErrorMessage name="subject" />
                  </div>
                </div>
              </div>

              <div className="contact-options"> 
                <div className="input-group">
                  <div
                    className="error-message"
                  >
                    <ErrorMessage name="message" />
                  </div>
                  <Field
                    name="message"
                    id="message"
                    as="textarea"
                    className="input"
                    touched={values.message?'true':'flase'}
                  />
                  <label htmlFor="message" className="user-label">
                    Enter Message
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="btn">
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
