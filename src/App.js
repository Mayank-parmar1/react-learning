import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs';
import React,{ useState } from 'react';
import  Alert  from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// }from "react-router-dom";



function App() {

  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        showalert(null)
      }, 3000);
  }


  const[Mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showalert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success");
      
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}

    {/* <Router> */}
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
     {/* <Routes>
      <Route path="/about" element={<AboutUs/>}>
      </Route>
         
      <Route path="/" element={<TextForm heading="Enter the text to analyze below" showalert={showalert} mode={Mode}/>}> */}
      <TextForm heading="Enter the text to analyze below" showalert={showalert} mode={Mode}/>
      {/* </Route>
     </Routes> */}

    {/* <AboutUs/> */}
    </div>
    {/* </Router> */}
    </> 
  );
}
export default App;