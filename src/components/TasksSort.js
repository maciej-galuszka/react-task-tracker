import { Button } from './Button';

export function TasksSort({ onClearTasks, sortBy, onSort }) {
  return (
    <>
      <div className="sort-container">
        <select
          className="input-details input-details--sort"
          value={sortBy}
          onChange={(e) => onSort(e.target.value)}
        >
          <option value={'input'}>SORT BY INPUT</option>
          <option value={'finished'}>SORT BY FINISHED</option>
          <option value={'priority'}>SORT BY PRIORITY</option>
          <option value={'date'}>SORT BY DATE</option>
        </select>
        <Button className="btn--clear" onClick={onClearTasks} type="button">
          CLEAR TASKS
        </Button>
      </div>
    </>
  );
}
