 /*global chrome*/
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
 import { useState } from 'react'
 import axios from 'axios'

 function App() {
   const [url, setUrl] = useState(null);
   
   const getCurrentTabUrl = () => {
     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
       let url = tabs[0].url;
       console.log(url);
       url != undefined ? setUrl(url) : setUrl("not working");
     });}
 
   async function getVideoLink() {
     const API_KEY = 'AIzaSyANwbxkCRYL8rPDHskTlh0-j2qX3t3VoXs'
     const videoId = new URL(url).searchParams.get('v');
     const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;
   
     const response = await axios.get(apiUrl);
     const videoLink = response.data.items[0].snippet.thumbnails.default.url;
     console.log(videoLink);
   }
 
    return (
     <>
       <div>
         <a href="https://vitejs.dev">
           <img src={viteLogo} className="logo" alt="Vite logo" />
         </a>
         <a href="https://react.dev">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
       </div>
       <h1>Vite + React</h1>
       <div className="card">
         <button onClick={getCurrentTabUrl}>tab is {url}
         </button>
         <p>
           Edit <code>src/App.tsx</code> is this working; 
         </p>
         <button onClick={getVideoLink}>Get the video URL</button>
       </div>
       <p className="read-the-docs">
         Click on the Vite and React logos to learn more
       </p>
     </>
   )
 }
 
 export default App
 