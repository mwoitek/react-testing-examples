import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
  // NOT THE BEST IMPLEMENTATION
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  render(<UserForm onUserAdd={callback} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  await user.click(nameInput);
  await user.keyboard('Jane');

  await user.click(emailInput);
  await user.keyboard('jane@example.com');

  const button = screen.getByRole('button');
  await user.click(button);

  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'Jane', email: 'jane@example.com' });
});
