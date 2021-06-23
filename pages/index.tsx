/*
Requirement
1. SSR with external api call - 
https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true

*/
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Goal } from 'types/goal';
import styles from './home.module.css';
import { Tile } from '../components/Tile';

const Home = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const fetchGoals: () => Promise<void> = async () => {
    try {
      const res = await axios.get('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
      setGoals(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div>
      <div className="bg-indigo-400 text-center">THE GOALS</div>
      <div className={styles.container}>
        {goals.map((goal, idx) => (
          <Tile goal={goal} />
        ))}
      </div>
    </div>
  );
};
export default Home;
