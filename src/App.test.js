import { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TaskContext, TaskProvider } from './context/TaskContext';

beforeEach(() => {
  localStorage.clear();
});

function TaskHarness() {
  const { tasks, addTask, completedTasks } = useContext(TaskContext);
  const task = tasks[0];

  return (
    <>
      <button onClick={() => addTask('Responsive layout')}>Add task</button>
      {task && (
        <button
          data-testid="toggle-task"
          data-completed={String(task.completed)}
          onClick={() => completedTasks(task.id)}
        >
          Toggle task
        </button>
      )}
    </>
  );
}

test('a task can be toggled between complete and incomplete', () => {
  render(<TaskProvider><TaskHarness /></TaskProvider>);

  fireEvent.click(screen.getByRole('button', { name: /add task/i }));
  const toggleButton = screen.getByTestId('toggle-task');

  fireEvent.click(toggleButton);
  expect(toggleButton).toHaveAttribute('data-completed', 'true');

  fireEvent.click(toggleButton);
  expect(toggleButton).toHaveAttribute('data-completed', 'false');
});
