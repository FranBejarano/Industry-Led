import React, {useEffect, useState} from 'react';

const AddData = () => {

const url = "http://localhost:5000/api"

const [firstName, setFirstName] = useState({
    firstName: ""
});
const [lastName, setLastName] = useState({
    lastName: ""
});
const [email, setEmail] = useState({
    email: ""
});
const [address, setAddress] = useState({
    address: ""
});
const [randomData, setRandomData] = useState([]);

const postFirstName = (payload) => {

      return fetch(url + "/firstnames", {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
    }

const postLastName = (payload) => {

      return fetch(url + "/lastnames", {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
    }

const postEmail= (payload) => {

      return fetch(url + "/emails", {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
    }

const postAddress = (payload) => {

      return fetch(url + "/address", {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
    }

const handleFirstName = (event) => {
  let propertyName = event.target.name;
  let copiedFirstName= {...firstName}
  copiedFirstName[propertyName] = event.target.value;
  setFirstName(copiedFirstName)
  
}

const handleLastName = (event) => {
  let propertyName = event.target.name;
  let copiedLastName = {...lastName}
  copiedLastName[propertyName] = event.target.value;
  setLastName(copiedLastName)
}

const handleEmail = (event) => {
  let propertyName = event.target.name;
  let copiedEmail = {...email}
  copiedEmail[propertyName] = event.target.value;
  setEmail(copiedEmail)
}

const handleAddress = (event) => {
  let propertyName = event.target.name;
  let copiedAddress = {...address}
  copiedAddress[propertyName] = event.target.value;
  setAddress(copiedAddress)
}

const submitFirstName = (event) => {
   event.preventDefault();

        try{
            postFirstName(firstName);
            
        }catch(err){
            console.log(err.message)
        }
        setFirstName({
            firstName: ''
          });
    
}

const submitLastName = (event) => {
   event.preventDefault();

        try{
            postLastName(lastName); 
        }catch(err){
            console.log(err.message)
        }
        setLastName({
            lastName: ''
          });
}

const submitEmail = (event) => {
   event.preventDefault();

        try{
            postEmail(email); 
        }catch(err){
            console.log(err.message)
        }
        setEmail({
            email: ''
          });
}

const submitAddress = (event) => {
   event.preventDefault();

        try{
            postAddress(address); 
        }catch(err){
            console.log(err.message)
        }
        setAddress({
            address: ''
          });
}



    return (

        <div id="all-forms">
            
            <div id="form-div">
            <a href="/"><button id="btn-rem-data">Home</button></a>
            <form onSubmit={submitFirstName}>
            <label>First Name</label>
            <input type='text' name="firstName" onChange={handleFirstName} value={firstName.firstName} />
            <button id="btn-add-data-first" type="submit">Add</button>
            </form>
             <form onSubmit={submitLastName}>
            <label>Last Name</label>
            <input type='text' name="lastName" onChange={handleLastName} value={lastName.lastName} />
            <button id="btn-add-data-last" type="submit">Add</button>
            </form>
             <form onSubmit={submitEmail}>
            <label>Email</label>
            <input type='text' name="email" onChange={handleEmail} value={email.email} />
            <button id="btn-add-data-email" type="submit">Add</button>
            </form>
             <form onSubmit={submitAddress}>
            <label>Address</label>
            <input type='text' name="address" onChange={handleAddress} value={address.address} />
            <button id="btn-add-data-address" type="submit">Add</button>
            </form>
        </div>
        </div>
        
    )
  
}

export default AddData;