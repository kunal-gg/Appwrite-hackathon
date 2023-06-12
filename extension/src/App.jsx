 /*global chrome*/
import { useState } from "react"


function App() {

  const [timeStamp, setTimeStamp ] = useState(null);

  const updateTimeStamp = (e) => {
    setTimeStamp(e.target.value);
    console.log(timeStamp);
  }

  const findOnline = () => {
    if(timeStamp == null){
      alert("enter timestamp")
      return;
    }
    console.log("this passed the check");
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url
      console.log(url);
      // send a post request to the frontend for doing the following changes
      // frontend.vercell.app
      
    })
  }

  return (
    <main className='bg-white h-96 w-60 flex justify-center items-center'>
      <section className="w-10/12 flex flex-col items-center">
        <h1 className="text-center text-lg text-gray-700">Product Name</h1>
        <input type="text"  className="m-auto px-3 py-2 rounded-xl bg-gray-500 my-3" onChange={updateTimeStamp} placeholder="Video Timestamp" />
        <div className="flex flex-row w-full justify-between">
          <button className="text-white bg-blue-400 rounded-lg text-md px-3 py-2" onClick={findOnline} >Find Online</button>
          <button className="text-white bg-blue-400 rounded-lg text-md px-3 py-2">Use Snip Tool</button>
        </div>
      </section>
    </main>
  )
}

export default App
