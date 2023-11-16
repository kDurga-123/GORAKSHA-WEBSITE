import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCows } from '../Redux/Cowreducer/action';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/footer.jsx';
import { useParams } from 'react-router-dom';
import './allDetails.css';
export default function AllDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cow.cowData);

  useEffect(() => {
    dispatch(getAllCows());
  }, []);

  // Find the cow based on the id
  const selectedCow = data.find((cow, index) => String(index) === id);

  return (
    <div>
      <Navbar />
      <div className='body' >
        {selectedCow ? (
          <div key={selectedCow.Colour} >

            <div className='main_box'>
              <div>
                <img src={selectedCow.image} alt={selectedCow.Colour} className='images'/>
              </div>
              <div className='all'>
                  <p>{selectedCow.Colour}</p>
                  <h1>{selectedCow.name}</h1>
                  <div><b>Location :</b> {selectedCow.track}</div>
                  <div><b> Main Use :</b>{selectedCow.mainuse}</div>
                  <div><b> Origin : </b>{selectedCow.origin}</div>
                  <div><b> Colour :</b>{selectedCow.colour}</div>
                  <div><b>Weight :</b>{selectedCow.weight}</div>
              </div>
            </div>
            
            
          </div>
        ) : (
          <div>Selected cow not found</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

