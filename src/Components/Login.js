
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class LoginComp extends React.Component{ 
    constructor(props){ 
        super(props) 
        this.state={ name:'', password:'', current_user:'', loggedIn:false } 
        
        this.handleChange=this.handleChange.bind(this) 
        this.handleLogin=this.handleLogin.bind(this) 
        console.log("props from login", this.props)
    }

handleChange(event){ 
    this.setState( this.setState({ [event.target.name]: event.target.value }))}

async handleLogin(event){ 
    event.preventDefault() 
            //this.setState({"loggedIn":true,"current_user":this.state.name})
            this.props.history.push({
                pathname:`/${this.props.signedAs}`,
                state:{
                    "records": this.props.record.data
                }
            })  
        }
            render(){
                 return(
                      <div className='ui container'>
                        <h3>{`${this.props.signedAs} `}Login</h3>
                            <Form className='col-md-4' method="GET" >
                                <Form.Group >
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter User name" onChange={this.handleChange} value={this.state.name} name="name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword"> 
                                    <Form.Label>Password</Form.Label> 
                                    <Form.Control type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} name="password" /> 
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={this.handleLogin}>Log In</Button>
                            </Form> 
                        </div> ) 
                        }
                    }
export default  withRouter(LoginComp)

