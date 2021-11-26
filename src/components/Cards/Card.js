  import React from "react";
  import './Card.css'
  import {
    Link
  } from "react-router-dom";
  
  class CardHeader extends React.Component {
    render() {
      var style = { 
          backgroundImage: 'url(' + this.props.image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title"> </h4>
        </header>
      )
    }
  }
  
  
  class Card extends React.Component {    
    render() {
    const {title, description, image, link} = this.props.data;

      return (
        <div className="card">
            <div className="card-comp">
                <CardHeader title = {title} image={image} />
            </div>
          
            <div className="card-body">                
                <h2>{title}</h2>
                
                <p className="body-content">{description}</p>
                <div className ="shift" >
                  <Link className="button button-primary" to={link}>
                    <i className="fa fa-chevron-right"></i> Find out more
                </Link>
                </div>
                
            </div>
        </div>
      )
    }
  }
  
export default Card;