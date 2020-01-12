import React from 'react'

class Doctor extends React.Component{

    render(){
        const {records}=this.props.location.state
        return(
            <div>
                Doctor View
            </div>
        )
    }
}

export  default Doctor