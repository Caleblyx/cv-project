import React, {Component} from 'react';
import {About} from './about.js';
import {Education} from './education.js'
import {Experience} from './experience.js'
import uniqid from "uniqid";

class CV extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            showEducationForm: false,
            showExperienceForm: false,
            educationInstances: [{id: uniqid(), institutionName:"Cool University", courseName:"Generic Degree", startDate:"2017-03", endDate:"2018-03"}],
            educationInputs: {
                id: uniqid(),
                institutionName: "",
                startDate: "",
                endDate: "",
                courseName: ""   
            },
            workInputs: {
                companyName: "",
                date: "",
                courseName: ""
            }

        }

        this.handleEducationInstitutionNameChangeInstance = this.handleEducationInstitutionNameChangeInstance.bind(this);
        this.handleEducationCourseNameChangeInstance = this.handleEducationCourseNameChangeInstance.bind(this);
        this.handleEducationStartDateChangeInstance = this.handleEducationStartDateChangeInstance.bind(this);
        this.handleEducationEndDateChangeInstance = this.handleEducationEndDateChangeInstance.bind(this);

        this.handleEducationInstitutionNameChange = this.handleEducationInstitutionNameChange.bind(this);
        this.handleEducationStartDateChange = this.handleEducationStartDateChange.bind(this);
        this.handleEducationCourseNameChange = this.handleEducationCourseNameChange.bind(this);
        this.handleEducationEndDateChange = this.handleEducationEndDateChange.bind(this);

        this.toggleEducationForm = this.toggleEducationForm.bind(this);
        this.toggleExperienceForm = this.toggleExperienceForm.bind(this);

        this.onSubmitEducation = this.onSubmitEducation.bind(this);

    }
    handleEducationEndDateChangeInstance(date, uid) {
        console.log("changing state...");
        let index = this.state.educationInstances.findIndex(instance=>instance.id == uid);
        const update = this.state.educationInstances.slice();
        console.log(update);
        update[index].endDate = date.toString();
        this.setState({educationInstances: update});
    }

    handleEducationStartDateChangeInstance(date, uid) {
        console.log("changing state...");
        let index = this.state.educationInstances.findIndex(instance=>instance.id == uid);
        console.log(index);
        const update = this.state.educationInstances.slice();
        console.log(update);
        //console.log(date.toString());
        update[index].startDate = date.toString();
        this.setState({educationInstances: update});

    }
    handleEducationInstitutionNameChangeInstance(e, uid) {
        console.log("changing  state...");
        console.log(uid);
        let index = this.state.educationInstances.findIndex(instance=>instance.id == uid);
        console.log(index);
        const update = this.state.educationInstances.slice();
        console.log(update);
        update[index].institutionName = e.target.value; 
        this.setState({educationInstances: update});   
    }

    handleEducationCourseNameChangeInstance(e, uid) {
        console.log("changing  state...");
        console.log(uid);
        let index = this.state.educationInstances.findIndex(instance=>instance.id == uid);
        console.log(index);
        const update = this.state.educationInstances.slice();
        console.log(update);
        update[index].courseName = e.target.value; 
        this.setState({educationInstances: update});   
    }

    onSubmitEducation(e) {
        e.preventDefault();
        this.setState({
            educationInstances: this.state.educationInstances.concat(this.state.educationInputs),
            educationInputs: {
                id: uniqid(),
                institutionName: "",
                startDate: "",
                endDate: "",
                courseName: ""
            },
            showEducationForm: false
        })
    }
    handleEducationInstitutionNameChange(e) {
        this.setState(prevState => ({
            educationInputs: {
                id: prevState.educationInputs.id,
                institutionName: e.target.value,
                startDate: prevState.educationInputs.startDate,
                endDate: prevState.educationInputs.endDate,
                courseName: prevState.educationInputs.courseName
            }
        }));
    }

    handleEducationStartDateChange(e) {
        this.setState(prevState => ({
            educationInputs: {
                id: prevState.educationInputs.id,
                institutionName: prevState.educationInputs.institutionName,
                startDate: e.target.value,
                endDate: prevState.educationInputs.endDate,
                courseName: prevState.educationInputs.courseName
            }
        }));
    }

    handleEducationEndDateChange(e) {
        console.log("changing state....");
        this.setState(prevState => ({
            educationInputs: {
                id: prevState.educationInputs.id,
                institutionName: prevState.educationInputs.institutionName,
                startDate: prevState.educationInputs.startDate,
                endDate: e.target.value,
                courseName: prevState.educationInputs.courseName
            }
        }));
        
    }

    handleEducationCourseNameChange(e) {
        this.setState(prevState => ({
            educationInputs: {
                id: prevState.educationInputs.id,
                institutionName: prevState.educationInputs.institutionName,
                startDate: prevState.educationInputs.startDate,
                endDate: prevState.educationInputs.endDate,
                courseName: e.target.value
            }
        }));
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
        console.log("rendering");
        const {showEducationForm, showExperienceForm} = this.state;
        return (
            <div className="page">
                <About name="John Doe" email="john_doe@mail.com" phoneNumber="11111111" />
                <Education showEducationForm={showEducationForm} educationInstances={this.state.educationInstances} 
                toggleEducationForm={this.toggleEducationForm} handleEducationCourseNameChange = {this.handleEducationCourseNameChange} 
                handleEducationStartDateChange = {this.handleEducationStartDateChange} handleEducationEndDateChange = {this.handleEducationEndDateChange} 
                handleEducationInstitutionNameChange = {this.handleEducationInstitutionNameChange} 
                onSubmitEducation = {this.onSubmitEducation} handleEducationInstitutionNameChangeInstance={this.handleEducationInstitutionNameChangeInstance}
                handleEducationCourseNameChangeInstance={this.handleEducationCourseNameChangeInstance}
                handleEducationStartDateChangeInstance = {this.handleEducationStartDateChangeInstance}
                handleEducationEndDateChangeInstance = {this.handleEducationEndDateChangeInstance}/>
                <Experience showExperienceForm={showExperienceForm} experienceInstances={[{companyName:"Cool company", positionTitle:"Software Engineer", dates:"21st March", mainTasks:["Develop cool applications", "Create good user experiences"]}]} toggleExperienceForm={this.toggleExperienceForm}/>
            </div>
        );
    }
}  

export {CV};