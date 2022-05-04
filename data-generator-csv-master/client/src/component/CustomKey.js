import React from 'react';

const CustomKey = ({vehicle, handleVehicle, customValue, handleAge, customKey, handleCustomKey, handleCustomValue, handleCustomKeySubmit}) => {
    const handleKeyDown = e => {
        if (e.key === '"' || e.key === ':') {
          e.preventDefault();
        }
    };

    return (
        <div id="custom-container">
            <label id="custom-label">Custom Key</label>
            <input id="custom-input" type='text' value={customKey} onChange={handleCustomKey} onKeyDown={handleKeyDown} />
            <label>Select Value</label>
            <div id="value-select">
                <select  id="value-select-custom" onChange={handleCustomValue}>
                    <option value=''>Please Select</option>
                    <option  value='firstName'>First Name</option>
                    <option  value='lastName'>Last Name</option>
                    <option  value='email'>Email</option>
                    <option  value='age'>Age</option>
                    <option value='address'>Address</option>
                    <option value='name'>Full Name</option>
                    <option value='vehicle'>Vehicle</option>
                    <option value='yes/no'>Yes/No</option>
                    <option value='language'>Language</option>
                    <option value='phoneNo'>Phone No</option>
                </select>
            </div>
            {customValue.value === "age" && 
            <div>
            <label id="select-additional-options-custom">Select Age range</label>
            <div id="select-additional-drop-custom">
            <select  id="select-key-drop-age-custom" onChange={handleAge}>
                <option value=''>Please Select</option>
                <option  value='0-16'>0-16</option>
                <option  value='17-21'>17-21</option>
                <option  value='22-30'>22-30</option>
                <option  value='31-50'>31-50</option>
                <option value='51-71'>51-71</option>
                <option value='any'>Any Adult</option>
            </select>
            </div>
            </div>}
            {customValue.value === "vehicle" && 
            <div>
            <label id="select-additional-options-custom">Select Vehicle Type</label>
                <div id="select-additional-drop-custom">
                    <select id="select-key-drop-car-custom" onChange={handleVehicle}>
                        <option value=''>Please Select</option>
                        <option  value='car'>Car</option>
                        <option  value='van'>Van</option>
                    </select>
                </div>
                </div>}
            <div id="btn-add-prop-div">
                <button id="btn-add-custom" onClick={handleCustomKeySubmit}>Add</button>
            </div>
        </div>
    )
}

export default CustomKey;