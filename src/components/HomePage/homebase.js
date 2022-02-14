import React from 'react';
import Austin from '../../assets/images/Austin.jpg';
import { Container, Figure } from "react-bootstrap";

function HomePage() {
    return (
        <Container  id="homebase">
            <Figure>
                <Figure.Image
                width={600}
                height={800}
                alt='homepage'
                src={Austin}
                />
            </Figure>

        </Container>

    );
}

export default HomePage;