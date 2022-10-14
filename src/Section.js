
import React,{useState,useEffect} from 'react'


function Section() {
  const[input,setInput]=useState("")
  const[comments,setComments]=useState([])
  useEffect(()=>{
    fetch("https://aqueous-savannah-93824.herokuapp.com/comments")
    .then(res=>res.json())
    .then(data=>setComments(data))
  },[])
function handelInput(e){
  setInput(e.target.value)
}
function handleSubmit(e){
e.preventDefault()
const newComment={comment:input}
fetch("https://aqueous-savannah-93824.herokuapp.com/comments",{
  method:"POST",
  headers:{"content-Type":"application/json"},
  body:JSON.stringify(newComment)
})
setComments([...comments,newComment])

}
console.log(input)
  return (
    <div className='sect-cont'>
      <h1>The Word of God Is at Work in You</h1>
      <p>On Thursday afternoon I listened to Bud Burk’s sermon on prayer from last week. I was deeply moved. Christ went to Gethsemane and the cross so that I might be able to pray. Access to God in Jesus’s name was dearly bought.<br/>My assignment today is to do for the Bible what Bud did for prayer. Our custom in prayer week each year is to sandwich the week with a message on prayer and a message on the word of God. Because the two are so intimately related in the Bible and in Christian experience.</p>
      <ul>
        <li>The psalmist prays, “Incline my heart to your testimonies” (Psalm 119:36). He prays that he would want to read and meditate on God’s word. Prayer and the word.</li>
        <li>He prays, “Open my eyes, that I may behold wondrous things out of your law” (Psalm 119:18). He prays that he would see wonders in the Scripture. Prayer and the word.</li>
        <li>Paul says, “Take the sword of the Spirit, which is the word of God, praying at all times in the Spirit” (Ephesians 6:17–18). Take the word praying. Prayer and the word.</li>
        <li>He says, “Pray for us, that the word of the Lord may speed ahead and be honored” (2 Thessalonians 3:1). Pray that the word would break through and triumph. Prayer and the word.</li>
        <li>And the apostles said that they should “devote ourselves to prayer and to the ministry of the word” (Acts 6:4). Prayer and the word.</li>
      </ul>
      <div>
        <img src='https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg?cs=srgb&dl=pexels-olena-bohovyk-3806690.jpg&fm=jpg'alt='Pray'height={600} />
        <div>
            <h1>God has spoken.</h1>
            <p>Verse 13b: “You received the word of God, which you heard from us, you accepted it not as the word of men but as what it really is, the word of God.” So twice he calls his communication the “word of God.” This is not merely the word of man. Paul is speaking. But it is the word of God. God has spoken and is now speaking through Paul.<br/>We believe that God has spoken in history, and that by inspiration, the Bible is the authoritative deposit of that word for all time.</p>
        </div>
      </div>
      <h3>please comment on what you think about this information on the chat-box below </h3>
      <input type="text" className="input" onChange={handelInput}/>
      <button className='sect-butt'onClick={handleSubmit}>Submit</button>
      <h4>Comments</h4>
      <div className='input-cont'>
        {comments.map((comment)=><p>{comment.comment}</p>)}
       
      </div>
    </div>
  )
}

export default Section