import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'

test('Hello が表示される', () => {
  render(<App />)
  expect(screen.getByText(/hello/i)).toBeInTheDocument()
})