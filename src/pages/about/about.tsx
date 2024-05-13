import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Meet the Founders </h1>
      <p>
        At Uplift India Global, we are committed to making a positive impact on
        the lives of others. Our vision was to create a world where every
        individual has the opportunity to thrive and succeed, as we were always
        given the opportunities and resources to thrive in all aspects of our
        lives. Our collective passion for social change and deep-rooted belief
        in the power of community empowerment serve as the guiding principles of
        Uplift India Global. After multiple trips to India throughout our lives,
        we have witnessed the harsh realities faced by many communities,
        specifically those in less fortunate regions of India. These experiences
        have ignited a passion within us to promote change. Thus, Uplift India
        Global was born, driven by a commitment to empower and uplift those in
        need!
      </p>
      <div className={styles.homeContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.personDescription}>
            <p>Nidhi</p>
            <p>
              Hi! I am a ninth grader at Livingston High School, NJ, and hope to
              make a difference both in India and right here in America. Being
              part of Uplift India Global gives me the chance to do just that.
              Some of my hobbies and extracurriculars include volunteering,
              swimming, robotics, and working towards becoming an Eagle Scout.
              In my free time I enjoy listening to music and spending time with
              my family and friends. I'm thrilled to be part of Uplift India
              Global, and use my skills and passions to make a meaningful impact
              with Uplift India Global, spreading hope and empowerment to those
              in need.
            </p>
          </div>
          <img src="https://picsum.photos/600/300" alt="test" />
        </div>
        <div className={styles.infoContainer}>
          <img src="https://picsum.photos/600/300" alt="test" />
          <div className={styles.personDescription}>
            <p>Tanya</p>
            <p>
              Hi! I'm Tanya, a ninth grader at LHS, driven by a desire to create
              positive change both locally and globally. My involvement with
              Uplift India Global stems from a deep-rooted commitment to help
              those in need in India while also fostering impactful change in my
              own community. Outside of academics, I dedicate my time to
              volunteering, playing tennis, coding, and playing chess. Amidst my
              schedule, I love spending time with my family and friends, and
              reading. My experiences teaching Indian children in Livingston,
              particularly in languages and cooking, have inspired me to take
              action and establish this organization. I am eager to embark on
              this journey with Uplift India Global, where I can apply my skills
              and dedication to make a meaningful impact and empower individuals
              in India and beyond!
            </p>
          </div>
        </div>
        Inspired by the passion and vision of our founders, we invite you to
        join us in our mission to uplift India. Together, we can build a
        brighter future for generations to come!
      </div>
    </div>
  );
}
