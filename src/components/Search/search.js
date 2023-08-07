import React, { useEffect,useState } from 'react';
import "./style.css"
import { useSearchParams } from 'react-router-dom'


export default function Main(props) {


	const [searchParams, setSearchParams] = useSearchParams(); 
	const [Movie ,SetMovie] = useState({}); 
	const [rating,SetRating] = useState(); 
	const[response,SetResponse] = useState(true); 
	console.log(searchParams.get('t'))
	useEffect(()=>{
		document.body.style.background = 'black';
		document.body.style.color = 'white';
		(async()=>{
			props.setProgress(0); 
			const data = await fetch(`https://www.omdbapi.com/?apikey=3ea0a73e&t=${searchParams.get('t')}`); 
			const alldata = await data.json(); 
			const responseee = await SetResponse(alldata.Response)
			SetMovie(alldata); 
			const rating =  await SetRating(alldata.Ratings)
			props.setProgress(100)
		})(); 
	},[])
	return(
		<>
		   {response=='True'  &&
						   <div>
				        		<div className="d-flex allth">
				  <div className="search-body">
				    

				      <div className="d-flex">
				            <p  className="pg">{Movie.Rated}</p>
				            <p className="lan">{Movie.Year}</p>


				      </div>
				      <div className="s-title">
				        
				        {Movie.Title}
				      </div>

				      <div className="box2">
				        
				        <p className="release">{Movie.Released}</p>
				        <p className="state">{Movie.Country}</p>

				      </div>

				      <div className="overview2">
				       {Movie.Plot}

				      </div>

				      <div className="genre">
				        

				        <p>{Movie.Genre}</p>
				        <p>{Movie.Runtime}</p>
				      </div>

				      <div className="actors">
				        
				        {Movie.Actors}
				      </div>

				  </div>

				  <div className="poster2">

				    <img src={Movie.Poster}/>
				    
				  </div>

				</div>

				<div className="ratings">
    
				    <div className="column">
				        <h5>{rating[0]?.Source}</h5>
				        <p>{rating[0]?.Value}</p>
				    </div>
				 <div className="column">
				        <h5>{rating[1]?.Source}</h5>
				        <p>{rating[1]?.Value}</p>
				    </div>
				     <div className="column">
				     <h5>{rating[2]?.Source}</h5>
				        <p>{rating[2]?.Value}</p>
				    </div>
				     <div clasNames="column">
				        <h5>ImdbRating</h5>
				        <p>{Movie.imdbRating}</p>
				    </div>
				 </div>

				<div className="all">
				  
				  <div className="column">
				    
				      <h5>Director : </h5>
				      <p>{Movie.Director} </p>
				  </div>
				   <div className="column">
				    
				      <h5> Writer : </h5>
				      <p>{Movie.Writer} </p>
				  </div>
				   <div className="column">
				    
				      <h5>BoxOffice : </h5>
				      <p>{Movie.BoxOffice} </p>
				  </div>
				   <div className="column">
				    
				      <h5>Awards : </h5>
				      <p>{Movie.Awards} </p>
				  </div>
				</div>
				</div>
      }
      {response=='False'  && <div className="Nor"> Not Found  </div>}

</>

		)

}