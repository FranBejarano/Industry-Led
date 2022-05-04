import { CSVLink, CSVDownload } from "react-csv";
import React, {useState, useEffect} from 'react'

const Export = ({setError, clearObjectList, createObject, count, dataArray, object, handleCount}) => {

  const [csvDataAPI, setCSVDataAPI] = useState([]);
  const [csvData, setCSVData] = useState([]);
  const [csvDataToDelete, setCSVDataToDelete] = useState([]);
  const [wait, setWait] = useState(0);
  const url = "http://localhost:5000/api/csv/"

  useEffect(() => {
    for (let i = 0; i < csvDataToDelete.length; i++){
      if ('_id' in csvDataToDelete[i]){
        remove(csvDataToDelete[i]['_id'])
        setCSVDataToDelete([])
      } else {
        remove(csvDataToDelete[i]['id'])
        setCSVDataToDelete([])
      }
    }
  }, [csvDataToDelete])

// fetches data from the API and assign it to a state
const fetchData = () => {
  return fetch(url)
  .then(res => res.json())
  .then(data => setCSVDataAPI(data))
}

// posts the data to the API
const postUser = async (payload) => {

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });
  return await res.json();
}

// removes all data from API endpoint
const remove = (id) => {
  return fetch(url + id, {
    method: "DELETE",
    headers: {'Content-Type': 'application/json'}
    })
}

// loop added to remove multiple entries
const removeData = () => {
  

   for (let i = 0; i < csvDataAPI.length; i++){
     if ('_id' in csvDataAPI[i]){
       remove(csvDataAPI[i]['_id'])
     } else {
       remove(csvDataAPI[i]['id'])
     }
           
           
   }

 
}
  
// resets the state of the CSV data
const clearCSVData = () => {
    setCSVData([])
  }

  // for loop to add multiple entries to the API
  const pushToApi = () => {
    for (let i=0; i < dataArray.length; i++){
      postUser(dataArray[i])
      
    }
}

// sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// sorts the json into a formation that can be downloaded as CSV
const sortCSVData = () => {
  let keys = Object.keys(csvDataAPI[0])
  keys.shift()
  csvData.push(keys)
  keys = []
  for (let i = 0; i < csvDataAPI.length; i++ ){
    let values = Object.values(csvDataAPI[i])
    values.shift()
    csvData.push(values)
    values = []
  }
  
}
 
// creates the objects and pushes it to the API
const generateCSV = () => {

  if (count  > 0){
    for (let i =0; i < count; i++){
      createObject()
      if (Object.keys(object).length > 0) {
        dataArray.push(object)
        pushToApi()
        dataArray.shift()
        clearObjectList()
      } else (
        setError("Error: No properties selected")
      )
    }
  }
  else {
      setError("Error: No entries value specified")
    }
  }

  // runs create object function and pulls the new data from the API
  const getCSVData = () => {
    
    generateCSV()
    sleep(2000)
    fetchData()
  }
  
// tidies the data read for exporting to CSV
const arrangeCSV = () => {
  sortCSVData()
  setWait(1)

}

// clears all data from state 
const resetCSVData = async () => {
  setCSVDataToDelete(csvData)
  removeData()
  clearCSVData()
  setCSVDataToDelete(csvDataAPI)
  setCSVDataAPI([])
  let response = await fetch(url)
  let dataApi
  if (response.status === 200) {
    dataApi = await response.json()
    setCSVDataToDelete(dataApi)
  }
  setWait(0)
}



    
    
    if (wait > 0) {

      return (
        <div id="csv">
        <div>
        <label id="entries-label">Entries</label>
        <div>
        <input id="entries-input" type='number' value={count} onChange={handleCount} />
        </div>
        <br></br>
        <br></br>
        </div>
          <CSVLink data={csvData}><button id="btn-download-data">Download CSV</button></CSVLink>
          <br></br>
          <br></br>
          <div><button id="btn-resCSV-data" onClick={resetCSVData}>Reset CSV</button></div>
        </div>
      
    )

    }
    if (csvDataAPI.length > 0) {

      return (
        <div id="csv">
        <div>
        <label id="entries-label">Entries</label>
        <div>
        <input id="entries-input" type='number' value={count} onChange={handleCount} />
        </div>
        <br></br>
        <br></br>
        </div>
          <div><button id="btn-arr-data" onClick={arrangeCSV}>Arrange CSV</button></div>
          <br></br>
          <br></br>
          <div><button id="btn-resCSV-data" onClick={resetCSVData}>Reset CSV</button></div>
        </div>
        
      
    )

    }
    
    else {
      return (
        <div id="csv">
        <div>
        <label id="entries-label">Entries</label>
        <div>
        <input id="entries-input" type='number' value={count} onChange={handleCount} />
        </div>
        <br></br>
        <br></br>
        </div>
          <div><button id="btn-get-data" onClick={getCSVData}>Generate CSV</button></div>
          <br></br>
          <br></br>
          <div><button id="btn-resCSV-data" onClick={resetCSVData}>Reset CSV</button></div>
          
        </div>
      
    )
    }

  } 
      
  


export default Export;

