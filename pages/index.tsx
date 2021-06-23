/*
Requirement
1. SSR with external api call - 
https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true


Notes 
1. The tile in original website is simply a image. Including code, svg, and the short title. 
Example: https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg
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
        <div className={styles['grid-container'] + ' m-10'}>
          {goals.map((goal, idx) => (
            <Tile
              className={styles['tile'] + ' ' + colors[Math.floor(Math.random() * colors.length)]}
              goal={goal}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;

const colors = [
  'bg-indigo-200',
  'bg-red-200',
  'bg-yellow-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-indigo-400',
  'bg-red-400',
  'bg-yellow-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-purple-400',
  'bg-pink-400',
  'bg-indigo-600',
  'bg-red-600',
  'bg-yellow-600',
  'bg-blue-600',
  'bg-green-600',
  'bg-purple-600',
  'bg-pink-600'
];
