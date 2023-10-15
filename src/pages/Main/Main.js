import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import TodayRoutine from '../../components/TodayRoutine/TodayRoutine';
import RoutineThumbNail from '../../components/RoutineThumbNail/RoutineThumbNail';

function Main() {
  const [aboutData, setaboutData] = useState({});

  useEffect(() => {
    fetch('/data/soonwoo.json', {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setaboutData(result.data);
      });
  }, []);

  console.log(aboutData);
  return (
    <div>
      <TodayRoutine
        routineId={aboutData.routineId}
        totalDuration={aboutData.totalDuration}
        totalCaloriesUsed={aboutData.totalCaloriesUsed}
      ></TodayRoutine>
    </div>
  );
}

export default Main;
