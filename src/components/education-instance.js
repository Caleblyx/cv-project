import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import CrossLogo from '../images/cross-logo.png'

import "react-datepicker/dist/react-datepicker.css"

class EducationInstance extends Component{
    constructor(props) {
        super(props);
    }
   
    render() {
        const {
            key, 
            uid, 
            institutionName, 
            courseName, 
            startDate, 
            endDate, 
            handleEducationInstitutionNameChangeInstance, 
            handleEducationCourseNameChangeInstance, 
            handleEducationStartDateChangeInstance, 
            handleEducationEndDateChangeInstance, 
            handleEducationInstanceDeletion
        } = this.props;
        return(
            <div className="education-instance">
                <img src={CrossLogo} className='cancel-button' onClick={(e) => handleEducationInstanceDeletion(e, uid)}/>
                <div className='education-name-date'>
                    <div suppressContentEditableWarning={true} contentEditable={true} onInput={(e)=>{handleEducationInstitutionNameChangeInstance(e, uid)}} className='editable education-instance-name'>{institutionName}</div>
                    <div className='dates'>
                        <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleEducationStartDateChangeInstance(date,uid)}} selected={new Date(startDate)}/>  
                        <div> to </div>
                        <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleEducationEndDateChangeInstance(date,uid)}} selected={new Date(endDate)}/>
                    </div>
                </div>
                <div className='editable' suppressContentEditableWarning={true} contentEditable={true} onInput={(e) =>{handleEducationCourseNameChangeInstance(e,uid)}}>{courseName}</div>
            </div>
        )
    }
}

export {EducationInstance};