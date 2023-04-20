import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'John', email: 'john@example.com' },
  ];
  render(<UserList users={users} />);

  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  expect(rows).toHaveLength(users.length);
});

test('render the name and email of each user', () => {
  return;
});
