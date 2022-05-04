
import React, {useDebugValue, useEffect, useState} from 'react'
import '../App.css';
import CustomKey from './CustomKey'
import Export from './Export';
import ObjectData from './ObjectData';
import Selections from './Selections';



const Data = ({firstNames, lastNames, emails, addressList, cars, vans, languages, phoneNumbers, error, setError}) => {

  const [dataArray, setDataArray] = useState([]);
  const [data, setData] = useState([]);
  const [dataToDelete, setDataToDelete] = useState([]);
  const [count, setCount] = useState("");
  const [objectList, setObjectList] = useState([]);
  const [value, setValue] = useState("");
  const [customKey, setCustomKey] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [customValueList, setCustomValueList] = useState([]);
  const [customKeyList, setCustomKeyList] = useState([]);
  const [object, setObject] = useState({})
  const [ageRange, setAgeRange] = useState("")
  const [vehicle, setVehicle] = useState("");


  
  let randomFirstName = ""
  let randomLastName = ""
  let randomEmail = ""
  let randomAge = ""
  let randomAddress = ""
  let randomFullName = ""
  let randomVehicle = ""
  let randomYesNo = ""
  let randomLanguage = ""
  let randomPhoneNumber = ""

  
  

//  assign the age range once selected from dropdown
  const handleAge = (event) => {
    setAgeRange(event.target.value)
  }

  // sets vehicle type once selected from dropdown
  const handleVehicle = (event) => {
    setVehicle(event.target.value)
  }

  

  // assign entries value
  const handleCount = (event) => {
   setCount(event.target.value)
    
  }

  // adds the key from custom dropdown
  const handleCustomKey = (event) => {
    setCustomKey(event.target.value)
    
  }

  // value entered by user for a custom property
  const handleCustomValue = (event) => {
    setCustomValue({value: event.target.value})
    
  }

  // resets dropdown back to default state after submitted
  function Reset(id) {
    let dropDown = document.getElementById(id);
    dropDown.selectedIndex = 0;
}

  
// adds the customer key and value to the relevant arrays, clears values after
  const handleCustomKeySubmit = () => {
    if (customKey == "" || customValue === ""){
      setError("Error: Custom key and value must be specified")
    }
    else if (customValue.value == "age" && ageRange === "" ){
      setError("Error: Custom key and value must be specified")
    }
    else if (customValue.value == "vehicle" && vehicle === "" ){
      setError("Error: Custom key and value must be specified")
    }
    else{
      customValueList.push(customValue.value)
      customKeyList.push(customKey)
    }
    setCustomValue({value: ""});
    setCustomKey("");
    Reset("value-select-custom")
     
    
  }



  

 // generates random int ip to certain value
  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
  }

  // generates rounded random int between to values
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomNumberSpecificLength() {
    return Math.floor(Math.floor(100000 + Math.random() * 900000));
}


 // creates first name 
  const createfirstName = () => {
    
    const ranIntFirstName = getRandomInt(firstNames.length)

    const randomFirstName = firstNames[ranIntFirstName].firstName

    return randomFirstName
  }

  // creates last name 
  const createLastName = () => {
    const ranIntLastName = getRandomInt(lastNames.length)

    const randomLastName = lastNames[ranIntLastName].lastName

    return randomLastName
  }

  // create address
  const createAddress = () => {
    const ranIntAddress = getRandomInt(addressList.length)

    const randomAddress = addressList[ranIntAddress].address
  
    return randomAddress
  }

  // creates full name based on firstName + lastName
  const createFullName = () => {
   
  return randomFirstName + " " + randomLastName
    
  }

  // creates email address based on firstName + lastName
  const createEmail = (firstName, lastName) => {
    const ranInt = getRandomInt(emails.length)
      
    const email = firstName.toLowerCase() + lastName.toLowerCase()  + emails[ranInt].email

    return email
  }

  // creates age dependant on range
  const createAge = () => {
    if (ageRange === '0-16'){
      const randomAge = getRandomArbitrary(0, 16)
      return randomAge
    }
    if (ageRange === '17-21'){
      const randomAge = getRandomArbitrary(17, 21)
      return randomAge
    }
    if (ageRange === '22-30'){
      const randomAge = getRandomArbitrary(22, 30)
      return randomAge
    }
    if (ageRange === '31-50'){
      const randomAge = getRandomArbitrary(31, 50)
      return randomAge
    }
    if (ageRange === '51-71'){
      const randomAge = getRandomArbitrary(51, 70)
      return randomAge
    }

    if (ageRange === 'any'){
      const randomAge = getRandomArbitrary(18, 86)
      return randomAge
    }
  }

// assigns random vehicle dependant on vehicle selection
  const createVehicle = () => {
    

    if (vehicle === 'car'){
      const randomInt = getRandomInt(cars.length)
      randomVehicle = (cars[randomInt].car)

      return randomVehicle
    }

    if (vehicle === 'van'){
      const randomInt = getRandomInt(vans.length)
      randomVehicle = (vans[randomInt].van)

      return randomVehicle
    }

  }

    // sets yes/no
  const createYesNo = () => {
      const answers =  ['Yes','No']
      const randomInt = getRandomInt(answers.length)
      randomYesNo = answers[randomInt]
      
      return randomYesNo
    }

    // assigns random language
  const createLanguage = () => {
    const randomInt = getRandomInt(languages.length)
    randomLanguage = (languages[randomInt].language)

    return randomLanguage
  } 

  // generates random phone number based on selected area code from api - 11 digits
  const createPhoneNumber = () => {
    
    const randomInt = getRandomInt(phoneNumbers.length)
    let randomNumber = (phoneNumbers[randomInt].phoneNo)
    let randomLongInt = getRandomNumberSpecificLength()

    if (randomNumber.length === 4){
      let number = getRandomInt(9)
      randomPhoneNumber = randomNumber + randomLongInt + number
     
    } 
    if (randomNumber.length === 3){
      let number1 = getRandomInt(9)
      let number2 = getRandomInt(9)
      randomPhoneNumber = randomNumber + randomLongInt + number1 +number2
     
    } 

    else {
      randomPhoneNumber = randomNumber + randomLongInt 
    }

    return randomPhoneNumber
}



  // creates object 
  const createObject = () => {
    // get first name
    randomFirstName = createfirstName()
    
    //get last name
    randomLastName = createLastName()
    
    //get full name
    randomFullName = createFullName()
    
    // get email
    randomEmail = createEmail(randomFirstName, randomLastName)
    
    // get age
    randomAge = Math.round(createAge())
    
    // get address
    randomAddress = createAddress()

    // get vehicle
    randomVehicle = createVehicle()

    // get answer
    randomYesNo = createYesNo()

    // get language
    randomLanguage = createLanguage()

    // get phone number
    randomPhoneNumber = createPhoneNumber()
    
    
      
    for (let i = 0; i < objectList.length; i++){
      if ( objectList[i] === 'firstName'){
        object[objectList[i]] = randomFirstName
        
      }

      if ( objectList[i] === 'lastName'){
        object[objectList[i]] = randomLastName
        
      }

      if ( objectList[i] === 'email'){
        object[objectList[i]] = randomEmail
       
      }

      if ( objectList[i] === 'age'){
        object[objectList[i]] = randomAge
        
      }

      if ( objectList[i] === 'address'){
        object[objectList[i]] = randomAddress
        
      }

      if ( objectList[i] === 'name'){
        object[objectList[i]] = randomFullName
        
      }

      if ( objectList[i] === 'vehicle'){
        object[objectList[i]] = randomVehicle
       
      }

      if ( objectList[i] === 'yes/no'){
        object[objectList[i]] = randomYesNo
       
      }

      if ( objectList[i] === 'language'){
        object[objectList[i]] = randomLanguage
       
      }

      if ( objectList[i] === 'phoneNo'){
        object[objectList[i]] = randomPhoneNumber
       
      }
    }

    for (let i = 0; i < customValueList.length; i++){
      if ( customValueList[i] === 'firstName'){
        object[customKeyList[i]] = randomFirstName
       
      }

      if ( customValueList[i] === 'lastName'){
        object[customKeyList[i]] = randomLastName
        
      }
  
      if ( customValueList[i] === 'email'){
        object[customKeyList[i]] = randomEmail
        
      }
  
      if ( customValueList[i] === 'age'){
        object[customKeyList[i]] = randomAge
        
      }
  
      if ( customValueList[i] === 'address'){
        object[customKeyList[i]] = randomAddress
       
      }
  
      if ( customValueList[i] === 'fullName'){
        object[customKeyList[i]] = randomFullName
       
      }

      if ( customValueList[i] === 'vehicle'){
        object[customKeyList[i]] = randomVehicle
        
      }

      if ( customValueList[i] === 'yes/no'){
        object[customKeyList[i]] = randomYesNo
        
      }

      if ( customValueList[i] === 'language'){
        object[customKeyList[i]] = randomLanguage
        
      }

      if ( customValueList[i] === 'phoneNo'){
        object[customKeyList[i]] = randomPhoneNumber
        
      }
     }


  
    

    
  }

  //  sets the value of the default selection dropdown
  const handleSelect = (event) => {
    setValue(event.target.value)
  }

  // adds the property to the object 
  const handlePropertySubmit = () => {

    if (value === 'age' && ageRange === "" || value === 'vehicle' && vehicle === ""){
        setError("Error: Category 2 not specified")
        setValue('0')
        Reset("select-key-drop-basic")  
    } else if (value === ''){
      setError("Error: Category 1 not specified")
    } else {
      objectList.push(value)
      setValue('0')
      Reset("select-key-drop-basic")
      setError("")  
    }
}

// resets all data once your object had been built and pushed to the API
  const clearObjectList = () => {
    setObjectList([])
    setCustomValueList([])
    setCustomKeyList([])
    setCustomKey("")
    setObject({})
    setValue('')
    setDataArray([])
    randomFirstName = ""
    randomLastName = ""
    randomEmail = ""
    randomAge = ""
    randomAddress = ""
    randomFullName = ""
    randomVehicle = ""
    randomYesNo = ""
    randomLanguage = ""
    randomPhoneNumber = ""
    
    
  }

  



  if (firstNames.length > 0){
    return (
      <div className='main-box'>
        
        <div className='App'>
          <div>
          <Selections handleVehicle={handleVehicle} handleAge={handleAge} value={value} handleSelect={handleSelect} handlePropertySubmit={handlePropertySubmit}/>
          </div>
          <div>
          <CustomKey vehicle={vehicle} handleVehicle={handleVehicle} customValue={customValue} handleAge={handleAge} customKey={customKey} handleCustomKey={handleCustomKey} handleCustomValue={handleCustomValue} handleCustomKeySubmit={handleCustomKeySubmit} />
          </div>
          <div>
          <ObjectData clearObjectList={clearObjectList} objectList={objectList} customKeyList={customKeyList} />
          </div>
          <div>
          <Export handleCount={handleCount} setError={setError} clearObjectList={clearObjectList} count={count} createObject={createObject} dataArray={dataArray}  object={object}/>
          </div>
          </div>
          </div>
       
        
    )
  } else {
    return (
    <div className='main-box'>
    <p>Loading...</p>
    <div className='App'>
    </div>
    </div>
    )
  }
  

  
}

export default Data
