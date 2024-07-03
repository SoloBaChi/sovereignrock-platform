import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ScheduleTour(props) {
  // ***imported Gooogle link
  /*

https://docs.google.com/forms/d/e/1FAIpQLScWU8uX5_g8i8Sn-Se_LZecSW8Q5f8Wt_sDSTdAd5P-ItF4eA/formResponse

usp=pp_url
&entry.799407715=fn-333
&entry.1621519225=ln-333
&entry.1840553454=phone-333
&entry.1207945471=2024-06-23

*/

  const [loading, setLoading] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    sheduleDate: "",
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
    if (!formData.sheduleDate) {
      formErrors.sheduleDate = "Date is required !";
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
      sheduleDate: "",
    });
  };

  const submitToGoogleForm = async () => {
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScWU8uX5_g8i8Sn-Se_LZecSW8Q5f8Wt_sDSTdAd5P-ItF4eA/formResponse`;
    const formDataToSubmit = new URLSearchParams({
      "entry.799407715": formData.firstName,
      "entry.1621519225": formData.lastName,
      "entry.1840553454": formData.phone,
      "entry.1207945471": formData.sheduleDate,
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
      // console.log("EROOR", err);
      if (err) {
        return err.message;
      }
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
        const res = await submitToGoogleForm();
        if (res === "Failed to fetch") {
          errorNotification("Form Submission Failed...Poor Network!");
          setLoading(false);
          return;
        }
        notificationMsg("Form successfully Submitted");
        // reset the form data
        resetFormData();
        setLoading(false);
        // navigate("/successful-submit");
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
    <section
      className="tour-section"
      id="tour"
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h2>Schedule a tour</h2>
      <div className="tour-container">
        <div className="form-container contact-us">
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                id="firstname"
                name="firstName"
                placeholder="Enter first name"
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
                placeholder="Enter last name"
                onChange={handleChange}
                value={formData.lastName}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
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
                  placeholder="Enter  your cellphone number"
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="scheduleDate">when ?</label>
              <input
                type="date"
                name="sheduleDate"
                id="scheduleDate"
                value={formData.sheduleDate}
                onChange={handleChange}
                placeholder="Pick a date"
              />
              <span className="pick-date">Pick a date</span>
              {errors.sheduleDate && (
                <p className="error-message">{errors.sheduleDate}</p>
              )}
            </div>

            <div className="cta-btn-container">
              <button className="cta-btn" type="submit" disabled={loading}>
                {loading ? "Please wait..." : "Schedule a tour"}
              </button>
            </div>
            {/* {submitStatus && <p>{submitStatus}</p>} */}
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}

export default ScheduleTour;
