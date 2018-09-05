import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
	render(){
		return(
			<div className="bg">
				<nav className="navbar navbar-expand-md navbar-dark">
			      <p className="navbar-brand pl-4 pt-4" to="#">Contact Information</p>
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
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/projects">Projects</Link>
			          </li>
			          <li className="nav-item active pr-lg-4">
			            <Link className="nav-link" to="/contact">Contact<span className="sr-only">(current)</span></Link>
			          </li>
			        </ul>
			      </div>
			    </nav>
	  			<section id="contact ">
			       <div className="container">
			           <div className="row justify-content-center pt-5">
			             <div className="col-sm-12 col-md-6 col-lg-3 my-5">
			               <div className="card border-0">
			                  <div className="card-body text-center">
			                    <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
			                    <h4 className="text-uppercase mb-5">call me</h4>
			                    <p>0106 88 00 370</p>
			                  </div>
			                </div>
			             </div>
			             <div className="col-sm-12 col-md-6 col-lg-3 my-5">
			               <div className="card border-0">
			                  <div className="card-body text-center">
			                    <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
			                    <h4 className="text-uppercase mb-5">email</h4>
			                    <p>ahmed.abulazm1@gmail.com</p>
			                  </div>
			                </div>
			             </div>
			           </div>
			           <div className="row">
			           	<div className="col" style={{'height': '150px'}}></div>
			           </div>
			       </div>
			    </section>
			<Footer/>
			</div>
			
		);
	}
}

export default Contact;