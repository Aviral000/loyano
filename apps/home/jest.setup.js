// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import React from 'react'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => {
      // Filter out Framer Motion props
      const { whileHover, whileTap, initial, animate, exit, transition, ...restProps } = props
      return React.createElement('div', restProps, children)
    },
    button: ({ children, ...props }) => {
      // Filter out Framer Motion props
      const { whileHover, whileTap, initial, animate, exit, transition, ...restProps } = props
      return React.createElement('button', restProps, children)
    },
    span: ({ children, ...props }) => {
      // Filter out Framer Motion props
      const { whileHover, whileTap, initial, animate, exit, transition, ...restProps } = props
      return React.createElement('span', restProps, children)
    },
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock Zustand
jest.mock('zustand', () => ({
  create: jest.fn(() => ({
    getState: jest.fn(),
    setState: jest.fn(),
    subscribe: jest.fn(),
    destroy: jest.fn(),
  })),
}))
