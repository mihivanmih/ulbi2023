import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const Portal = ({ children, element = document.body }: PortalProps) => {
    return createPortal(children, element)
}
