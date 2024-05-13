import React from "react";
import styles from "./aquaAssist.module.css";

export default function AquaAssist() {
  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form
        method="POST"
        action="YOUR_WEBAPP_URL"
        className={styles.contactFormContainer}
      >
        <input name="Email" type="email" placeholder="Email" required />
        <div>
          <input
            name="First Name"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            name="Last Name"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
