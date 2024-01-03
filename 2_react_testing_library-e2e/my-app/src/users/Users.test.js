import { fireEvent, render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios'



jest.mock('axios')

describe('TEST USERS', () => {
  let response;

  response = {
    data: [
      {
        id: 1,
        name: "Leanne Graham",
      },
      {
        id: 2,
        name: "Ervin Howell",
      },
      {
        id: 3,
        name: "Clementine Bauch",
      },
    ]
  }
  test('render users', async () => {
    axios.get.mockReturnValue(response)
    render(<Users />);
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toHaveBeenCalled(1)
    screen.debug()

  
  })
})