import { Goal } from '../types/goal';
import Link from 'next/link';

export const Tile = ({ goal, className }: { goal: Goal; className: string }) => {
  return (
    <div className={className}>
      <Link href={`/goals/${goal.code}`}>
        <a>
          <div>{goal.code}</div>
          <div>{goal.title.substr(0, 20)}</div>
          <div>Placeholder for icon</div>
        </a>
      </Link>
    </div>
  );
};
