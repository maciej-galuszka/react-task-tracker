import { Task } from './Task';

// Render list of tasks
export function TaskList({ tasks, onDeleteTask, onMarkTask }) {
  return (
    <div className="tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onMarkTask={onMarkTask}
        />
      ))}
    </div>
  );
}
