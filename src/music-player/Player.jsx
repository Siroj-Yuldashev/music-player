import React, { useReducer, useState, useEffect } from 'react'
import './style.scss'
import { music } from './music/music'
import ImgBox from './componets/ImgBox'
import MusicInfo from './componets/MusicInfo'
import Controls from './componets/Controls'
export default function Player() {
    const reducer = (count,as)=>{
        switch(as.type){
            case "+": if(count >= music.length -1 ){return count = 0 }
                        else {return count + 1;};
            case "-": if(count <= 0){return count = music.length - 1}
                        else {return count - 1;};
            default : return count;
        }
    }   
    const [count, dispatch] = useReducer(reducer, 0),
    			[play, setPlay] = useState(false);

		useEffect(() => {
			play ? document.querySelector("audio").play() : document.querySelector("audio").pause();
		}, [play,count])
		
  return (
    <>
        <div className="content">
            <div className="box">
                <div className="slider">
                    <ImgBox img={music} />
                </div>
								{/* awula vaqti otqizadigan input 👇 */}
								<MusicInfo music={music} count={count} setPlay={setPlay} />
								{/* knopkalar 👇  */}
                <Controls count={count} dispatch={dispatch} play={play} setPlay={setPlay} music={music}/>
            </div>
        </div>
    </>
  )
}
