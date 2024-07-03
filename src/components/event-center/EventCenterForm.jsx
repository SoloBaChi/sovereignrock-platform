import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./eventstyles.css";

function EventCenterForm(props) {
  /*
https://docs.google.com/forms/d/e/1FAIpQLScii2KiKt79eACcd8f0eEIYQn5ODe0FuM1g8iPGZnO3WrE-Ug/formResponse
entry.84682420=999-fn
&entry.1389113320=999-ln
&entry.1666169953=999-event
&entry.702504685=999-guest
&entry.997125797=999-email
&entry.44190380=999-phone
&entry.849191889=999-message

/////////////////////////

https://docs.google.com/forms/d/e/1FAIpQLScii2KiKt79eACcd8f0eEIYQn5ODe0FuM1g8iPGZnO3WrE-Ug/viewform?usp=pp_url&entry.84682420=999-fn&entry.1389113320=999-ln&entry.1666169953=999-event&entry.334216627=2024-05-23&entry.702504685=999-guest&entry.997125797=999-email&entry.44190380=999-phone&entry.849191889=999-message


////////////////////////



// for the date field
name="entry.334216627_year"
name="entry.334216627_month"
name="entry.334216627_day"
*/
  const [loading, setLoading] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    event: "",
    dateOfEvent: "",
    noOfGuest: "",
    email: "",
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
    if (!formData.event) {
      formErrors.event = "Event is required !";
    }
    if (!formData.dateOfEvent) {
      formErrors.dateOfEvent = "Date is required !";
    }
    if (!formData.noOfGuest) {
      formErrors.noOfGuest = "Number of Guest is required !";
    }
    if (!formData.email) {
      formErrors.email = "Email is required !";
    }
    if (!formData.dateOfEvent) {
      formErrors.dateOfEvent = "Date is required !";
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
      event: "",
      dateOfEvent: "",
      noOfGuest: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  //
  const submitToGoogleForm = async () => {
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScii2KiKt79eACcd8f0eEIYQn5ODe0FuM1g8iPGZnO3WrE-Ug/formResponse`;
    const formDataToSubmit = new URLSearchParams({
      "entry.84682420": formData.firstName,
      "entry.1389113320": formData.lastName,
      "entry.1666169953": formData.event,
      "entry.334216627": formData.dateOfEvent,
      "entry.702504685": formData.noOfGuest,
      "entry.997125797": formData.email,
      "entry.44190380": formData.phone,
      "entry.849191889": formData.message,
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
    <section className="event-booking-section">
      <div className="form-container event-center">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="double one">
            <div className="form-field">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="single">
            <div className="form-field">
              <label htmlFor="event">event</label>
              <input
                type="text"
                id="event"
                name="event"
                value={formData.event}
                onChange={handleChange}
              />
              {errors.event && <p className="error-message">{errors.event}</p>}
            </div>
          </div>
          <div className="double two">
            <div className="form-field">
              <label htmlFor="dateOfEvent">date of event</label>
              <input
                type="date"
                id="dateOfEvent"
                name="dateOfEvent"
                value={formData.dateOfEvent}
                onChange={handleChange}
              />
              {errors.dateOfEvent && (
                <p className="error-message">{errors.dateOfEvent}</p>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="noOfGuest">anticipated number of guest</label>
              <input
                type="number"
                id="noOfGuest"
                name="noOfGuest"
                value={formData.noOfGuest}
                onChange={handleChange}
              />
              {errors.noOfGuest && (
                <p className="error-message">{errors.noOfGuest}</p>
              )}
            </div>
          </div>
          <div className="double">
            <div className="form-field">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="phone">phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>
          <div className="text-area">
            <div className="form-field">
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="msg"
                cols="20"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>
          </div>
          <div className="cta-btn-container toastify-btn">
            <button type="submit">
              {loading ? "Please wait..." : "book event"}
            </button>
          </div>
          <ToastContainer />
        </form>
        {/* <form className="form-wrapper">
          <div className="double">
            <div className="form-field">
              <label htmlFor="firstname">first name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Joe"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastname">last name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="double">
            <div className="form-field">
              <label htmlFor="cellphone">phone number</label>
              <input
                type="number"
                id="cellphone"
                name="cellphone"
                placeholder="+634 405 987"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
          <div className="double">
            <div className="form-field">
              <label htmlFor="start-date">starting date</label>
              <input type="date" id="start-date" name="start-date" required />
            </div>
            <div className="form-field">
              <label htmlFor="end-date">ending date</label>
              <input type="date" id="end-date" name="end-date" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="noOfGuest">no of guest</label>
            <input
              type="number"
              id="noOfGuest"
              name="noOfGuest"
              placeholder="Enter number of guest"
              required
            />
          </div>

          <div className="cta-btn-container">
            <button className="btn" type="submit">
              book event
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}

export default EventCenterForm;
