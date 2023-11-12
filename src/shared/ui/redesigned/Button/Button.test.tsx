import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    test('Button param', () => {
        render(<Button>++++</Button>)
        expect(screen.getByText('++++')).toBeInTheDocument()
    })

    test('Button clear theme', () => {
        render(<Button variant={'clear'}>++++</Button>)
        expect(screen.getByText('++++')).toHaveClass('clear')
        // screen.debug()
    })
})
