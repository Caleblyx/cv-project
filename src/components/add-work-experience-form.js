import React, {Component} from 'react';

class AddWorkExperienceForm extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const{toggleForm, handleWorkCompanyNameChange, handleWorkPositionTitleChange, handleWorkStartDateChange, handleWorkEndDateChange, onSubmitExperience} = this.props;
        const taskList = []
        return (
            <form onSubmit={onSubmitExperience} className="education-form">
            <div className="education-form-name-date">
                <div>
                    <div>
                        <label for="company-name">Company Name:  </label>
                        <input onChange={handleWorkCompanyNameChange} name="company-name"></input>
                    </div>
                    <div>
                        <label for="job-title">Job Title:  </label>
                        <input onChange={handleWorkPositionTitleChange} name="job-title"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="Start date">Start date:  </label>
                        <input onChange={handleWorkStartDateChange} type="date" name="Start date"></input>
                    </div>
                    <div>
                        <label for="End date">End date: </label>
                        <input onChange={handleWorkEndDateChange} type="date" name="End date"></input>
                    </div>
                </div>
            </div>
            <div>
            <div>
            </div>
            </div>
            <div className="education-form-buttons">
                <button type='submit'>Confirm</button>
                <button onClick= {e=>{e.preventDefault(); toggleForm();}}>Cancel</button>
            </div>
        </form>
        )
    }
}

export{AddWorkExperienceForm};