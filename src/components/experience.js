import React, {Component} from 'react';
import {ExperienceInstance} from "./experience-instance.js"
import {AddExperienceButton} from "./add-experience-button"
import { AddWorkExperienceForm } from './add-work-experience-form.js';

class Experience extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const{showExperienceForm, experienceInstances, toggleExperienceForm} = this.props;
        const experienceSections = [];

        experienceInstances.forEach((experienceInstance) => {
            experienceSections.push(
                <ExperienceInstance
                    companyName = {experienceInstance.companyName}
                    positionTitle = {experienceInstance.positionTitle}
                    dates = {experienceInstance.dates} 
                    mainTasks = {experienceInstance.mainTasks}/>
            )
        })
        return (
            <div>
                <div className='section-title'>Experience</div>
                {experienceSections}
                <AddExperienceButton buttonType="Work" toggleForm={toggleExperienceForm}/>
                {showExperienceForm? <AddWorkExperienceForm toggleForm={toggleExperienceForm} />: null}
            </div>
        );
    }
}

export{Experience};