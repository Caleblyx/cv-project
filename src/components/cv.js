import React, {Component} from 'react';
import {About} from './about.js';
import {Education} from './education.js'
import {Experience} from './experience.js'
import uniqid from "uniqid";

class CV extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            userName: "John Doe",
            eMail: "john_doe@email.com",
            phoneNumber: "12345678",
            showEducationForm: false,
            showExperienceForm: false,
            educationInstances: [{id: uniqid(), institutionName:"Cool University", courseName:"Generic Degree", startDate:"2017-03", endDate:"2018-03"}],
            experienceInstances: [{id: uniqid(), companyName:"Cool company", positionTitle:"Software Engineer", startDate:"2018-05", endDate:"2019-01", mainTasks:[{id: uniqid(), desc:"Develop cool applications"}, {id: uniqid(), desc: "Create good user experiences"}]}],
            educationInputs: {
                id: uniqid(),
                institutionName: "",
                startDate: "",
                endDate: "",
                courseName: ""   
            },
            workInputs: {
                id: uniqid(),
                companyName: "",
                positionTitle: "",
                startDate: "",
                endDate: "",
                mainTasks: []
            }

        }
        //Methods for instance changes
        this.handleEducationInstitutionNameChangeInstance = this.handleEducationInstitutionNameChangeInstance.bind(this);
        this.handleEducationCourseNameChangeInstance = this.handleEducationCourseNameChangeInstance.bind(this);
        this.handleEducationStartDateChangeInstance = this.handleEducationStartDateChangeInstance.bind(this);
        this.handleEducationEndDateChangeInstance = this.handleEducationEndDateChangeInstance.bind(this);
        this.handleEducationInstanceDeletion = this.handleEducationInstanceDeletion.bind(this);

        this.handleExperienceCompanyNameChangeInstance = this.handleExperienceCompanyNameChangeInstance.bind(this);
        this.handleExperiencePositionTitleChangeInstance = this.handleExperiencePositionTitleChangeInstance.bind(this);
        this.handleExperienceStartDateChangeInstance = this.handleExperienceStartDateChangeInstance.bind(this);
        this.handleExperienceEndDateChangeInstance = this.handleExperienceEndDateChangeInstance.bind(this);
        this.handleExperienceTaskDescriptionChangeInstance = this.handleExperienceTaskDescriptionChangeInstance.bind(this); 
        this.handleExperienceTaskDesciptionAddInstance = this.handleExperienceTaskDesciptionAddInstance.bind(this);
        this.handleExperienceTaskDescriptionDeleteInstance = this.handleExperienceTaskDescriptionDeleteInstance.bind(this);
        this.handleExperienceInstanceDeletion = this.handleExperienceInstanceDeletion.bind(this);
        //Methods for insitution name change in forms
        this.handleEducationInstitutionNameChange = this.handleEducationInstitutionNameChange.bind(this);
        this.handleEducationStartDateChange = this.handleEducationStartDateChange.bind(this);
        this.handleEducationCourseNameChange = this.handleEducationCourseNameChange.bind(this);
        this.handleEducationEndDateChange = this.handleEducationEndDateChange.bind(this);

        this.toggleEducationForm = this.toggleEducationForm.bind(this);
        this.toggleExperienceForm = this.toggleExperienceForm.bind(this);

        this.onSubmitExperience = this.onSubmitExperience.bind(this);
        this.onSubmitEducation = this.onSubmitEducation.bind(this);
        
        this.handleWorkCompanyNameChange = this.handleWorkCompanyNameChange.bind(this);
        this.handleWorkStartDateChange = this.handleWorkStartDateChange.bind(this);
        this.handleWorkEndDateChange = this.handleWorkEndDateChange.bind(this);
        this.handleWorkPositionTitleChange = this.handleWorkPositionTitleChange.bind(this);

        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
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


    onSubmitExperience(e) {
        e.preventDefault();
        console.log(this.state.workInputs);
        this.setState({
            experienceInstances: this.state.experienceInstances.concat(this.state.workInputs),
            workInputs: {
                id: uniqid(),
                companyName: "",
                positionTitle: "",
                startDate: "",
                endDate: "",
                mainTasks: []
            },
            showExperienceForm: false
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

    handleWorkCompanyNameChange(e) {
        this.setState(prevState => ({
            workInputs: {
                id: prevState.workInputs.id,
                companyName: e.target.value,
                poitionTitle: prevState.workInputs.positionTitle,
                startDate: prevState.workInputs.startDate,
                endDate: prevState.workInputs.endDate,
                mainTasks: prevState.workInputs.mainTasks
            }
        }));
    }

    handleWorkPositionTitleChange(e) {
        console.log(e.target.value);
        this.setState(prevState => ({
            workInputs: {
                id: prevState.workInputs.id,
                companyName: prevState.workInputs.companyName,
                positionTitle: e.target.value,
                startDate: prevState.workInputs.startDate,
                endDate: prevState.workInputs.endDate,
                mainTasks: prevState.workInputs.mainTasks
            }
        }));
    }

    handleWorkStartDateChange(e){
        this.setState(prevState => ({
            workInputs: {
                id: prevState.workInputs.id,
                companyName: prevState.workInputs.companyName,
                positionTitle: prevState.workInputs.positionTitle,
                startDate: e.target.value,
                endDate: prevState.workInputs.endDate,
                mainTasks: prevState.workInputs.mainTasks
            }
        }));
    }

    handleWorkEndDateChange(e){
        this.setState(prevState => ({
            workInputs: {
                id: prevState.workInputs.id,
                companyName: prevState.workInputs.companyName,
                positionTitle: prevState.workInputs.positionTitle,
                startDate: prevState.workInputs.startDate,
                endDate: e.target.value,
                mainTasks: prevState.workInputs.mainTasks
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

    handleEducationInstanceDeletion(e, uid) {
        this.setState(prevState => ({
            educationInstances: prevState.educationInstances.filter(educationInstance => educationInstance.id != uid)
        }))
    }

    handleExperienceCompanyNameChangeInstance(e, uid) {
        console.log("changing  state...");
        console.log(uid);
        let index = this.state.experienceInstances.findIndex(instance=>instance.id == uid);
        console.log(index);
        const update = this.state.experienceInstances.slice();
        console.log(update);
        update[index].companyName = e.target.value; 
        this.setState({experienceInstances: update});   
    }

    handleExperiencePositionTitleChangeInstance(e,uid) {
        let index = this.state.experienceInstances.findIndex(instance => instance.id == uid);
        const update = this.state.experienceInstances.slice();
        update[index].positionTitle = e.target.value;
        this.setState({experienceInstances: update});
    }

    handleExperienceStartDateChangeInstance(date,uid) {
        let index = this.state.experienceInstances.findIndex(instance => instance.id == uid);
        const update = this.state.experienceInstances.slice();
        update[index].startDate = date.toString();
        this.setState({experienceInstances: update});
    }

    handleExperienceEndDateChangeInstance(date, uid) {
        let index = this.state.experienceInstances.findIndex(instance => instance.id == uid);
        const update = this.state.experienceInstances.slice();
        update[index].endDate = date.toString();
        this.setState({experienceInstances: update});
    }

    handleExperienceTaskDescriptionChangeInstance(e, instanceId, taskId) {
        console.log("Updating task description")
        let instanceIndex = this.state.experienceInstances.findIndex(instance => instance.id == instanceId);
        const update = this.state.experienceInstances.slice();
        let taskIndex = update[instanceIndex].mainTasks.findIndex(task => task.id == taskId)
        update[instanceIndex].mainTasks[taskIndex] = e.target.value;
        this.setState({experienceInstance: update});
    }

    handleExperienceTaskDesciptionAddInstance(e, instanceId) {
        console.log("add");
        let instanceIndex = this.state.experienceInstances.findIndex(instance => instance.id == instanceId);
        const update = this.state.experienceInstances.slice();
        update[instanceIndex].mainTasks.push({id: uniqid(), desc: "Edit me"});
        this.setState({experienceInstances: update});
    }

    handleExperienceTaskDescriptionDeleteInstance(e, instanceId, taskId) {
        console.log("deletion");
        console.log(taskId);
        let instanceIndex = this.state.experienceInstances.findIndex(instance => instance.id == instanceId);
        console.log(instanceIndex);
        const update = this.state.experienceInstances.slice();
        update[instanceIndex].mainTasks = update[instanceIndex].mainTasks.filter(task => task.id != taskId);
        console.log(update);
        this.setState({experienceInstances: update});
    }

    handleExperienceInstanceDeletion(e, uid) {
        this.setState(prevState => ({
            experienceInstances: prevState.experienceInstances.filter(experienceInstance => experienceInstance.id != uid)
        }))
    }

    handleUserNameChange(e) {
        this.setState(prevState => ({
            userName: e.target.value
        }))
    }

    handleEmailChange(e) {
        this.setState(prevState => ({
            eMail: e.target.value
        }))
    }

    handlePhoneNumberChange(e) {
        this.setState(prevState => ({
            phoneNumber: e.target.value
        }))
    }

    render() {
        console.log("rendering");
        const {showEducationForm, showExperienceForm} = this.state;
        return (
            <div className="page">
                <About name={this.state.userName} email={this.state.eMail} phoneNumber={this.state.phoneNumber} handleUserNameChange={this.handleUserNameChange} handleEmailChange = {this.handleEmailChange} handlePhoneNumberChange = {this.handlePhoneNumberChange}/>
                <Education showEducationForm={showEducationForm} educationInstances={this.state.educationInstances} 
                toggleEducationForm={this.toggleEducationForm} handleEducationCourseNameChange = {this.handleEducationCourseNameChange} 
                handleEducationStartDateChange = {this.handleEducationStartDateChange} handleEducationEndDateChange = {this.handleEducationEndDateChange} 
                handleEducationInstitutionNameChange = {this.handleEducationInstitutionNameChange} 
                onSubmitEducation = {this.onSubmitEducation} handleEducationInstitutionNameChangeInstance={this.handleEducationInstitutionNameChangeInstance}
                handleEducationCourseNameChangeInstance={this.handleEducationCourseNameChangeInstance}
                handleEducationStartDateChangeInstance = {this.handleEducationStartDateChangeInstance}
                handleEducationEndDateChangeInstance = {this.handleEducationEndDateChangeInstance}
                handleEducationInstanceDeletion = {this.handleEducationInstanceDeletion}/>
                <Experience showExperienceForm={showExperienceForm} 
                experienceInstances={this.state.experienceInstances} 
                toggleExperienceForm={this.toggleExperienceForm} 
                onSubmitExperience={this.onSubmitExperience}
                handleWorkCompanyNameChange={this.handleWorkCompanyNameChange} 
                handleWorkPositionTitleChange={this.handleWorkPositionTitleChange} 
                handleWorkStartDateChange={this.handleWorkStartDateChange}
                handleWorkEndDateChange={this.handleWorkEndDateChange}
                handleExperienceCompanyNameChangeInstance={this.handleExperienceCompanyNameChangeInstance}
                handleExperiencePositionTitleChangeInstance={this.handleExperiencePositionTitleChangeInstance}
                handleExperienceStartDateChangeInstance={this.handleExperienceStartDateChangeInstance}
                handleExperienceEndDateChangeInstance={this.handleExperienceEndDateChangeInstance}
                handleExperienceTaskDescriptionChangeInstance={this.handleExperienceTaskDescriptionChangeInstance}
                handleExperienceTaskDesciptionAddInstance={this.handleExperienceTaskDesciptionAddInstance}
                handleExperienceTaskDescriptionDeleteInstance={this.handleExperienceTaskDescriptionDeleteInstance}
                handleExperienceInstanceDeletion = {this.handleExperienceInstanceDeletion}/>
            </div>
        );
    }
}  

export {CV};