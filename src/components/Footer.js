export function Footer({ tasks }) {
  const tasksNum = tasks.length;
  const finishedNum = tasks.filter((task) => task.isDone).length;

  return (
    <div>
      <p className="stats">
        {tasksNum
          ? `You have ${tasksNum} tasks on  the list and you already finished ${finishedNum} (${Math.round(
              (finishedNum / tasksNum) * 100
            )}%)`
          : 'Start adding tasks to your tasks list!'}
      </p>
    </div>
  );
}
