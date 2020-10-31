import React from 'react';
import College from './components/College';
import './App.css';
import { Data } from './components/Data';

function App() {

  return (
    <>
      <div className="container-fluid px-5 py-5">
        <div className="row">
            {Data.map((college, index) => {
              return(
                <College 
                key={index} 
                name={college.college_name} 
                promoted={college.promoted}
                discount={college.discount}
                originalfees={college.original_fees}
                discountfees={college.discounted_fees}
                feescycle={college.fees_cycle}
                image={college.image}
                ranking={college.ranking}
                tags={college.tags}
                amenities={college.amenties}
                rating={college.rating}
                rating_remarks={college.rating_remarks}
                famous={college.famous_nearest_places}
                nearest={college.nearest_place}
                offertext={college.offertext}
                />
              );
            })}
        </div>
      </div>
    </>
  )
}

export default App
