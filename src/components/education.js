import React, {Component} from 'react';
import {EducationInstance} from './education-instance.js'
import {AddExperienceButton} from './add-experience-button'
import {AddEducationForm} from './add-education-form.js'

class Education extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {showEducationForm, educationInstances, toggleEducationForm} = this.props;
        const educationSections = [];
    
        educationInstances.forEach((educationInstance) => {
            educationSections.push(
                <EducationInstance
                    institutionName = {educationInstance.institutionName}
                    courseName = {educationInstance.courseName}
                    dateOfStudy = {educationInstance.dateOfStudy} />
            )
        })


        return (
            <div>
                <div className="section-title">Education</div>
                {educationSections}
                <AddExperienceButton buttonType="Educational" toggleForm={toggleEducationForm}/>
                {showEducationForm? <AddEducationForm toggleForm={toggleEducationForm}/> : null}
            </div>
        );
    }
}
export {Education};