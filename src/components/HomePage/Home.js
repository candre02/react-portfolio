import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/mdb.min.css';

function HomePage() {
  return (
    <Container id="homebase">
      <div
        class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
        // eslint-disable-next-line react/style-prop-object
        style="background-image: url('../../assets/images/Austin.jpg');"
      >
        <h1 class="mb-3 h2">Hi!</h1>

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
