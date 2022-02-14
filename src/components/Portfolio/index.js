import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";
import Quiz from "../../assets/images/Quiz.jpg";
import TB from "../../assets/images/TB.jpg";
import ET from "../../assets/images/ET.jpg";
import EC from "../../assets/images/EC.jpg";
import GS from "../../assets/images/GS.jpg";


function Portfolio() {
    return (
        <Container>
            <div>
                <h1>Portfolio</h1>
            </div>
                <CardGroup>
                    <div className="bg-light border">
                        <Card style={{ width: '18rem'}}>
                            <a href="https://candre02.github.io/Fundamental-Quiz/">
                                <Card.Img variant="top" src={Quiz} />
                            </a>
                            <Card.Body>
                                <Card.Title>Fundamental Quiz</Card.Title>
                                <Card.Text>
                                Quiz on javascript fundamentals, included Q/A's, timer is deducted when answers are wrong, 
                                presented applicants initials and there total score. Check out Fundamental Quiz by clicking on the image or Github repository click{" "}
                                <a className="link" href="https://candre02.github.io/Fundamental-Quiz/"> {" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="bg-light border">
                    <Card style={{ width: '18rem'}}>
                            <a href="https://github.com/candre02/Profile-Building.git">
                                <Card.Img variant="top" src={TB} />
                            </a>
                            <Card.Body>
                                <Card.Title>Profile Building</Card.Title>
                                <Card.Text>
                                    This is a Object-Oriented Programming (OOP) Project, that prompts infomation about each team member employed.
                                    Check out Profile Building by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/candre02/Profile-Building.git">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="bg-light border">
                    <Card style={{ width: '18rem'}}>
                            <a href="https://github.com/candre02/Employee-Guide.git">
                                <Card.Img variant="top" src={ET} />
                            </a>
                            <Card.Body>
                                <Card.Title>Employee Guide</Card.Title>
                                <Card.Text>
                                    This is a SQL Project, allows the user to track employees by using there department's, role's, title's, saleries and manage their manager status.
                                    Check out Profile Building by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/candre02/Employee-Guide.git">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem'}}>
                            <a href="https://github.com/candre02/digital-TradeBEnd.git">
                                <Card.Img variant="top" src={EC} />
                            </a>
                            <Card.Body>
                                <Card.Title>digital-TradeBEnd</Card.Title>
                                <Card.Text>
                                    This is a Object-Relational Mapping (ORM) Project, allows the user to create, read, update, and delete (CRUD) on the related material routes.
                                    Check out digital-TradeBEnd by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/candre02/digital-TradeBEnd.git">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem'}}>
                            <a href="https://secret-forest-66148.herokuapp.com/">
                                <Card.Img variant="top" src={GS} />
                            </a>
                            <Card.Body>
                                <Card.Title>Git-Stuff</Card.Title>
                                <Card.Text>
                                An online database in which products are stored. The user creates a listing, sets a price and gives a short description of the product. 
                                Users emails are displayed so that other users can contact them in regards to the product.
                                Check out Git Stuff by clicking on the image or Github repository click{" "}
                                    <a className="link" href="https://github.com/chase-risinger/15-git-stuff">{" "} here</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
            </CardGroup>
        </Container>
    );
}

export default Portfolio;