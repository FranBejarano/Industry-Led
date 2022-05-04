import React from 'react';

const Selections = ({handleVehicle, handleAge, handleSelect, handlePropertySubmit, value}) => {

   if (value === 'age') {
    return (
        <div id="selection-container">
        <label id="select-key-label">Select to Add key</label>
        <div id="select-key-drop">
        <select id="select-key-drop-basic" onChange={handleSelect}>
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
         <label id="select-additional-options">Select Age range</label>
         <div id="select-additional-drop">
         <select  id="select-key-drop-age" onChange={handleAge}>
          <option value=''>Please Select</option>
          <option  value='0-16'>0-16</option>
          <option  value='17-21'>17-21</option>
          <option  value='22-30'>22-30</option>
          <option  value='31-50'>31-50</option>
          <option value='51-71'>51-71</option>
          <option value='any'>Any Adult</option>
         </select>
         </div>
        
         <div id="btn-add-prop-div">
         <button id="btn-add-prop" onClick={handlePropertySubmit}>Add</button>
         </div>
        </div>
    )
   }

   else if (value === 'vehicle') {
    return (
        <div id="selection-container">
        <label id="select-key-label">Select to Add key</label>
        <div id="select-key-drop">
        <select id="select-key-drop-basic" onChange={handleSelect}>
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
         <label id="select-additional-options">Select Vehicle Type</label>
         <div id="select-additional-drop">
         <select id="select-key-drop-car" onChange={handleVehicle}>
          <option value=''>Please Select</option>
          <option  value='car'>Car</option>
          <option  value='van'>Van</option>
         </select>
         </div>
        
         <div id="btn-add-prop-div">
         <button id="btn-add-prop" onClick={handlePropertySubmit}>Add</button>
         </div>
        </div>
    )
   }

   else {
    return (
        <div id="selection-container">
        <label id="select-key-label">Select to Add key</label>
        <div id="select-key-drop-initial">
        <select  id="select-key-drop-basic" onChange={handleSelect}>
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
       
         <div id="btn-add-prop-div">
         <button id="btn-add-prop" onClick={handlePropertySubmit}>Add</button>
         </div>
        </div>
    )
   }

   
  
}

export default Selections;