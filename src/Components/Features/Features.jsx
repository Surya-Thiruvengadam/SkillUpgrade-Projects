import React from "react";
import './Features.css'

const Features = () => {
  return (
    <div>
      <div className="container ftrs-container">
        <article className="ftr">
          <h1>Diverse Course</h1>
          <div>
            <p>
              We cover a wide range of domains, from coding and design to
              analytics and beyond, ensuring that you find the right fit for
              your learning needs.
            </p>
            <a href="#"> join now </a>
          </div>
        </article>
        <article className="ftr">
          <h1>Expert Instructors</h1>
          <div>
            <p>
              Learn from industry experts who bring their wealth of knowledge
              and experience to the table, guiding you every step of the way.
            </p>
            <a href="#"> join now</a>
          </div>
        </article>
        <article className="ftr">
          <h1>Supportive Community</h1>
          <div>
            <p>
              Be part of a vibrant community of learners and professionals who
              share your passion for growth and development. Collaborate,
              network, and grow together.
            </p>
            <a href="#"> join now</a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Features;
