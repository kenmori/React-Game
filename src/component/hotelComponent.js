/**
 * Created by No51 on 2016/08/10.
 */
import React from 'react';


export default class HotelComponent extends React.Component {
	render (){
		const home = {
			width: 50,
			height: 50,
			backgroundColor: 'red',
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginLeft: '-25px'
		}
		return (
			<div style={home}>hotel</div>
		)
	}
}