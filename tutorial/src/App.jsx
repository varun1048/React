import React from 'react'

import Author from "./mainConcepts/author"

function printf(inner){
  return inner.firstName + " \t" + inner.lastName
}
function printf2(inner){
  return inner
}

let name ={
  firstName : "varun",
  lastName : "m"
}

let info ={
  date : new Date(),
  name : "varun",
  book : "recat",
  detial :{
    page:120,
    color:'red'
  }
}

export default function App() {
  
  let reactCE = React.createElement('h5',{className:"test"},"testing")
  let element = (
  <div>

  <h3>props to objets</h3>    
    
    <Author  
      date    = {info.date} 
      name = {"varun"}
      book = {info.book}
      info = {info.detial}
    />



    <h2>props</h2>   
    { printf(name) } <br/>
    { printf2("props1") } <br/>
    { printf2("props2") }
    
    <h3>React.createElement</h3>
    {reactCE}


  </div>)
  return  element;

}

