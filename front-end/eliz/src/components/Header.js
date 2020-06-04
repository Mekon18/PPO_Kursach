import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
//import { Route } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from '../assets/logo192.png'
import Home from '../pages/Home';
import Team from '../pages/Team';
import About from '../pages/Appointment';
import ProfileContainer from '../components/ProfileContainer'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <img height="30" width="30" className="d-inline-block align-top" src={logo} alt="лого"/>
                            Элизабет
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/team">Врачи</Nav.Link>
                                <Nav.Link href="/appointment">Запись на приём</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/team" component={Team}/>
                        <Route exact path="/appointment" component={About}/>
                        <Route path="/profile/:id" render={(props) => <ProfileContainer {...props}/>} />
                    </Switch>
                </Router>
            </>
        )
    }
}