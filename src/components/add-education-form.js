import React, {Component} from 'react';

class AddEducationForm extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {toggleForm, handleEducationCourseNameChange, handleEducationStartDateChange, handleEducationEndDateChange, handleEducationInstitutionNameChange, onSubmitEducation} = this.props;
        return (
            <form onSubmit={onSubmitEducation} className="education-form">
                <div className="education-form-name-date">
                    <div className="form-column">
                        <div>
                            <label htmlFor="institute-name">Institution Name:  </label>
                            <input onChange={handleEducationInstitutionNameChange} name="institute-name"></input>
                        </div>
                        <div>
                            <label htmlFor="course-name">Course Name:  </label>
                            <input onChange={handleEducationCourseNameChange} name="course-name"></input>
                         </div>
                    </div>
                    <div className = "form-column">
                        <div>
                            <label htmlFor="Start date">Start date:  </label>
                            <input onChange={handleEducationStartDateChange} type="date" name="Start date"></input>
                        </div>
                        <div>
                            <label htmlFor="End date">End date: </label>
                            <input onChange={handleEducationEndDateChange} type="date" name="End date"></input>
                        </div>
                    </div>
                </div>
                <div className="education-form-buttons">
                    <button type="submit">Confirm</button>
                    <button onClick= {e=>{e.preventDefault(); toggleForm();}}> Cancel</button>
                </div>
            </form>
        )
    }
}

export {AddEducationForm};