import React from "react";
import styles from "./ourImpact.module.css";

export default function OurImpact() {
  return (
    <div className={styles.homeContainer}>
      <h1>Our Impact</h1>
      <div className={styles.infoContainer}>
        <p>
          At Uplift India, our commitment to transforming communities is at the
          heart of everything we do. Through our diverse programs, we strive to
          make meaningful impacts on the lives of individuals across India. From
          our dedicated efforts in providing educational resources and support
          to children in orphanages, to create nurturing environments, ready to
          crete their potential and equip them with essential skills for a
          brighter future, to our initiatives focused on water purification to
          ensure access to clean and safe drinking water for communities in
          need, our work is driven by a passion for positive change.
        </p>
        <img src="https://picsum.photos/600/300" alt="test" />
      </div>
      <div className={styles.infoContainer}>
        <img src="https://picsum.photos/600/300" alt="test" />
        <p>
          As we look to the future, our vision extends beyond our current
          endeavors. We aspire to broaden our scope, introducing new programs
          that address pressing challenges and empower less-fortunate
          populations. By expanding our reach and deepening our impact, we aim
          to catalyze sustainable development and uplift even more communities
          across India. Together, with the support of our dedicated team,
          partners, and donors, we are shaping a better tomorrow for generations
          to come.
        </p>
      </div>
    </div>
  );
}
