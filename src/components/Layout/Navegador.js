import React, {Component} from "react";
import {connect} from 'react-redux';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

import history from "../../history";

//Images
import tornillo from "../../assets/img/screw.svg";

//CSS
import "../../assets/css/estiloMarca.css";

class Navegador extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }


    componentWillUnmount() {
    }

    render() {
        const {} = this.state;
        return (
            <div>
                <Navbar className="navegadorPrincipal" inverse collapseOnSelect style={{width:"100%"}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img className="imgTornillo" src={tornillo} alt="logo" onClick={() => {history.push("/")}}/>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav className="menuItems">
                            <NavItem eventKey={1}>
                                <NavLink to="/productos">Productos</NavLink>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <NavLink to="/promociones">Promociones</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps,mapDispatchToProps)(Navegador);
