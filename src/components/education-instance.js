import React, {Component} from 'react';

class EducationInstance extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {institutionName, courseName, dateOfStudy} = this.props;
        return(
            <div>
                <div className='education-name-date'>
                    <div className='education-instance-name'>{institutionName}</div>
                    <div>{dateOfStudy}</div>
                </div>


                <div>{courseName}</div>

            </div>
        )
    }
}

export {EducationInstance};