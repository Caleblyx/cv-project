import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, email, phoneNumber} = this.props;

        return( 
            <div className="about">
                <div className="about-name">{name}</div>
                <div className="about-details">
                    <div>Email: {email}</div>
                    <div>Phone number: {phoneNumber}</div>
                </div>
            </div>
        )
    }
    
}

export {About};