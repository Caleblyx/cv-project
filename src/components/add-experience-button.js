import React, {Component} from 'react';

const AddExperienceButton = ({
    buttonType, 
    toggleForm
}) => {
    return(
        <div className="add-experience-button" onClick={toggleForm}>Add {buttonType} Experience</div>
    );
}

export{AddExperienceButton};