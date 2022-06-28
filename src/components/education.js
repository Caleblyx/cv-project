import React, {Component} from 'react';
import {EducationInstance} from './education-instance.js'
import {AddExperienceButton} from './add-experience-button'
import {AddEducationForm} from './add-education-form.js'

class Education extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {showEducationForm, educationInstances, toggleEducationForm, handleEducationCourseNameChange, handleEducationStartDateChange, handleEducationEndDateChange, handleEducationInstitutionNameChange, onSubmitEducation, handleEducationInstitutionNameChangeInstance, handleEducationCourseNameChangeInstance, handleEducationStartDateChangeInstance, handleEducationEndDateChangeInstance} = this.props;
        const educationSections = [];
        
        console.log(handleEducationInstitutionNameChangeInstance);

        educationInstances.forEach((educationInstance) => {
            educationSections.push(
                <EducationInstance
                    key = {educationInstance.id}
                    uid = {educationInstance.id}
                    institutionName = {educationInstance.institutionName}
                    courseName = {educationInstance.courseName}
                    startDate = {educationInstance.startDate}
                    endDate={educationInstance.endDate}
                    handleEducationInstitutionNameChangeInstance = {handleEducationInstitutionNameChangeInstance}
                    handleEducationCourseNameChangeInstance = {handleEducationCourseNameChangeInstance} 
                    handleEducationStartDateChangeInstance = {handleEducationStartDateChangeInstance}
                    handleEducationEndDateChangeInstance = {handleEducationEndDateChangeInstance}/>
            )
        })


        return (
            <div>
                <div className="section-title">Education</div>
                {educationSections}
                <AddExperienceButton buttonType="Educational" toggleForm={toggleEducationForm}/>
                {showEducationForm? <AddEducationForm toggleForm={toggleEducationForm} handleEducationCourseNameChange = {handleEducationCourseNameChange} handleEducationStartDateChange = {handleEducationStartDateChange} handleEducationEndDateChange = {handleEducationEndDateChange} handleEducationInstitutionNameChange = {handleEducationInstitutionNameChange} onSubmitEducation={onSubmitEducation}/> : null}
            </div>
        );
    }
}
export {Education};