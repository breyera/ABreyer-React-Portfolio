import React from "react";

function About() {
  return (
    <div className="pt-5" id="about">
      <div className="row mx-auto p-5 about-cont">
        <div className="col-md-5 mx-auto">
          <h2>About Me</h2>
          <br />
          <div className="page-header">
            <section className="details">
              <p>
                Hello! I'm Alicia Breyer, a current marketing professional who
                was interested in learning more about building engaging websites
                for customers
              </p>
              <p>
                My software engineering journey began when I joined a new team
                and was introduced to the power of HTML and CSS while building
                emails. As the operations expert on my team, I found that
                knowing more about web design could help improve traffic to the
                site by optimizing SEO and SEM
              </p>
              <p>
                Over the last few months, coding has stood out to me as a way to
                blend my creative side with my new technical knowledge. Building
                and creating projects that display the beauty and power of
                coding.
              </p>
            </section>
          </div>
        </div>
        <br />

        <div className="col-md-4 mx-auto" id="responsBrk">
          <h2>Skills</h2>
          <br />
          <div className="page-header d-flex justify-center">
            <table
              className="table th-sm-8rem"
              id="table-style"
              style={{ textAlign: "center" }}
            >
              <tbody>
                <tr>
                  <td>HTML/CSS</td>
                  <td>Bootstrap</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>jQuery</td>
                </tr>
                <tr>
                  <td>MySQL</td>
                  <td>Express</td>
                </tr>
                <tr>
                  <td>Node.js</td>
                  <td>React</td>
                </tr>
                <tr>
                  <td>MongoDB</td>
                  <td>Git</td>
                </tr>
                <tr>
                  <td>REST APIs</td>
                  <td>JSON</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
