import React, {Component} from 'react';

class ExperienceInstance extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {companyName, positionTitle, mainTasks, dates} = this.props;
        const taskList = []

        mainTasks.forEach(task=>taskList.push(<li>{task}</li>))
        return(
            <div>
                <div className="experience-company-date">
                    <div className="experience-instance-name">{companyName}</div>
                    <div>{dates}</div>
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