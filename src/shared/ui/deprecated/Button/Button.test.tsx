import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
    test('Button param', () => {
        render(<Button>++++</Button>)
        expect(screen.getByText('++++')).toBeInTheDocument()
    })

    test('Button clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>++++</Button>)
        expect(screen.getByText('++++')).toHaveClass('clear')
        // screen.debug()
    })
})
