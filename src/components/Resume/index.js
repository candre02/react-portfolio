// import files
import React from "react";
import { Container, Button } from "react-bootstrap";
import "./resume.css";
// import Footer from '../Footer/index';
import Resumefile from "../Resume/Resumefile.pdf";
import Certificate from "../Resume/Certificate.pdf";


// resume function
function Resume() {
  return (
    <Container id="res1">
      <div>
        <Button className="btn-resume">
          <a href={Resumefile} download>
            Check Out Resume
          </a>
        </Button>
        <Button className="btn-cert">
          <a href={Certificate} download>
            View Certificate
          </a>
        </Button>
      </div>
      <div>
        <ul>
          <h4 id="SAres">Skills Achieved:</h4>
          {/* <br></br> */}
          <h5 id="resDiag">Front-end & Back-end Diagram</h5>
          <br></br>
          <nav className="nav" id="navDiag">
          <ul id="ulDiag">
				<li id="liDiag">
					<a href="#" id="aDiag">HTML</a>
					<ul id="ulDiag">
						<li id="liDiag">
							<a href="#" id="aDiag">JavaScript</a>
							<ul id="ulDiag">
								<li id="liDiag">
									<a href="#" id="aDiag">Node</a>
									<ul id="ulDiag">
										<li id="liDiag">
											<a href="#" id="aDiag">Express</a>
											<ul id="ulDiag">
												<li id="liDiag">
													<a href="#" id="aDiag">Mongodb</a>
													<ul id="ulDiag">
														<li id="liDiag">
															<a href="#" id="aDiag">Sequelize</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li id="liDiag">
									<a href="#" id="aDiag">MySql</a>
									<ul id="ulDiag">
										<li id="liDiag">
											<a href="#" id="aDiag">OOP</a>
											<ul id="ulDiag">
												<li id="liDiag">
													<a href="#" id="aDiag">Mongoose</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li id="liDiag">
							<a href="#" id="aDiag">CSS</a>
							<ul id="ulDiag">
								<li id="liDiag">
									<a href="#" id="aDiag">Bootstrap</a>
									<ul id="ulDiag">
										<li id="liDiag">
											<a href="#" id="aDiag">React</a>
										</li>
										<li id="liDiag">
											<a href="#" id="aDiag">Responsive Design</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li id="liDiag">
							<a href="#" id="aDiag">APIs</a>
							<ul id="ulDiag">
								<li id="liDiag">
									<a href="#" id="aDiag">Jquery</a>
									
								</li>
								<li id="liDiag">
									<a href="#" id="aDiag">Rest</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
  </ul>
</div>
</Container>

  );            
};

// export resume
export default Resume;
