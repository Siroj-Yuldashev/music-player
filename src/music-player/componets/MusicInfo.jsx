import React from 'react'
import { useState, useRef } from 'react';

export default function MusicInfo({music, count, setPlay}) {
	const {name, author} = music[count],
				[song, setSong] = useState(music[count]),
				[tme, setTme] = useState("0:00"),
				[lng, setLng] = useState("0:00"),
				audioEl =useRef(),
		onPlaying = ()=>{
			////   duration = qo'wiq vaqti time = ketayotgan vaqti 👇 
			const duration = audioEl.current.duration,
						time = audioEl.current.currentTime;
			// ///// qo'wiq vaqti va qo'wiq ketayotgan vaqti qo'wildi steytga👇 
			setSong({...song, progres: time / duration * 100, length: duration});
			//////////// tekwiriw qo'wiq vaqti va qo'wiq ketayotgan vaqti👇 
			duration % 60 < 10 ? setLng(`${Math.floor(duration /60)}:0${parseInt(duration % 60)}`): setLng(`${Math.floor(duration /60)}:${parseInt(duration % 60)}`);
			time % 60 < 10 ? setTme(`${Math.floor(time /60)}:0${parseInt(time % 60)}`) : setTme(`${Math.floor(time /60)}:${parseInt(time % 60)}`);
			/// 		qo'wiq tugawi
			if(time === duration){song.progres = 100; setPlay(false)};
		};
	return (
		<div className='music-info'>
			<audio src={music[count].music} ref={audioEl} onTimeUpdate={onPlaying} onLoadedData={onPlaying}/>
			<div className="center">
				<h2>{ name }</h2>
				<h4>{ author }</h4>
			</div>
			<div className="flex">
				<p>{ tme }</p>
				<p>{ lng }</p>
			</div>
			{/* awulani o'zgartiradigan input 👇 */}
			<input 
				type="range"
				style={{backgroundSize: `${song.progres}% 100%`}} 
				id="min" max={song.length} min="0"
				onChange={e=> audioEl.current.currentTime = e.target.value} 
				/>
		</div>
	)
}
