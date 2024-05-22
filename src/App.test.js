import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';



test("Renders the BookingForm heading", () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})

test("Test times functions", () => {
  render(<BrowserRouter>
    <App />
      
    
  </BrowserRouter>);
  
  const testTime = []
  const bookingButton = screen.getByText("Reserve a table");
  fireEvent.click(bookingButton)

  userEvent.selectOptions(screen.getByLabelText("Choose time:"), ["18:00"])
  expect(screen.getByRole('option', {name: "18:00"}).selected).toBe(true)
  
  const headingElement = screen.getByText("Make reservation");
  expect(headingElement).toBeInTheDocument();

})

