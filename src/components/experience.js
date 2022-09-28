import React, {Component} from 'react';
import {ExperienceInstance} from "./experience-instance.js"
import {AddExperienceButton} from "./add-experience-button"
import { AddWorkExperienceForm } from './add-work-experience-form.js';

class Experience extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const{
        showExperienceForm, 
        experienceInstances, toggleExperienceForm, onSubmitExperience, 
        handleWorkCompanyNameChange, handleWorkPositionTitleChange, handleWorkStartDateChange, 
        handleWorkEndDateChange, handleExperienceCompanyNameChangeInstance,
        handleExperiencePositionTitleNameChangeInstance,
        handleExperienceStartDateChangeInstance,
        handleExperienceEndDateChangeInstance,
        handleExperienceTaskDescriptionChangeInstance,
        handleExperienceTaskDesciptionAddInstance,
        handleExperienceTaskDescriptionDeleteInstance,
        handleExperienceInstanceDeletion
        } = this.props;
        const experienceSections = [];

        experienceInstances.forEach((experienceInstance) => {
            experienceSections.push(
                <ExperienceInstance
                    key = {experienceInstance.id}
                    uid = {experienceInstance.id}
                    companyName = {experienceInstance.companyName}
                    positionTitle = {experienceInstance.positionTitle}
                    startDate = {experienceInstance.startDate} 
                    endDate = {experienceInstance.endDate}
                    mainTasks = {experienceInstance.mainTasks}
                    handleExperienceCompanyNameChangeInstance = {handleExperienceCompanyNameChangeInstance}
                    handleExperiencePositionTitleNameChangeInstance = {handleExperiencePositionTitleNameChangeInstance}
                    handleExperienceStartDateChangeInstance = {handleExperienceStartDateChangeInstance}
                    handleExperienceEndDateChangeInstance = {handleExperienceEndDateChangeInstance}
                    handleExperienceTaskDescriptionChangeInstance = {handleExperienceTaskDescriptionChangeInstance}
                    handleExperienceTaskDesciptionAddInstance = {handleExperienceTaskDesciptionAddInstance}
                    handleExperienceTaskDescriptionDeleteInstance = {handleExperienceTaskDescriptionDeleteInstance}
                    handleExperienceInstanceDeletion = {handleExperienceInstanceDeletion}/>
            )
        })
        return (
            <div>
                <div className='section-title'>Experience</div>
                {experienceSections}
                <AddExperienceButton buttonType="Work" toggleForm={toggleExperienceForm}/>
                {showExperienceForm? <AddWorkExperienceForm toggleForm={toggleExperienceForm} 
                handleWorkCompanyNameChange={handleWorkCompanyNameChange} 
                handleWorkPositionTitleChange = {handleWorkPositionTitleChange}
                handleWorkStartDateChange = {handleWorkStartDateChange}
                handleWorkEndDateChange = {handleWorkEndDateChange}
                onSubmitExperience = {onSubmitExperience}/>: null}
            </div>
        );
    }
}

export{Experience};