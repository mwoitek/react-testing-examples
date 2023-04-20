import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'John', email: 'john@example.com' },
  ];
  const { container } = render(<UserList users={users} />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const rows = container.querySelectorAll('tbody tr');
  expect(rows).toHaveLength(users.length);
});

test('render the name and email of each user', () => {
  return;
});
