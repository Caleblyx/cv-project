import React, {Component} from 'react';

class AddEducationForm extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {toggleForm} = this.props;
        return (
            <form className="education-form">
                <div className="education-form-name-date">
                    <div>
                        <label for="institute-name">Institution Name:  </label>
                        <input name="institute-name"></input>
                    </div>
                    <div>
                        <label for="date">Date:  </label>
                        <input type="date" name="date"></input>
                    </div>
                </div>
                <div>
                    <label for="course-name">Course Name:  </label>
                    <input name="course-name"></input>
                </div>
                <div className="education-form-buttons">
                    <button>Confirm</button>
                    <button onClick= {e=>{e.preventDefault(); toggleForm();}}> Cancel</button>
                </div>
            </form>
        )
    }
}

export {AddEducationForm};