import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {

  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  expect(button).toHaveStyle({backgroundColor: 'red'});

});

test('button turns blue when clicked', () => {

  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red')

});


test('initial conditions', () => {
  render(<App />)
  // Check that buttons starts enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled();

  // Checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('enable and disable the button', () => {

  render(<App />)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  fireEvent.click(checkbox)

  expect(colorButton).not.toBeEnabled();

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();


})

test('button is gray when disabled', () => {

  render(<App />)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toHaveStyle({backgroundColor: 'red'});


  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});


  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
})


