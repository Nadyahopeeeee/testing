import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe('TEST APP', () => {
  test('render start layout', () => {
    render(<App />);
    const helloElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('render data', async () => {
    render(<App />);
    screen.debug();
    const dataEl = await screen.findByText(/data/i)
    expect(dataEl).toBeInTheDocument();
    expect(dataEl).toHaveStyle({color: 'red'});
    screen.debug()

  });

  test('click event', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn')

    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test("INPUT EVENT", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искуственное событие
    fireEvent.input(input, {
      target: {value: '123123'}
    })
    // // Близко к пользователю, обрабатываются события нажатия клавиш и тд
    // userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  })
})

