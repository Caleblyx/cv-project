import React, {Component} from 'react';

class AddWorkExperienceForm extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const{toggleForm} = this.props;
        return (
            <form className="education-form">
            <div className="education-form-name-date">
                <div>
                    <label for="company-name">Company Name:  </label>
                    <input name="company-name"></input>
                </div>
                <div>
                    <label for="date">Date:  </label>
                    <input type="date" name="date"></input>
                </div>
            </div>
            <div>
                <label for="job-title">Job Title:  </label>
                <input name="job-title"></input>
            </div>
            <div className="education-form-buttons">
                <button>Confirm</button>
                <button onClick= {e=>{e.preventDefault(); toggleForm();}}>Cancel</button>
            </div>
        </form>
        )
    }
}

export{AddWorkExperienceForm};