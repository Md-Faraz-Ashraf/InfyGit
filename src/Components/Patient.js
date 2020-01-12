import React from 'react'
import { Header, Row, Button, Container,Form, Accordion,Card, Col } from 'react-bootstrap'
import Appointments from '../Components/Appointments'
import Table from 'react-bootstrap/Table';
import axios from 'axios'

class Patient extends React.Component{ 
    constructor(props){ super(props) 
        this.state={ name:this.props.name,
             phone:this.props.phone, 
             age:this.props.age, address:this.props.address, 
             val:true } 
             
    this.handleEdit=this.handleEdit.bind(this) 
    this.handleSave=this.handleSave.bind(this)
 }

 handleEdit(){ this.setState({"val":false})}
 handleSave(event){ console.log(event) } 

 render(){ 
    return( 
    <Container>  
        <Row> 
            <Col sm={8}>
                <h3>Patient Details</h3> 
                <Form className='col-md-6' >
                    <Form.Group > 
                        <Form.Label>User Name</Form.Label> 
                        <Form.Control type="text" placeholder=" User name" disabled={this.state.val} /> 
                    </Form.Group>
                    <Form.Group > 
                        <Form.Label>Phone</Form.Label> 
                        <Form.Control type="text" placeholder="Phone Number" disabled={this.state.val} /> 
                    </Form.Group>
                    <Form.Group >
                        < Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Age" disabled={this.state.val}/> 
                    </Form.Group>
                    <Form.Group > 
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" disabled={this.state.val} /> 
                    </Form.Group>
                    <Button variant="primary" type="text">Save</Button> 
                </Form>
                <div className='col-md-2'> 
                    <Button varisant="primary" onClick={this.handleEdit}>
                        Edit Profile
                    </Button> 
                </div>
            </Col>
            <Col sm={4}>
                <Appointments display_text="Book Appointment" readOnly={false}/>
            </Col>
        </Row> 
    </Container>) }} 
export default Patient