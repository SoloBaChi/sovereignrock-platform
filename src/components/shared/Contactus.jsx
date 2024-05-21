import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contactus(props) {
  const [loading, setLoading] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) {
      formErrors.firstName = "First Name is required !";
    }
    if (!formData.lastName) {
      formErrors.lastName = "Last Name is required !";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone Number is required !";
    }
    if (!formData.message) {
      formErrors.message = "Message is required !";
    }
    return formErrors;
  };

  // Toastify success message
  const notificationMsg = (msg) => {
    return toast.success(msg);
  };
  // Toastify error message
  const errorNotification = (msg) => {
    return toast.error(msg);
  };

  // Hnadle Change
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Reset Form Data
  const resetFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    });
  };

  const submitToGoogleForm = async () => {
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSf3ymRHy4Y87Rt1-jQWqrvERvIJmkRywLnLFN4IfalBiJDJyg/formResponse`;
    const formDataToSubmit = new URLSearchParams({
      "entry.1623458267": formData.firstName,
      "entry.1481121674": formData.lastName,
      "entry.1265380812": formData.phone,
      "entry.344760656": formData.message,
    });

    // const response from the submission
    try {
      const response = await fetch(googleFormUrl, {
        method: "POST",
        body: formDataToSubmit,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      console.log("EROOR", err);
    }
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      try {
        // Submit the form
        await submitToGoogleForm();
        notificationMsg("Form successfully Submitted");
        // reset the form data
        resetFormData();
        setLoading(false);
        navigate("/successful-submit");
      } catch (err) {
        // setSubmitStatus("Form Submission Failed!");
        errorNotification("Form Submission Failed!");
        // console.log(err);
        setLoading(false);
      }
      /*Please put thid inisde the try block*/
      // Update the setSubmit function
      // setSubmitStatus("");
      // notificationMsg("Form successfully Submitted");
    } else {
      setErrors(formErrors);
      errorNotification("Form Submission Failed!");
      setLoading(false);
    }
  };

  return (
    <div className="form-container contact-us" id="contactus">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="double">
          <div className="form-field">
            <label htmlFor="firstName">first name</label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName}</p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="lastName">last name</label>
            <input
              type="text"
              id="lastname"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="single">
          <div className="form-field">
            <label htmlFor="cellphone">cell phone</label>
            <input
              type="number"
              id="cellphone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
        </div>
        <div className="text-area">
          <div className="form-field">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="msg"
              cols="24"
              rows="4"
              placeholder="Type Your Question/Message Here"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>
        </div>
        <div className="cta-btn-container">
          <button className="cta-btn" type="submit" disabled={loading}>
            {loading ? "Please wait..." : "submit"}
          </button>
        </div>
        {/* {submitStatus && <p>{submitStatus}</p>} */}
      </form>
      <ToastContainer />
    </div>
  );
}

export default Contactus;
