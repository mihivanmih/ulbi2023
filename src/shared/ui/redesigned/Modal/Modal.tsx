import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import type { ReactNode } from 'react'
import React from 'react'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import { useModel } from '@/shared/lib/hooks/useModel/useModel'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { toggleFeatures } from '@/shared/lib/features'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean
}

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
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(styles.Modal, mods, [
                    className,
                    theme,
                    toggleFeatures({
                        name: 'isAppRedisigned',
                        on: () => styles.modalNew,
                        off: () => styles.modalOld,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    )
}
