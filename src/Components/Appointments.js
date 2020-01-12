import React from 'react'
import { Header, Row, Button, Container,Form, Accordion,Card, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import axios from 'axios'

class Appointments extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {display_text, readOnly} = this.props
        return(
            <div>
            <h3>{display_text}</h3>
                <Form>
                    <Form.Group controlId="speciality">
                        <Form.Label>Speciality</Form.Label>
                        <Form.Control as="select" disabled={readOnly}>
                        <option>ENT</option>
                        <option>Cardiologist</option>
                        <option>Othropaedics</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="docName">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control as="select" disabled={readOnly}>
                        <option>Doc 1</option>
                        <option>Doc 2</option>
                        <option>Doc 3</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <div>
                            <input type="date" disabled={readOnly}/>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Time Slot</Form.Label>
                        <Form.Control as="select" disabled={readOnly}>
                        <option>Slot 1</option>
                        <option>Slot 2</option>
                        <option>Slot 3</option>
                        </Form.Control><br></br>    
                        <Button variant="primary" type="submit"  onClick={this.handleLogin}>{display_text} </Button>
                    </Form.Group>
            </Form>
            </div>
        )
    }
}

export default Appointments