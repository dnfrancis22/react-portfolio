import React from "react";
import "../../styles/style.css";
import Bio from "../../assets/IMG_6171.jpg";

const About = () => {
  return (
    <>
      <main className="container cont">
        {/* <!-- This is the main header for the article. (About Me) --> */}
        <header className="row">
          <section className="col">
            <h1>About Me</h1>
          </section>
        </header>
        {/* <!-- The article contains an image and short bio. --> */}
        <article className="row">
          <figure className="col">
            <img className="img" src={Bio} alt="me" />
            <p>
              Full stack web developer with a background in graphic design and
              3D design. Combining my experience in design and marketing with my
              newly acquired HTML, CSS, and Javascript skills from GA Tech to
              create a dynamic and creative web experience that will enhance any
              company's brand. I look for new ways to attack challenges. I have
              the ability to multitask and meet strict deadlines. I work great
              in a team environment as well as on my own with little to no
              supervision. I am extremely passionate about web development. I
              look forward to being an essential team member working to create
              unique and exciting web solutions.
            </p>
          </figure>
        </article>
        {/* <!-- This article contains links to email and social media. --> */}
        <article className="row">
          <section className="" class="col">
            <p>
              These are links to my GitHub, Linked In, and Email. Click them if
              you want to learn more about me or just send me an email. Feel
              free to leave your information on the contact page.
            </p>
            <ul>
              <li>
                <a href="https://github.com/dnfrancis22">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dennis-francis/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:dnfrancis22@gmail.com">dnfrancis22@gmail.com</a>
              </li>
              <li>Mobile:(678)-571-4153</li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
};

export default About;
