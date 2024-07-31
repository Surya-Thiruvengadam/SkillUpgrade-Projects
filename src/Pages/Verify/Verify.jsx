import React from "react";
import "./Verify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
  
const Verify = () => {
  return (
    <section> 
      <div className="sec1-all verify-box">
        <div className="over-lay">
          <div className="container">
            <div className="banner-content verify-container">
              <h1 className="vpage-header" >  Certificate Verification</h1>
              <Formik
                initialValues={{ id: "" }}
                validationSchema={Yup.object({
                  id: Yup.string().required("Please enter valid certificate ID"),
                })}
                onSubmit={({ setSubmitting }) => {
                  setTimeout(() => {
                    alert("Request is Sent");
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting, errors}) => 
                <Form>
                  <p className="error-message">
                    <ErrorMessage name="id"/>
                    </p>
                  <div className="input-box"> 
                    <Field
                      name="id"
                      id="id"
                      type="text"
                      className="input"
                      placeholder='Enter your certificate ID '
                      style={errors.id? { outline:'2px solid red'}:null}
                    
                    />
                    <button type="submit" disabled={isSubmitting} className="btn">Verify </button>
                    </div>
                </Form>
                }
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verify;
