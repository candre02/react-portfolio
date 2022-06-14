// import files
import React from "react";
import { Container } from "react-bootstrap";
// background image import
import backgroundImage from "../../assets/images/skyline.jpg";

// homepage function
function HomePage() {
  return (
    <Container id="homebase" className="background-image">
      <div
        className="bg-image p-5 text-center shadow-1-strong rounded my-2 text-white img-fluid"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "700px",
          width: "1200px",
          outline: "2px solid RGBA(0, 58, 97, 1)",
          padding: "20em",
          backgroundRepeat: "no-repeat",
          backgroundPostion: "center",
          backgroundSize: "108%"   
        }}
      >
         <h1 className="mb-2 h2" id="base2">CRYSTAL ANDRE</h1>
        <p id="base3">
         Full Stack Web Developer 
        </p> 
      </div>
    </Container>
  );
}

// export homepage
export default HomePage;
