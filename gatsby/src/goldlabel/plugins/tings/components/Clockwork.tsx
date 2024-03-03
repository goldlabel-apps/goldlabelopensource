import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
} from "@mui/material"
import {
  Font,
  usePwaSelect,
  usePwaDispatch,
  selectTings,
} from "../../../../goldlabel"
import {
  setTingsKey,
} from "../"


const Clockwork: React.FC = () => {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {
    tillNextTing,
  } = tings

  // console.log("tillNextTing", tillNextTing)

  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const incrementTimer = () => {
      let newVal = 0
      if (tillNextTing === 59) {
        newVal = 0
      } else {
        newVal = tillNextTing + 1;
      }
      // console.log("newVal", newVal)
      dispatch(setTingsKey("tillNextTing", newVal || 0))
    };

    const intervalId = setInterval(incrementTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <Box sx={{mx:1}}>
      <Box sx={{m:0}}>
        <CircularProgress
          variant="determinate" 
          value={tillNextTing/60*100} 
        />
      </Box>
      <Box sx={{m:1}}>
        <Font>
          Next ting in {tillNextTing} secs
        </Font>
      </Box>
    </Box>
  );
};

export default Clockwork;