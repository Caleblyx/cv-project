import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

class EducationInstance extends Component{
    constructor(props) {
        super(props);
    }
   
    render() {
        const {key, uid, institutionName, courseName, startDate, endDate, handleEducationInstitutionNameChangeInstance, handleEducationCourseNameChangeInstance, handleEducationStartDateChangeInstance, handleEducationEndDateChangeInstance } = this.props;
        console.log(handleEducationStartDateChangeInstance );
        return(
            <div>
                <div className='education-name-date'>
                    <div contentEditable={true} onInput={(e)=>{handleEducationInstitutionNameChangeInstance(e, uid)}} className='education-instance-name'>{institutionName}</div>
                    <div className='dates'>
                        <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleEducationStartDateChangeInstance(date,uid)}} selected={new Date(startDate)}/>  
                        <div> to </div>
                        <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleEducationEndDateChangeInstance(date,uid)}} selected={new Date(endDate)}/>
                    </div>
                </div>
                <div contentEditable={true} onInput={(e) =>{handleEducationCourseNameChangeInstance(e,uid)}}>{courseName}</div>
            </div>
        )
    }
}

export {EducationInstance};