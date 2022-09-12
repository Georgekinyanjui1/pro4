import React, { useState } from "react";
import VersesList from "./VersesList";

function Head() {
  const [isClicked, setIsClicked] = useState(true);
  const[newverse, setnewverse]=useState("")
  const[newquote,setnewquote]=useState("")
  function handlesubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/quotes",
    {
      method:"POST",headers:{"content-Type":"application/json"},
      body:JSON.stringify({
        verse:newverse,
        quote:newquote
      })

    }
    )
    setnewverse("")
    setnewquote("")
    e.target.reset()
  }
  return (
    <div className="head-cont">
      <h1>Introduction</h1>
      <p>
        The Bible begins with figurative (also called symbolic or mythic)
        accounts about how God created everything that exists. These are
        sometimes called “primeval” stories, meaning they are stories of things
        that happened before recorded history. The Creation accounts reveal that
        God’s creation was good, ordered, and harmonious, without sin or human
        death. The story of Adam and Eve’s disobedience teaches us that the sin
        of our first parents injured their relationship with God and with each
        other. This Original Sin is passed on to all human beings and makes it
        difficult for us to choose the good and to choose God. The stories of
        Cain and Abel, Noah and the Flood, and the Tower of Babel teach us that
        sin spreads and that without God’s help, sin leads to death and
        destruction. But despite the death and destruction, God has mercy on his
        creatures and begins a process of intervention to save us.
      </p>

      <div className="sub-head-cont">
        <img
          src="https://i.ytimg.com/vi/fPwf6ZZLXX4/maxresdefault.jpg"
          alt="img-one"
          height={500}
        />
        <div className="child-sub-cont">
          <button
            className="head-butt"
            onClick={() => setIsClicked(!isClicked)}
          >
            click to show or hide verses
          </button>
        </div>

        {isClicked ? <VersesList /> : null}
        <form onSubmit={handlesubmit}>
          <label>add a verse here</label>
          <input type="text" required onChange={(e)=>{setnewverse(e.target.value)}}></input>
          <label>add a quote here</label>
          <input type="text" required onChange={(e)=>{setnewquote(e.target.value)}}></input>
          <input type="submit" value="post"></input>
        </form>
      </div>
    </div>
  );
}

export default Head;

