import React from 'react'
import {Table, Container, Row, Col} from 'react-bootstrap'
import Appointments from '../Components/Appointments'

class Admin extends React.Component{
    constructor(props){
        super(props)
        console.log("props for admin",this.props)
    }
    render(){
        const {records}=this.props.location.state
        return(
            <Container>
                <Row>
                    <Col sm={8}>
                    <h1>All Doctors</h1>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Doctor Id</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            </tr>
                        </thead>
                        <tbody hover>
                            {
                            records.map((record)=>{
                                const eachRow=Object.values(record)
                                return (
                                    <tr>
                                        {
                                            eachRow.map((item)=>{
                                                return(
                                                    <td>{item}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                    ) 
                                })
                            }
                        </tbody>
                    </Table>
                    </Col>
                    <Col sm={4}>
                        <Appointments display_text="Cancel Appointment" readOnly={true}/>
                        </Col>
            </Row>
        </Container>
        )
    }
}

export  default Admin