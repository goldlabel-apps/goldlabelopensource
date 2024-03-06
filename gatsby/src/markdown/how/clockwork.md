---
draft: true
website: "https://github.com/listingslab-software/goldlabelopensource"
slug: "/how/clockwork"
parentSlug: "/how"
title: "Clockwork"
description: "useState & useEffect hooks"
icon: "info"
image: "/webp/goldlabel/era.webp"
keywords: "How"
order: 100
---
To create a time mechanism in React with TypeScript that counts and displays the number of seconds elapsed since it started, and displays a window alert after 60 seconds, you can use the `useState` and `useEffect` hooks. After showing the alert, it will reset and start again, running indefinitely. Below is an example of how you could implement this:

1. **Create a new React component with TypeScript**: This component will maintain the state for the elapsed seconds and handle the side effect of counting time and showing the alert.

2. **Use `useState` to track elapsed time**: Initialize state to keep track of the number of seconds.

3. **Use `useEffect` to start the timer when the component mounts**: Inside `useEffect`, use `setInterval` to increment the elapsed time every second. Make sure to clear the interval when the component unmounts to prevent memory leaks.

4. **Reset the timer and show an alert after 60 seconds**: Inside the `setInterval` callback, check if the elapsed time has reached 60 seconds. If so, display the alert and reset the timer.

Here's a code example:

```tsx
import React, { useState, useEffect } from 'react';

const TimerComponent: React.FC = () => {
  // State to track the number of elapsed seconds
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    // Function to increment the timer
    const incrementTimer = () => {
      setSecondsElapsed((prevSeconds) => {
        if (prevSeconds === 59) {
          // When reaching 60 seconds, show alert and reset
          alert('Enough');
          return 0;
        } else {
          // Otherwise, just increment
          return prevSeconds + 1;
        }
      });
    };

    // Start the timer
    const intervalId = setInterval(incrementTimer, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Seconds Elapsed: {secondsElapsed}</p>
    </div>
  );
};

export default TimerComponent;
```

**Explanation**:
- `useState` is used to keep track of the elapsed seconds.
- `useEffect` sets up the timer with `setInterval` when the component mounts. Inside `setInterval`, it increments the elapsed seconds or resets to 0 and shows an alert after 60 seconds.
- A cleanup function is returned from `useEffect` to clear the timer using `clearInterval`. This is important for avoiding side effects if the component unmounts.
- The component renders the elapsed seconds, updating every second.

You can include this component in your application, and it will automatically start counting and reset after reaching 60 seconds, indefinitely.