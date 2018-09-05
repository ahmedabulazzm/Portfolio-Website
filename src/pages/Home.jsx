import React, { Component } from 'react';
import './Home.css';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

class Home extends Component {
	render(){
		return(
			<div className="bg">
				<nav className="navbar navbar-expand-md navbar-dark">
			      <p className="navbar-brand pl-4 pt-4">Portfolio | Homepage</p>
			      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			      </button>

			      <div className="collapse navbar-collapse" id="navbarsExample04">
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item active pr-lg-4">
			            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
			          </li>
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/about">About</Link>
			          </li>
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/projects">Projects</Link>
			          </li>
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/contact">Contact</Link>
			          </li>
			        </ul>
			      </div>
			    </nav>
	  			<div className="container">
					<img 
						className="avatar-img" 
						alt="avatar" 
				   		src="https://www.shareicon.net/data/2015/09/18/103160_man_512x512.png" 
					/>	
					<div className="banner-text">
						<h1>Full Stack Web Developer</h1>
						<hr/>
						<p>HTML/CSS | JavaScript | Bootstrap | React | Node.js | Express | PostgreSQL</p>
						<div className="social-links">

							{/*LinkedIn*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square" aria-hidden="true"/>
							</a>

							{/*GitHub*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github-square" aria-hidden="true"/>
							</a> 

						</div>
					</div>		  	
				<Footer/>
				</div>
			</div>
			
		);
	}
}

export default Home;