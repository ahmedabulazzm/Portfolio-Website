import React, { Component } from 'react';
import './About.css';
import Footer from '../components/Footer.jsx';
/*import Jumbotron from '../components/Jumbotron.jsx';*/
import { Link } from 'react-router-dom';

class About extends Component {
	render(){
		return(
			<div className="bg">
				<nav className="navbar navbar-expand-md navbar-dark pt-4">
			      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			      </button>

			      <div className="collapse navbar-collapse" id="navbarsExample04">
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item pr-lg-4">
			            <Link className="nav-link" to="/">Home</Link>
			          </li>
			          <li className="nav-item active pr-lg-4">
			            <Link className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
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
			    <div className="container intro" style={{'height': '150px'}}>
			    	<h1>About <span className="golden">Me</span></h1>
			    	<p className="pl-4">Let me tell you a few things..</p>
			    </div>
			    <div className="container-fluid bio">
			    	<div className="row">
			    		<div className="col-md-4">
			    			<img 
							className="avatar-img img-fluid" 
							alt="personal-img" 
					   		src="https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/23795759_10210620932299849_6553171859799956116_n.jpg?_nc_cat=0&oh=6e022132f05ef30a6827a36f0c8beea5&oe=5BEEAFAA" 
							/>
			    		</div>
			    		<div className="col-md-8 bio">
			    			<h2 className="golden text-center pt-md-5">BIO</h2>
			    			<p className="pl-md-3 text-center" style={{'color': 'white', 'fontSize': '20px'}}>
			    				My name is Ahmed Sherif El Sayed Abulazm.<br/>
			    				I'm an aspiring Full Stack Web Developer from 6 October, Egypt.<br/><br/>
			    				Excellent knowledge in:<br/> HTML | CSS | JavaScript | Bootstrap | ReactJS | Node.js | Express | PostgreSQL<br/><br/>
								Decent knowledge in: Java | C# | C++<br/><br/>
								<span className="golden">Fluent in:</span><br/>
								- Arabic<br/>
								- English<br/><br/>
								<span className="golden">Education:</span><br/>
								Misr University For Science and Technology<br/>
								Major: Computer Science<br/>
								Class of 2018<br/>
							</p>
			    		</div>
			    	</div>
			    </div>
			<Footer/>
			</div>
			
		);
	}
}

export default About;