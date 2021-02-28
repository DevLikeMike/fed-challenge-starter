import React, { useState } from "react";

const CardItem = ({ workout }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={active ? "card active" : "card"}
      onClick={() => setActive(!active)}
    >
      <div className='img-container'>
        <img src={`/images/${workout.thumbnail}`} alt='trainer' />
        {workout.numOfWorkouts !== null && (
          <div className='additional-workouts'>
            <span className='workout-number'>{workout.numOfWorkouts}</span>
            <span className='middle'>WORKOUTS</span>
            <span className='bars'>
              <i className='fas fa-bars'></i>
            </span>
          </div>
        )}
      </div>
      <div className='card-content'>
        <div className='content-left'>
          <h3>{workout.name}</h3>
          {workout.numOfWorkouts === null && (
            <div className='additional-content'>
              <i className='fas fa-stopwatch'></i>
              <p className='time'>{workout.time}</p>
              <i className='fas fa-dove'></i>
              <p className='views'>{workout.views}</p>
            </div>
          )}
          {workout.details && (
            <a href='#' className='view-details'>
              VIEW DETAILS
            </a>
          )}
        </div>
        <div className='content-right'>
          <img src={`/images/${workout.trainer}`} alt='thumbnail' />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
