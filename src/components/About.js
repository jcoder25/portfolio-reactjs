import React from "react";
function About() {
  return (
    <div>
      <h1 className="text-center">Wanted to Know About me</h1>
      <h1 className="text-center">Welcome</h1>
      <div className="about-main justify-content-center">
        <p>
          Hello guys,
          <br /> I am Jashan Jindal <br />
          from Vellore Institute of Technology , Chennai <br />
          Currently studing 3rd year in Computer Science Engineering
        </p>
        <ul className="list-inline ">
          <li className="list-inline-item">
            I’m currently learning more programming languages
          </li>
          <li>I had already learnt basic C, C++, Java, Python</li>
          <li>I will do Compitive Coding in C++</li>
          <li>Iam currently working on Devolopment Projects.</li>
          <li>
            Iam now intrested in moving towards Android Devolopment and Web
            Development{" "}
          </li>
        </ul>
        <h4 className="text-center">Education</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Qualification</th>
              <th scope="col">Institute</th>
              <th scope="col">Grade</th>
              <th scope="col">Year of Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">B.tech</th>
              <td>Vellore Institute of Technology,Chennai</td>
              <td>2021 - Present</td>
            </tr>
            <tr>
              <th scope="row">12th</th>
              <td>Holy Child School,Rudrapur</td>
              <td>80 %</td>
              <td>2020</td>
            </tr>
            <tr>
              <th scope="row">10th</th>
              <td>Holy Child School,Rudrapur</td>
              <td>82.6 %</td>
              <td>2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;