import React, { Component } from 'react';
import Data from './Data.json';

class Base extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blist: Data,
		};
	}
	display_details = event => {
		// console.log(event.target.id);
		this.state.blist.map(s => {
			var ele = document.getElementById('details');
			ele.style.display = 'block';
			if (s.id == event.target.id) {
				ele.innerHTML = `<h1>${s.name}</h1>`;
				ele.innerHTML += '<br>f';
				ele.innerHTML += `<img class='rounded sconst' src= ${s.photo} />`;
				ele.innerHTML += '<br></br>';
				ele.innerHTML += `${s.details}`;
				ele.innerHTML += '<br>';
				ele.innerHTML += `<p>Price: ${s.Price}</p>`;
				ele.innerHTML += `<p>Mentor: ${s.mentor}</p>`;
				ele.innerHTML += '<br></br>';
				ele.innerHTML += `<button class ='btmrght btn btn-outline-secondary' >Enroll</button>`;
			}
		});
	};
	dispblk = () => {
		var ele = (document.getElementById('details').style.display = 'none');
	};
	render() {
		return (
			<div>
				<div className='details' id='details'></div>
				<div className='topbar'>Welcome to Online Courses</div>
				<div className='cardparent' id='container'>
					{this.state.blist.map(s => {
						return (
							<div className='card'>
								{s.name}
								<br></br>
								<br></br>
								{s.duration}
								<br></br>
								{s.Price}
								<button
									id={s.id}
									onClick={this.display_details}
									onBlur={this.dispblk}
									type='button'
									className='btn btn-outline-secondary'>
									Details
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Base;
