import { Button } from './Button';

// Render a single task with checkbox, details, and delete button
export function Task({ task, onDeleteTask, onMarkTask }) {
  return (
    <div className="task">
      <input
        className="task-checkbox"
        type="checkbox"
        onChange={() => onMarkTask(task.id)}
        checked={task.isDone}
      ></input>
      <label className={task.isDone ? 'marked' : ''}>{task.description} </label>

      <div className="task-details-container">
        <span
          className={`task-details task-details--priority ${
            task.isDone && 'marked'
          }`}
        >
          {task.priority}
        </span>{' '}
        <span
          className={`task-details task-details--date ${
            task.isDone && 'marked'
          }`}
        >
          {task.date}
        </span>
      </div>

      <Button
        className={`btn--delete`}
        onClick={() => onDeleteTask(task.id)}
        type="button"
      >
        <ion-icon
          className="icon md hydrated"
          name="trash"
          role="img"
        ></ion-icon>
      </Button>
    </div>
  );
}
