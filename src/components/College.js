import React from 'react';
import './College.css';

const college = (props) => {
   return (
      <div className="box col-lg-6 col-12">
         <div className="upper">
            <div className="promoted"><p>Promoted</p></div>
            <div className="up-box">
               <h3>3.9/5</h3>
               <h2>{props.rating_remarks}</h2>
            </div>
            <div className="bestcollege">{props.tags[0]}</div>
            <div className="bestcollege2">{props.tags[1]}</div>
            <div className="ranking"><p>#{props.ranking}</p></div>
         </div>
         <div className="lower">
            <div className="left">
               <h1>{props.name} {props.rating}</h1>
               <h3>{props.nearest[0]} | <span>{props.nearest[1]}</span></h3>
               <p className="p1"><span>93% Match :</span> {props.famous}</p>
               <div className="flat">{props.offertext}</div>
            </div>
            <div className="right">
               <div className="discount"><p>{props.originalfees}</p><h3>{props.discount}</h3></div>
               <div className="discountedfees"><h1>Rs.{props.discountfees}</h1></div>
               <div className="feecycle"><h3>{props.feescycle}</h3></div>
               <div className="wifi"><h3>{props.amenities[0]} . {props.amenities[1]}</h3></div>
            </div>
         </div>
      </div>
   )
}

export default college
