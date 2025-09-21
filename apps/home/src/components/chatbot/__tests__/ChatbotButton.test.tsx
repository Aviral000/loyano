import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatbotButton from '../ChatbotButton'

// Mock the store
const mockToggleChat = jest.fn()
const mockIsOpen = false

jest.mock('../useChatbotStore', () => ({
  useChatbotStore: () => ({
    isOpen: mockIsOpen,
    toggleChat: mockToggleChat,
  }),
}))

describe('ChatbotButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the chatbot button', () => {
    render(<ChatbotButton />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls toggleChat when clicked', () => {
    render(<ChatbotButton />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(mockToggleChat).toHaveBeenCalledTimes(1)
  })

  it('has correct accessibility attributes', () => {
    render(<ChatbotButton />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })
})
