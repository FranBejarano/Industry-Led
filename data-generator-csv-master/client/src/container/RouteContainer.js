import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Helmet } from 'react-helmet';
import Data from '../component/Data'


const RouteContainer = ({error, setError}) => {

const [firstNames, setFirstNames] = useState([]);
const [lastNames, setLastNames] = useState([]);
const [emails, setEmails] = useState([]);
const [addressList, setAddressList] = useState([]);
const [cars, setCars] = useState([]);
const [vans, setVans] = useState([]);
const [languages, setLanguages] = useState([]);
const [phoneNumbers, setPhoneNumbers] = useState([]);

const url = "http://localhost:5000/api/"

const requestAll = () => {
  fetch(url + "firstnames")
      .then(res => res.json())
      .then(data => setFirstNames(data))
  
  fetch(url + "lastnames")
      .then(res => res.json())
      .then(data => setLastNames(data))
  
  fetch(url + "emails")
      .then(res => res.json())
      .then(data => setEmails(data))

  fetch(url + "address")
      .then(res => res.json())
      .then(data => setAddressList(data))
  
  fetch(url + "cars")
      .then(res => res.json())
      .then(data => setCars(data))

  fetch(url + "vans")
      .then(res => res.json())
      .then(data => setVans(data))

  fetch(url + "languages")
      .then(res => res.json())
      .then(data => setLanguages(data))

  fetch(url + "phonenumbers")
      .then(res => res.json())
      .then(data => setPhoneNumbers(data))
  
}




useEffect(()=>{
  requestAll()
}, [])

  

   

  const TITLE = 'Assure TDG'
  
      return (
      <BrowserRouter>
      <Helmet>
      <title>{ TITLE }</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Data firstNames={firstNames} lastNames={lastNames} emails={emails} addressList={addressList} cars={cars} vans={vans} languages={languages} phoneNumbers={phoneNumbers} error={error} setError={setError} />} />
    </Routes>
      </BrowserRouter>

        )
  }
  
  export default RouteContainer;