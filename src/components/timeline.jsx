import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Masters at Kingston University{" "}
                          <span>Jan 2022-March 2023</span>
                        </h2>
                        <p>
                          I recently have joined the Juniper Networs as a
                          Software Developer-Intern in the DevOps team. My major
                          part of the work has been into the field of creating
                          sustainable and flexible CI/CD (Continuous Integration
                          & Continuous Development) pipelines which enables
                          developers at Juniper to do rapid development. I am
                          also exploring the role of container technology like
                          Docker and container-orchrastation technologies like
                          K8s, Swarm to create industry standard production
                          environments.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Software Engineer at Spicejet Limited
                          <span> May 2020 - Jan 2022</span>
                        </h2>
                        <p>
                          I am pursuing my under-graduation studies with major
                          in I.C.T.(Information & Communication Technology). I
                          have taken courses like DSA, OOPs, Computer Networks,
                          IOT, Web-Data Management over the years and have
                          better understanding of these subjects.I have also
                          been part of S.B.G.(Student Body Govenance) scince my
                          first year of college.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Software Consultant at Kwix Global Solutions{" "}
                          <span>Aug 2018 - Apr 2020</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths with 91
                          merit. During my time at school, I have developed
                          interest in solving complex problems of the
                          fundamental physics which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Software Engineer at Parangat Solutions{" "}
                          <span>Jan 2018- August 2018 </span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths with 91
                          merit. During my time at school, I have developed
                          interest in solving complex problems of the
                          fundamental physics which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Developer at TechAhead Software Ltd{" "}
                          <span>June 2015 - Dec 2017</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths with 91
                          merit. During my time at school, I have developed
                          interest in solving complex problems of the
                          fundamental physics which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
