// The url from goal object doesn't work
// example: 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/1'
// quick&dirty solution: fetch whole list

import axios from 'axios';
import { Goal } from '../../types/goal';
import { useRouter } from 'next/router';

const GoalDetail = ({ goals }: { goals: Goal[] }) => {
  const router = useRouter();
  let content: string = '';
  try {
    const idx = parseInt(router.query.id as string) - 1;
    content = JSON.stringify(goals[idx]);
    // I thought it should throw error when index out of bound.
    // Got impressed by JS one more time.
  } catch (error) {
    console.log('error');
  }
  if (content == undefined) {
    content = `Sorry, current goal code is invalid: ${router.query.id}`;
  }
  return <div>{content}</div>;
};

export async function getServerSideProps() {
  let goals: Goal[] = [];
  try {
    const res = await axios.get('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false');
    goals = res.data as Goal[];
  } catch (error) {
    console.log(error);
  }
  return { props: { goals } };
}
export default GoalDetail;
