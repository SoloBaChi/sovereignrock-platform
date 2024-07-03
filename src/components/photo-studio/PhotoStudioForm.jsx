import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function PhotoStudioForm(props) {
  /*


   Google Form Imported Codes:
  https://docs.google.com/forms/d/e/1FAIpQLSdlEpP48fMRxG1wK7MqQS09ZPKHWkxdO_y26Y3nQ9mHZnmqqQ/formResponse
  usp=pp_url&
  entry.1741937276=first
  &entry.1361324726=last
  &entry.1080730579=email
  &entry.487993605=phone
  &entry.259064864=2024-06-23
  &entry.591770046=8
  &entry.2094935283=Professional+Photos

   */
  const [loading, setLoading] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfEvent: "",
    noOfGuest: "",
    phone: "",
    session: "professional photos",
    others: "",
  });

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) {
      formErrors.firstName = "First Name is required !";
    }
    if (!formData.lastName) {
      formErrors.lastName = "Last Name is required !";
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
    if (!formData.phone) {
      formErrors.phone = "Phone Number is required !";
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
      email: "",
      dateOfEvent: "",
      noOfGuest: "",
      phone: "",
      session: "professional photos",
    });
  };
  //
  const submitToGoogleForm = async () => {
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdlEpP48fMRxG1wK7MqQS09ZPKHWkxdO_y26Y3nQ9mHZnmqqQ/formResponse`;
    const formDataToSubmit = new URLSearchParams({
      "entry.1741937276": formData.firstName,
      "entry.1361324726": formData.lastName,
      "entry.1080730579": formData.email,
      "entry.487993605": formData.phone,
      "entry.259064864": formData.dateOfEvent,
      "entry.591770046": formData.noOfGuest,
      "entry.557356022":
        formData.session === "others" ? formData.others : formData.session,
    });

    // const response from the submission
    try {
      const response = await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
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
      setSubmitError(err);
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
        setLoading(false);
      }
    } else {
      setErrors(formErrors);
      errorNotification("Form Submission Failed!");
      setLoading(false);
    }
  };
  // console.log(submitError);
  return (
    <section className="studio-booking-section">
      <div className="form-container studio-form">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="double one">
            <div className="form-field">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Scott"
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
                placeholder="Ruth"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="double">
            <div className="form-field">
              <label htmlFor="cellphone">phone number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="+1234567890"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>
          <div className="double">
            <div className="form-field">
              <label htmlFor="start-date">pick preffered date</label>
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
              <label htmlFor="noOfGuest">no of guest</label>
              <input
                type="number"
                id="noOfGuest"
                name="noOfGuest"
                placeholder="Enter number of guest"
                value={formData.noOfGuest}
                onChange={handleChange}
              />
              {errors.noOfGuest && (
                <p className="error-message">{errors.noOfGuest}</p>
              )}
            </div>
          </div>
          <div className="form-field radio-btns">
            <label className="caption" htmlFor="entry.2094935283">
              select a session
            </label>
            <input
              type="radio"
              id="pro-photos"
              name="session"
              value="professional photos"
              checked={formData.session === "professional photos"}
              onChange={handleChange}
            />
            <label htmlFor="pro-photos">professional photos</label>
            <input
              type="radio"
              id="casual-photos"
              name="session"
              value="casual photos"
              checked={formData.session === "casual photos"}
              onChange={handleChange}
            />
            <label htmlFor="casual-photos">casual photos</label>

            <input
              type="radio"
              id="chat-rooms"
              name="session"
              value="chat rooms"
              checked={formData.session === "chat rooms"}
              onChange={handleChange}
            />
            <label htmlFor="chat-rooms">chat rooms</label>

            <input
              type="radio"
              id="architecture"
              name="session"
              value="Architecture"
              checked={formData.session === "Architecture"}
              onChange={handleChange}
            />
            <label htmlFor="architecture">architecture</label>

            <input
              type="radio"
              id="video-shoots"
              name="session"
              value="video shoots"
              checked={formData.session === "video shoots"}
              onChange={handleChange}
            />
            <label htmlFor="video-shoots">video shoots</label>

            <input
              type="radio"
              id="advertisements"
              name="session"
              value="advertisements"
              checked={formData.session === "advertisements"}
              onChange={handleChange}
            />
            <label htmlFor="advertisements">advertisements</label>

            <input
              type="radio"
              id="streaming-contents"
              name="session"
              value="streaming contents"
              checked={formData.session === "streaming contents"}
              onChange={handleChange}
            />
            <label htmlFor="streaming-contents">streaming contents</label>

            <input
              type="radio"
              id="online-forums"
              name="session"
              value="online forums"
              checked={formData.session === "online forums"}
              onChange={handleChange}
            />
            <label htmlFor="online-forums">online forums</label>

            <input
              type="radio"
              id="others"
              name="session"
              value="others"
              checked={formData.session === "others"}
              onChange={handleChange}
            />
            <label htmlFor="others">others</label>
          </div>
          {formData.session === "others" ? (
            <div className="form-field">
              <input
                type="text"
                placeholder="Please Specify"
                name="others"
                value={formData.others}
                onChange={handleChange}
              />
              {/* <p> {formData.others}</p> */}
              {!formData.others && (
                <p className="error-message">Please Provide a Specific.</p>
              )}
            </div>
          ) : (
            <p>
              You have selected{" "}
              <span
                style={{
                  color: "yellow",
                  textTransform: "capitalize",
                  marginBottom: "1rem",
                  display: "inline-block",
                }}
              >
                {formData.session}
              </span>{" "}
              as your session
            </p>
          )}
          <div className="cta-btn-contai vner toastify-btn">
            <button type="submit">
              {loading ? "Please wait..." : "book session"}
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
}

export default PhotoStudioForm;
