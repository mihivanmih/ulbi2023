import { classNames, Mods } from 'shared/lib/classNames/classNames'
import styles from './Drawer.module.scss'
import { memo, ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import { useModel } from 'shared/lib/hooks/useModel/useModel'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className = '',
        children,
        isOpen,
        onClose,
        lazy
    } = props

    const { theme } = useTheme()

    const {
        isClosing,
        close,
        isMounted
    } = useModel({
        animationDelay: 300,
        onClose,
        isOpen
    })

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close}/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
})
