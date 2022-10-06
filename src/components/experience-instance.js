import React, {Component} from 'react';
import DatePicker from "react-datepicker"
import CrossLogo from '../images/cross-logo.png'

const ExperienceInstance = ({
        key,
        uid,
        companyName, 
        positionTitle, 
        startDate, 
        endDate, 
        mainTasks,
        handleExperienceCompanyNameChangeInstance,
        handleExperiencePositionTitleNameChangeInstance,
        handleExperienceStartDateChangeInstance,
        handleExperienceEndDateChangeInstance,
        handleExperienceTaskDescriptionChangeInstance,
        handleExperienceTaskDesciptionAddInstance,
        handleExperienceTaskDescriptionDeleteInstance,
        handleExperienceInstanceDeletion
        }) => {
        const taskList = []

        mainTasks.forEach(task=>taskList.push(<li key={task.id} className="task-description editable" contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => {handleExperienceTaskDescriptionChangeInstance(e, uid, task.id)}}>{task.desc} <img src={CrossLogo} onClick = {(e) => handleExperienceTaskDescriptionDeleteInstance(e, uid, task.id)} className='cancel-button-taskdesc'/></li>))
        
        return(
        <div className="experience-instance">
                <img src={CrossLogo} className='cancel-button' onClick={(e) => handleExperienceInstanceDeletion(e, uid)}/>
            <div className="experience-company-date">
                <div className="experience-instance-name editable" contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => {handleExperienceCompanyNameChangeInstance(e,uid)}}>{companyName}</div>
                <div className='dates'>
                    <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleExperienceStartDateChangeInstance(date,uid)}} selected={new Date(startDate)}/>  
                    <div> to </div>
                    <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleExperienceEndDateChangeInstance(date,uid)}} selected={new Date(endDate)}/>
                </div>
            </div>
            <div className="editable" contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => {handleExperiencePositionTitleNameChangeInstance(e,uid)}}>{positionTitle}</div>
            <div>
                <ul>
                    {taskList}
                    <li onClick={ e=> {handleExperienceTaskDesciptionAddInstance(e, uid)}}>Click here to add main task</li>
                </ul>
            </div>
        </div>
    )}

export {ExperienceInstance};