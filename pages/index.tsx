/*
Requirement
1. SSR with external api call - 
https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true

*/
import axios from 'axios';
import { useEffect } from 'react';

const tryAPI = async () => {
  const res = await axios.get('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true');
  console.log(res.data);
};

const Home = () => {
  useEffect(() => {
    tryAPI();
    console.log('hello world');
  }, []);

  return <>hello world</>;
};
export default Home;
