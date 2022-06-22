import React, {Component} from 'react';
import {About} from './about.js';
import {Education} from './education.js'
import {Experience} from './experience.js'

class CV extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            showEducationForm: false,
            showExperienceForm: false,

            educationInputs: {
                institutionName: "",
                date: "",
                courseName: ""
            },
            workInputs: {
                companyName: "",
                date: "",
                courseName: ""
            }

        }

        this.toggleEducationForm = this.toggleEducationForm.bind(this);
        this.toggleExperienceForm = this.toggleExperienceForm.bind(this);
        console.log(this.toggleExperienceForm);
    }


    toggleEducationForm() {
        this.setState(prevState => ({
            showEducationForm: !prevState.showEducationForm
        }));
    }

    toggleExperienceForm() {
        this.setState(prevState => ({
            showExperienceForm: !prevState.showExperienceForm
        }));
    }


    render() {
        const {showEducationForm, showExperienceForm} = this.state;
        return (
            <div className="page">
                <About name="John Doe" email="john_doe@mail.com" phoneNumber="11111111" />
                <Education showEducationForm={showEducationForm} educationInstances={[{institutionName:"Cool University", courseName:"Generic Degree", dateOfStudy:"March, 2017"}]} toggleEducationForm={this.toggleEducationForm}/>
                <Experience showExperienceForm={showExperienceForm} experienceInstances={[{companyName:"Cool company", positionTitle:"Software Engineer", dates:"21st March", mainTasks:["Develop cool applications", "Create good user experiences"]}]} toggleExperienceForm={this.toggleExperienceForm}/>
            </div>
        );
    }
}  

export {CV};