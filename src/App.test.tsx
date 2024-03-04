import React from 'react';
import { getByTestId, render, screen, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App, { LocationDisplay } from './App';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'


describe('Test for clarivate', () => {
  test('renders react App check for List link', async () => {
    act(() => {
      render(<App />, { wrapper: BrowserRouter });
    });
    const listElement = screen.getByText(/List/i);
    expect(listElement).toBeInTheDocument();
  });
  test('Landing route page', () => {
    const listRoute = '/list'
    render(
      <MemoryRouter initialEntries={[listRoute]}>
        <LocationDisplay />
      </MemoryRouter>
    )
    expect(screen.getByTestId('location-display')).toHaveTextContent(listRoute)
  })
  test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })
  test('landing on a list page card to be 10 length', async () => {
    const listRoute = '/list'
    render(
      <MemoryRouter initialEntries={[listRoute]}>
        <App />
      </MemoryRouter>,
    )
    setTimeout(() => {
      const container = screen.getAllByText(/favorite/i)
      expect(container).toHaveLength(10)
    }, 500)

  })
  test('landing on a list page favorite button clicked', () => {
    const listRoute = '/list'
    render(
      <MemoryRouter initialEntries={[listRoute]}>
        <App />
      </MemoryRouter>,
    )
    setTimeout(async () => {
      const listElement = screen.getByText(/favourite/i);
      await userEvent.click(listElement)
      expect(listElement).toHaveClass('btn btn-primary')
    }, 500)
  })
})
