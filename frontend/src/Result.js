import React from "react";
import "./ResultRow.css";
import {Col, Container, Form, Row} from "react-bootstrap";

/*
 * Here we display using Form Rows and Containers.
 * The relevant data displayed like  user name, email, age, and location
 */

export const Result = (props) => {
    return (
        <Form className="ResultBox">
            <Form.Row>
                <Form.Group as={Col}>
                    <Container>
                        <Row>
                            <Col sm md={3} lg={3}>
                            </Col>
                            <Col sm md={6} lg={6}>
                                <Container>
                                    <Row>
                                        <Col style={{fontSize: 18}}>{props.user.name}</Col>
                                    </Row>
                                    <Row>
                                        <Col style={{fontSize: 18, color: "#606060"}}>
                                            {props.user.email}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <div>{props.user.age} </div>
                                        </Col>
                                        <Col xs={1} md={2}>
                                            <div> {props.user.location}</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Form.Row>
        </Form>
    )
};
