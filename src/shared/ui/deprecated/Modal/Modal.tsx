import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import type { ReactNode } from 'react'
import React from 'react'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import { useModel } from '@/shared/lib/hooks/useModel/useModel'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean
}

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const Modal = (props: ModalProps) => {
    const { theme } = useTheme()

    const { className = '', children, isOpen, lazy, onClose } = props

    const { isClosing, close, isMounted } = useModel({
        animationDelay: 300,
        onClose,
        isOpen,
    })

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    )
}