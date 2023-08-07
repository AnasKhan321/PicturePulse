import "./style.css"
import React, { useContext,useEffect,useState } from 'react';
import { PageContext } from 'C:\\React-Js\\PicturePulse\\picture\\src\\ContextApi\\Provider';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Main(props) {
	const [listt,setList] = useState([])
	const { user,fetchData,data,setBg,bg } = useContext(PageContext);
	const [Query,Setquery] = useState("")
	const [page,Setpage] = useState(props.number); 
	const [results,SetResult] = useState(0); 
	const navigate = useNavigate();

	useEffect(()=>{
		(async()=>{
			props.setProgress(0)
			const Movies = await fetchData(props.number,props.type); 
			let a = await setList(Movies.results)
			let b =  await SetResult(Movies.total_results)
			const randomNumber =Math.floor(Math.random() * 19); 
			setBg(Movies.results[randomNumber].poster_path)
			props.setProgress(100)
			Setpage(props.number)
		})(); 
	},[])


	const getquery = ()=>{
			navigate(`search/?t=${Query}`)
			console.log(Query)
	}

	const FetchNextData = async()=>{
		setTimeout(async() => {const Movies = await fetchData(page+1,props.type); 
			Setpage(page+1);
			setList(listt.concat(Movies.results));
			 }, 3000)
			 

	}


	return(

		<>
		<div className="poster">
		  
		  <img src={`https://image.tmdb.org/t/p/original${bg}`}/>
		</div>

		{props.home=='true' &&  	<div className="center">
		  
		    <h1>Welcome to PicturePulse </h1>

		    <p>Welcome to Cinema Update, your go-to movie update site! Here, we keep cinephiles and casual moviegoers alike in the loop with the latest and most exciting developments in the world of cinema. Whether you're craving updates on highly anticipated blockbusters, indie gems, or thought-provoking documentaries, our comprehensive and user-friendly platform has you covered.</p>
		    <div className="search">
		      <input type="text" name="" placeholder="Enter your Film Name Here ....."onChange={e => Setquery(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && getquery()}/>
		      <button onClick={getquery}>Search</button>
		    </div>
		</div>
}
	
		<div className="trending">
		  <div className="box">
		    

		  </div>
		</div>
		<div className="trending-page">
  

		  <h2 className="white">{props.a}</h2>
		  <hr/>
		  <div className="container">
		  
		    <div className="all-movies">
		      <InfiniteScroll
			      dataLength={listt.length}
			      next={FetchNextData}
			      hasMore={listt.length!==results} // Replace with a condition based on your data source
			      loader={<img  src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" style={{ display: "block",
    margin:" 0 auto" , width:"10vw"}}/>}
			      endMessage={<p>No more data to load.</p>}
    				>
		    	{listt.map((element,index)=>   <div className="card" key={element?.id}>

		 			 <img src={ element?.poster_path?`https://image.tmdb.org/t/p/original${element.poster_path}`:"https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"}/>
		             <div className="card-body">
			            <h3 className="original-title">{element?.title}</h3>
			            <p className="date">  {element?.release_date}</p>
			            <p className="overview"> {element?.overview}  .</p>
			            <p className="popularity bold"> Popularity : {element?.popularity} </p>
		            </div>
		            </div>
		           

		        )}
		        </InfiniteScroll>
		       
		     </div>

		   </div>

		</div>

		</>

		)


}