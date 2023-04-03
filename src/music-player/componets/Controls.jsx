import React from 'react'
import $ from 'jquery'

export default function Controls({music, dispatch,play,setPlay,count}) {
	return (
		<div className="controls">
				{/* prev button */}
      	<button onClick={()=>{
      	    dispatch({type: "-"}); 
      	    if(count <= 0 ){$(".img-box").css({transform: `translateX(-${music.length -1}00%)`})}
      	    else{$(".img-box").css({transform: `translateX(-${count -1}00%)`})}
      	}}><i className="bi bi-chevron-double-left"></i></button>
				{/* play and pause button */}
      	<button onClick={()=>setPlay(!play)}>{play ? <i className="bi bi-pause"></i> : <i className="bi bi-play-fill"></i>}</button>
				{/* next button */}
      	<button onClick={()=>{
      	    dispatch({type: "+"}); 
      	    if(count >= music.length -1 ){$(".img-box").css({transform: "translateX(0)"})}
      	    else{$(".img-box").css({transform: `translateX(-${count +1}00%)`})}
      	}}><i className="bi bi-chevron-double-right"></i></button>
  	</div>
	)
}
