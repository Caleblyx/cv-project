import React, {useState} from 'react';
import {About} from './about.js';
import {Education} from './education.js'
import {Experience} from './experience.js'
import uniqid from "uniqid";

const CV = () => {
    const [userName, setUserName] = useState("John Doe")
    const [eMail, setEMail] = useState("john_doe@email.com")
    const [phoneNumber, setPhoneNumber] = useState("1234567890")
    const [showEducationForm, setShowEducationForm] = useState(false);
    const [showExperienceForm, setShowExperienceForm] = useState(false);
    const [educationInstances, setEducationInstances] = useState([{id: uniqid(), institutionName:"Cool University", courseName:"Generic Degree", startDate:"2017-03", endDate:"2018-03"}]);
    const [experienceInstances, setExperienceInstances] = useState([{id: uniqid(), companyName:"Cool company", positionTitle:"Software Engineer", startDate:"2018-05", endDate:"2019-01", mainTasks:[{id: uniqid(), desc:"Develop cool applications"}, {id: uniqid(), desc: "Create good user experiences"}]}]);
    const [educationInputs, setEducationInputs] = useState({
        id: uniqid(),
        institutionName: "",
        startDate: "",
        endDate: "",
        courseName: ""   
    })
    const [workInputs, setWorkInputs] = useState({
        id: uniqid(),
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        mainTasks: []
    })
    const handleEducationEndDateChangeInstance = (date, uid) => {
        let index = educationInstances.findIndex(instance=>instance.id == uid);
        const update = educationInstances.slice();
        update[index].endDate = date.toString();
        setEducationInstances(update);
    }

    const handleEducationStartDateChangeInstance = (date, uid) => {
        let index = educationInstances.findIndex(instance=>instance.id == uid);
        const update = educationInstances.slice();
        update[index].startDate = date.toString();
        setEducationInstances(update);

    }
    const handleEducationInstitutionNameChangeInstance = (e, uid) => {
        let index = educationInstances.findIndex(instance=>instance.id == uid);
        const update = educationInstances.slice();
        update[index].institutionName = e.target.value; 
        setEducationInstances(update);
    }

    const handleEducationCourseNameChangeInstance = (e, uid) => {
        let index = educationInstances.findIndex(instance=>instance.id == uid);
        const update = educationInstances.slice();
        update[index].courseName = e.target.value; 
        setEducationInstances(update); 
    }

    const onSubmitEducation = (e) => {
        e.preventDefault();
        setEducationInstances(prev => [...prev, educationInputs])
        setEducationInputs({
            id: uniqid(),
            institutionName: "",
            startDate: "",
            endDate: "",
            courseName: ""
        })
        setShowEducationForm(false);
    }


    const onSubmitExperience = (e) => {
        e.preventDefault();
        setExperienceInstances(prev => [...prev, workInputs])
        setWorkInputs({
            id: uniqid(),
            companyName: "",
            positionTitle: "",
            startDate: "",
            endDate: "",
            mainTasks: []
        })
        setShowExperienceForm(false)
    }

    const handleEducationInstitutionNameChange = (e) => {
        setEducationInputs(prevState => ({
            ...prevState,
            institutionName: e.target.value
        }))
    }

    const handleEducationStartDateChange = (e) => {
        setEducationInputs(prevState => ({
            ...prevState,
            startDate: e.target.value
        }));
    }

    const handleEducationEndDateChange = (e) => {
        setEducationInputs(prevState => ({
            ...prevState,
            endDate: e.target.value
        }))
    }

    const handleEducationCourseNameChange = (e) => {
        setEducationInputs(prevState => ({
            ...prevState,
            courseName: e.target.value
        }));
    }

    const handleWorkCompanyNameChange = (e) => {
        setWorkInputs(prevState => ({
            ...prevState,
            companyName: e.target.value
        }))
    }

    const handleWorkPositionTitleChange = (e) => {
        setWorkInputs(prevState => ({
            ...prevState,
            positionTitle: e.target.value
        }))
    }

    const handleWorkStartDateChange = (e) => {
        setWorkInputs(prevState => ({
            ...prevState,
            startDate: e.target.value
        }))
    }

    const handleWorkEndDateChange = (e) => {
        setWorkInputs(prevState => ({
            ...prevState,
            endDate: e.target.value
        }))
    }

    const toggleEducationForm = () => {
        setShowEducationForm(prevState => !prevState);
    }

    const toggleExperienceForm = () => {
        setShowExperienceForm(prevState => !prevState);
    }

    const handleEducationInstanceDeletion = (e, uid) => {
        setEducationInstances(prevState => 
            prevState.filter(educationInstance => educationInstance.id != uid)
        )
    }

    const handleExperienceCompanyNameChangeInstance = (e, uid) => {
        let index = experienceInstances.findIndex(instance=>instance.id == uid);
        const update = experienceInstances.slice();
        update[index].companyName = e.target.value; 
        setExperienceInstances(update);
    }

    const handleExperiencePositionTitleChangeInstance = (e,uid) => {
        let index = experienceInstances.findIndex(instance => instance.id == uid);
        const update = experienceInstances.slice();
        update[index].positionTitle = e.target.value;
        setExperienceInstances(update);
    }

    const handleExperienceStartDateChangeInstance = (date,uid) => {
        let index = experienceInstances.findIndex(instance => instance.id == uid);
        const update = experienceInstances.slice();
        update[index].startDate = date.toString();
        setExperienceInstances(update);
    }

    const handleExperienceEndDateChangeInstance = (date, uid) => {
        let index = experienceInstances.findIndex(instance => instance.id == uid);
        const update = experienceInstances.slice();
        update[index].endDate = date.toString();
        setExperienceInstances(update);
    }

    const handleExperienceTaskDescriptionChangeInstance = (e, instanceId, taskId) => {
        let instanceIndex = experienceInstances.findIndex(instance => instance.id == instanceId);
        const update = experienceInstances.slice();
        let taskIndex = update[instanceIndex].mainTasks.findIndex(task => task.id == taskId)
        update[instanceIndex].mainTasks[taskIndex] = e.target.value;
        setExperienceInstances(update);
    }

    const handleExperienceTaskDesciptionAddInstance = (e, instanceId) => {
        let instanceIndex = experienceInstances.findIndex(instance => instance.id == instanceId);
        const update = experienceInstances.slice();
        update[instanceIndex].mainTasks.push({id: uniqid(), desc: "Edit me"});
        setExperienceInstances(update);
    }

    const handleExperienceTaskDescriptionDeleteInstance = (e, instanceId, taskId) => {
        let instanceIndex = experienceInstances.findIndex(instance => instance.id == instanceId);
        const update = experienceInstances.slice();
        update[instanceIndex].mainTasks = update[instanceIndex].mainTasks.filter(task => task.id != taskId);
        setExperienceInstances(update);
    }

    const handleExperienceInstanceDeletion = (e, uid) => {
        setExperienceInstances(prevState => (
            prevState.filter(experienceInstance => experienceInstance.id != uid)
        ))
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEMail(e.target.value);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    return (
        <div className="page">
            <About name={userName} email={eMail} phoneNumber={phoneNumber} handleUserNameChange={handleUserNameChange} handleEmailChange = {handleEmailChange} handlePhoneNumberChange = {handlePhoneNumberChange}/>
            <Education showEducationForm={showEducationForm} educationInstances={educationInstances} 
            toggleEducationForm={toggleEducationForm} handleEducationCourseNameChange = {handleEducationCourseNameChange} 
            handleEducationStartDateChange = {handleEducationStartDateChange} handleEducationEndDateChange = {handleEducationEndDateChange} 
            handleEducationInstitutionNameChange = {handleEducationInstitutionNameChange} 
            onSubmitEducation = {onSubmitEducation} handleEducationInstitutionNameChangeInstance={handleEducationInstitutionNameChangeInstance}
            handleEducationCourseNameChangeInstance={handleEducationCourseNameChangeInstance}
            handleEducationStartDateChangeInstance = {handleEducationStartDateChangeInstance}
            handleEducationEndDateChangeInstance = {handleEducationEndDateChangeInstance}
            handleEducationInstanceDeletion = {handleEducationInstanceDeletion}/>
            <Experience showExperienceForm={showExperienceForm} 
            experienceInstances={experienceInstances} 
            toggleExperienceForm={toggleExperienceForm} 
            onSubmitExperience={onSubmitExperience}
            handleWorkCompanyNameChange={handleWorkCompanyNameChange} 
            handleWorkPositionTitleChange={handleWorkPositionTitleChange} 
            handleWorkStartDateChange={handleWorkStartDateChange}
            handleWorkEndDateChange={handleWorkEndDateChange}
            handleExperienceCompanyNameChangeInstance={handleExperienceCompanyNameChangeInstance}
            handleExperiencePositionTitleChangeInstance={handleExperiencePositionTitleChangeInstance}
            handleExperienceStartDateChangeInstance={handleExperienceStartDateChangeInstance}
            handleExperienceEndDateChangeInstance={handleExperienceEndDateChangeInstance}
            handleExperienceTaskDescriptionChangeInstance={handleExperienceTaskDescriptionChangeInstance}
            handleExperienceTaskDesciptionAddInstance={handleExperienceTaskDesciptionAddInstance}
            handleExperienceTaskDescriptionDeleteInstance={handleExperienceTaskDescriptionDeleteInstance}
            handleExperienceInstanceDeletion = {handleExperienceInstanceDeletion}/>
        </div>
    );
}


export {CV};