import React, { useState } from "react";
import workouts from "./db";
import CardItem from "./components/CardItem";

function App() {
  return (
    <div className='App'>
      <div className='card-container'>
        {workouts.map((workout) => (
          <CardItem workout={workout} key={workout.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
