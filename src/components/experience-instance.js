import React, {Component} from 'react';
import DatePicker from "react-datepicker"
import CrossLogo from './cross-logo.png'

class ExperienceInstance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {
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
        } = this.props;
        const taskList = []

        mainTasks.forEach(task=>taskList.push(<li className="task-description" contentEditable={true} onInput={(e) => {handleExperienceTaskDescriptionChangeInstance(e, uid, task.id)}}>{task.desc} <img src={CrossLogo} onClick = {(e) => handleExperienceTaskDescriptionDeleteInstance(e, uid, task.id)} className='cancel-button-taskdesc'/></li>))
        
        return(
            <div className="experience-instance">
                 <img src={CrossLogo} className='cancel-button' onClick={(e) => handleExperienceInstanceDeletion(e, uid)}/>
                <div className="experience-company-date">
                    <div className="experience-instance-name" contentEditable={true} onInput={(e) => {handleExperienceCompanyNameChangeInstance(e,uid)}}>{companyName}</div>
                    <div className='dates'>
                        <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleExperienceStartDateChangeInstance(date,uid)}} selected={new Date(startDate)}/>  
                        <div> to </div>
                        <DatePicker dateFormat="MMM-yyyy" onChange={(date) => {handleExperienceEndDateChangeInstance(date,uid)}} selected={new Date(endDate)}/>
                    </div>
                </div>
                <div contentEditable={true} onInput={(e) => {handleExperiencePositionTitleNameChangeInstance(e,uid)}}>{positionTitle}</div>
                <div>
                    <ul>
                        {taskList}
                        <li onClick={ e=> {handleExperienceTaskDesciptionAddInstance(e, uid)}}>Click here to add main task</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export {ExperienceInstance};