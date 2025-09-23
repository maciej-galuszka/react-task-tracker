import { TasksSort } from './TasksSort';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';

export function TaskTracker({
  tasks,
  onClearTasks,
  onSort,
  onDeleteTask,
  onMarkTask,
  onAddTask,
  sortBy,
}) {
  return (
    <div className="container">
      <h1>Task tracker</h1>
      <TaskForm onAddTask={onAddTask} />
      <TaskList
        onDeleteTask={onDeleteTask}
        onMarkTask={onMarkTask}
        tasks={tasks}
      />
      {tasks.length > 0 && (
        <TasksSort
          onClearTasks={onClearTasks}
          onSort={onSort}
          sortBy={sortBy}
        />
      )}
    </div>
  );
}
