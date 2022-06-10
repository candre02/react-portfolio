// import files
import React from "react";
import { Container, Button } from "react-bootstrap";
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
          <nav className="nav">
          <ul>
				<li>
					<a href="#">HTML</a>
					<ul>
						<li>
							<a href="#">JavaScript</a>
							<ul>
								<li>
									<a href="#">Node</a>
									<ul>
										<li>
											<a href="#">Express</a>
											<ul>
												<li>
													<a href="#">Mongodb</a>
													<ul>
														<li>
															<a href="#">Sequelize</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">MySql</a>
									<ul>
										<li>
											<a href="#">OOP</a>
											<ul>
												<li>
													<a href="#">Mongoose</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">CSS</a>
							<ul>
								<li>
									<a href="#">Bootstrap</a>
									<ul>
										<li>
											<a href="#">React</a>
										</li>
										<li>
											<a href="#">Responsive Design</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">APIs</a>
							<ul>
								<li>
									<a href="#">Jquery</a>
									
								</li>
								<li>
									<a href="#">Rest</a>
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
