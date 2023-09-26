import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    test('Sidebar param', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Sidebar toogle', () => {
        renderWithTranslation(<Sidebar />)
        const toogleBtn = screen.getByTestId('sidebar-toogle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toogleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
