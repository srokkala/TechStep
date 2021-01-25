import React, {Component} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import './SearchPage.css';
import {ResultRow} from "./ResultRow";
import axios from 'axios';
import {SearchBox} from "./SearchBox";

/*
 * Here we want to keep track of three variables whose state could change
 * In the Render function, we update the userList state after using the .filter
 * and .includes on the current userList to check for matches containing the searchValue
 */
class SearchPage extends Component {
    state = {
        searchValue: "",
        userList: [],
    };


    //Get the Results when the component mounts and set the initial state of userList
    componentDidMount = () => {
         axios.get('http://localhost:5000/api/routes/search').then(resp => {
            this.setState({userList: resp.data});
        })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const {userList, searchValue} = this.state;
        const filteredUsers = userList.filter((user => user.name.toLowerCase().includes(searchValue.toLowerCase())));
        return (
            <Container>
                <Container>
                    <Form className="Rectangle">
                        <Form.Row className="SearchText"> Search Users </Form.Row>
                        <Row>
                            <Col xs={8} md={10}>
                                <SearchBox className="SearchBar" placeholder="Search Here"
                                           handleChange={e => this.setState({searchValue: e.target.value})}/>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Container>
                    <ResultRow userList={filteredUsers}/>
                </Container>
            </Container>
        );
    }
}

export default SearchPage;
