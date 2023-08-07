import React,{useState} from 'react';
import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import "./style.css"; 
export default function Navbar() {
  const [active , Setactive] = useState('hidden') 
    const [Query,Setquery] = useState("")
  const navigate = useNavigate();

  const handleClick = ()=>{
    if (active == '') {
      Setactive('hidden')
    }
    else{
          Setactive('')
        }
  }
  const getquery = ()=>{
      navigate(`search/?t=${Query}`)

  }


  return (
   <header>
    
      <nav className="Navbar">
          <div className="logo">
              PicturePulse
          </div>
          <ul className="list">
              <li className="l-item">   <Link to="/">Home</Link> </li>
              <li className="l-item">   <Link to="/discover">Discover</Link> </li>
              <li className="l-item">   <Link to="/upcoming">Upcoming</Link> </li>
              <li className="l-item">   <Link to="/tv">Tv Shows</Link> </li>
          </ul>
        
           <div className={`search-query ${active}`}>
              <input type="text" name="" placeholder="Enter Movie Title Here "  onChange={e => Setquery(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && getquery()}/>
              <button onClick={getquery}> Search</button>
           </div>
         
          <div className="icons">
            

          <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-user"></i>
          </div>
      </nav>

</header>
  );
}