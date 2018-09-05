import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import './Projects.css';

class Projects extends Component {
	render(){
		return(
			<div className="bg">
				<nav className="navbar navbar-expand-md navbar-dark">
			      <p className="navbar-brand pl-4 pt-4" to="#">Projects List</p>
			      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			      </button>

			      <div className="collapse navbar-collapse" id="navbarsExample04">
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/">Home</Link>
			          </li>
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/about">About</Link>
			          </li>
			          <li className="nav-item active pr-lg-4">
			            <Link className="nav-link" to="/projects">Projects<span className="sr-only">(current)</span></Link>
			          </li>
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/contact">Contact</Link>
			          </li>
			        </ul>
			      </div>
			    </nav>

			    <div className="container card-list">
			    	<div className="row pt-5">
			    		<div className="col-md-6 col-lg-4 pb-3" style={{'minHeight':'400px'}}>
			    			<div className="card bg-dark text-white" style={{'width':'100%','minHeight':'400px'}}>
							  <img className="card-img-top" src="https://snag.gy/y3Sr4n.jpg" alt="project-ss"/>
							  <div className="card-body text-center">
							    <h5 className="card-title" style={{'color':'gold'}}>Smartbrain Web App</h5>
							    <p className="card-text">
							    Smartbrain is a web application built using React, Node, Express and PostgreSQL.<br/>
							    Smartbrain registers users to its database and lets them detect faces in their pictures using Clarifai API.<br/>
							    </p>
							    <a href="http://smartbrain-practice.herokuapp.com/" className="btn btn-primary" target="_blank">Preview</a>
							  </div>
							</div>
			    		</div>
			    		<div className="col-md-6 col-lg-4  pb-3" style={{'minHeight':'400px'}}>
			    			<div className="card bg-dark text-white" style={{'width':'100%','minHeight':'400px'}}>
							  <img className="card-img-top" src="https://snag.gy/y3Sr4n.jpg" alt="project-ss"/>
							  <div className="card-body text-center">
							    <h5 className="card-title" style={{'color':'gold'}}>Smartbrain Web App</h5>
							    <p className="card-text">
							    Smartbrain is a web application built using React, Node, Express and PostgreSQL.<br/>
							    Smartbrain registers users to its database and lets them detect faces in their pictures using Clarifai API.<br/>
							    </p>
							    <a href="http://smartbrain-practice.herokuapp.com/" className="btn btn-primary" target="_blank">Preview</a>
							  </div>
							</div>
			    		</div>
			    		<div className="col-md-6 col-lg-4 pb-3" style={{'minHeight':'400px'}}>
			    			<div className="card bg-dark text-white" style={{'width':'100%','minHeight':'400px'}}>
							  <img className="card-img-top" src="https://snag.gy/y3Sr4n.jpg" alt="project-ss"/>
							  <div className="card-body text-center">
							    <h5 className="card-title" style={{'color':'gold'}}>Smartbrain Web App</h5>
							    <p className="card-text">
							    Smartbrain is a web application built using React, Node, Express and PostgreSQL.<br/>
							    Smartbrain registers users to its database and lets them detect faces in their pictures using Clarifai API.<br/>
							    </p>
							    <a href="http://smartbrain-practice.herokuapp.com/" className="btn btn-primary" target="_blank">Preview</a>
							  </div>
							</div>
			    		</div>
			    	</div>
			    </div>

			    <div className='push-footer-down' style={{'height':'100px'}}></div>
			<Footer/>
			</div>
			
		);
	}
}

export default Projects;