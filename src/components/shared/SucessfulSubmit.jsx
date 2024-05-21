import React from "react";
import { Link } from "react-router-dom";

function SucessfulSubmit(props) {
  const { header, wrapper, container } = styles;
  return (
    <>
      <section style={container}>
        <div style={wrapper}>
          <h3 style={header}>submission confirmed !!!</h3>
          <span style={{ textAlign: "center", display: "block" }}>
            <em>Thanks for submission</em>
          </span>
        </div>
      </section>
      <Link style={{ padding: "1rem 4rem" }} to="/">
        <span>&larr;</span> Go back
      </Link>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  wrapper: {
    margin: "auto",
    boxShadow: "2px 3px 8px rgba(0,0,0,0.25)",
    padding: "1.4rem",
  },
  header: {
    fontSize: "1rem",
  },
};

export default SucessfulSubmit;
