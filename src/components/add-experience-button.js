import React, {Component} from 'react';

class AddExperienceButton extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {buttonType, toggleForm} = this.props;
        return(
            <div className="add-experience-button" onClick={toggleForm}>Add {buttonType} Experience</div>
        );
    }
}

export{AddExperienceButton};