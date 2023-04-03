import React from 'react'

export default function ImgBox({img}) {
	return (
		<div className="img-box">
			{
				img.map((e,i)=>(
					<img src={e.img} alt={e.name} key={i} />
				))
			}
		</div>
	)
}
