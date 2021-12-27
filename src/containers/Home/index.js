import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Subtitle } from './styles';
import Button from '@mui/material/Button';
function Home() {
    const navigate = useNavigate();
  const handleStart = () => {
    navigate(`/react`);
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <Title>
          Welcome to my Github Topic Explorer
        </Title>
        <Subtitle>
          At this explorer we will search topic data (name, stargazers) and show their related topics.
        </Subtitle>
        <Subtitle>
          Click on the button below to start with the topic: "react".
        </Subtitle>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
      </header>
    </div>
  );
}

export default Home;