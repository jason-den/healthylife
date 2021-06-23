import { Goal } from '../types/goal';
export const Tile = ({ goal, className }: { goal: Goal; className: string }) => {
  return (
    <div className={className}>
      <div>{goal.code}</div>
      <div>{goal.title.substr(0, 20)}</div>
      <div>Placeholder for icon</div>
    </div>
  );
};
