import React,{useState,useEffect} from 'react'
import Verse from './Verse'

function VersesList() {
    const [verses,setVerses]= useState([])
    useEffect(()=>{
        fetch("https://intense-mesa-32821.herokuapp.com/quotes")
        .then((res)=>res.json())
        .then((data)=>setVerses(data))
    },[])

  return (
    <div>
{verses.map((verse)=><Verse verse={verse} key={verse.id}/>)}
    </div>
  )
}


export default VersesList