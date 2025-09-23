import { useState } from 'react';
import { formatDate } from './helpers/formatDate';
import { TaskTracker } from './components/TaskTracker';
import { Footer } from './components/Footer';
import './App.css';
import './queries.css';

export const today = new Date();

const initialTasks = [
  {
    description: 'university project',
    date: formatDate(new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000)),
    priority: 'High',
    isDone: false,
    id: '712397',
  },
  {
    description: 'web developer interview',
    date: formatDate(today),
    priority: 'High',
    isDone: false,
    id: '313751',
  },
  {
    description: 'groceries',
    date: formatDate(new Date(today.getTime() + 0 * 24 * 60 * 60 * 1000)),
    priority: 'Low',
    isDone: true,
    id: '839512',
  },
  {
    description: 'gym',
    date: formatDate(new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)),
    priority: 'Medium',
    isDone: false,
    id: '012831',
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });
  const [sortBy, setSortBy] = useState('input');
  let sorted;

  // Sort tasks based on selected criteria
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  if (sortBy === 'input') sorted = tasks;
  if (sortBy === 'finished')
    sorted = tasks
      .filter((task) => !task.isDone)
      .concat(tasks.filter((task) => task.isDone));
  if (sortBy === 'priority')
    sorted = tasks.toSorted(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  if (sortBy === 'date')
    sorted = tasks.toSorted((a, b) => new Date(a.date) - new Date(b.date));

  // Save updated tasks to state and localStorage
  function saveTasks(newTasks) {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  function handleSort(sortType) {
    setSortBy(sortType);
  }

  function handleAddTask(task) {
    const newTasks = [...tasks, task];
    saveTasks(newTasks);
  }

  function handleClearTasks() {
    saveTasks([]);
  }

  function handleDeleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    saveTasks(newTasks);
  }

  function handleMarkTask(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    saveTasks(newTasks);
  }

  return (
    <>
      <TaskTracker
        tasks={sorted}
        onClearTasks={handleClearTasks}
        onDeleteTask={handleDeleteTask}
        onMarkTask={handleMarkTask}
        onAddTask={handleAddTask}
        sortBy={sortBy}
        onSort={handleSort}
      />
      <Footer tasks={tasks} />
    </>
  );
}

export default App;
