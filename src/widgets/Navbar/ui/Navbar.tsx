import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal} >
                    {t('войти')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={ onToggleModal }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda dolores excepturi reiciendis sint? Aperiam dicta quos reiciendis reprehenderit similique. Excepturi fugiat laudantium, molestiae necessitatibus nobis nostrum repellendus sint tempora?
            </Modal>
        </div>
    )
}
