import React, {Component} from 'react';

class ExperienceInstance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {companyName, positionTitle, startDate, endDate, mainTasks} = this.props;
        const taskList = []

        mainTasks.forEach(task=>taskList.push(<li>{task}</li>))
        return(
            <div>
                <div className="experience-company-date">
                    <div className="experience-instance-name">{companyName}</div>
                    <div>{startDate}</div>
                    <div> to </div>
                    <div>{endDate}</div>
                </div>
                <div>{positionTitle}</div>
                <div>
                    <ul>
                        {taskList}
                    </ul>
                </div>
            </div>
        )
    }
}

export {ExperienceInstance};