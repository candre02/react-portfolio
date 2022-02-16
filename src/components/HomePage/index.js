import React from 'react';
import { Container} from 'react-bootstrap';




function HomePage() {
  return (
    <Container id="homebase">
      <div
        className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
        style={{ backgroundImage: "url('../../assets/images/skyline.jpg');" }}
      >
        <h1 className="mb-3 h2">Hi!</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          praesentium labore accusamus sequi, voluptate debitis tenetur in
          deleniti possimus modi voluptatum neque maiores dolorem unde? Aut
          dolorum quod excepturi fugit.
        </p>
      </div>
    </Container>
  )
}

export default HomePage
