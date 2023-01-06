import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Api() {
const [bookdata,setData] = useState([])
const api = ()=>{
  axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
  .then(response => {
    console.log(response.data.books)
    setData(response.data.books)

  })
  .catch(error => {
    console.log(error)
   console.log('website not found',error)
  })



}

useEffect(()=>{
  api()
},[])

  return (
    <div style={{display:'flex',flexDirection:'column',textAling:'center'}} >
     {
      bookdata.map((item)=>{
       return <> <div >
        <h3 style={{}} >{item.title}</h3>
        <img style={{ marginLeft:"2vh",height:'30vh'}} src={item.imageLinks.thumbnail} alt="" />
        <p>{item.description}</p>
        <h4>{item.authors[0]}</h4>
        <hr />
        </div>
        
        </>
      })

     }
    </div>
  )
}

export default Api
