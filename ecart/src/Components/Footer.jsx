import React from 'react'
import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

function Footer() {
  return (
    // Footer section
    <div>
        <Container fluid>
                <Row className="bg-primary text-white p-4">
                    <Col className="mx-5">
                        <Stack>
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr61xMMHz2ffxpfAnXzkfMvwTrANPxICYSjh8gFxkXFQ&s=10"
                                alt="company logo"
                                rounded
                                width={150}
                                height={150}
                            />
                            <h2>E-Cart</h2>
                            <p>Buy Products </p>
                        </Stack>
                    </Col>

                    <Col>
                        <Nav className="flex-column fs-5">
                            Useful Links
                            <NavLink href="#" className="text-white">Home</NavLink>
                            <NavLink href="#" className="text-white">About</NavLink>
                            <NavLink href="#" className="text-white">Products</NavLink>
                           
                        </Nav>
                    </Col>

                </Row>
            </Container>
    </div>
  )
}

export default Footer
