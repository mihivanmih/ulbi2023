import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './LoginModal.module.scss'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from '@/shared/ui/deprecated/Loader'
import React, { ReactNode, Suspense, useCallback, useState } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

interface LoginModalProps {
    className?: string
    children?: ReactNode
}

export const LoginModal = ({ className = '', children }: LoginModalProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <>
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={<span onClick={onShowModal}>{children}</span>}
                off={<span onClick={onShowModal}>{children}</span>}
            />

            {isAuthModal && (
                <Modal
                    className={classNames(styles.LoginModal, {}, [className])}
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                    lazy
                >
                    <Suspense fallback={<Loader />}>
                        <LoginFormAsync onSuccess={onCloseModal} />
                    </Suspense>
                </Modal>
            )}
        </>
    )
}
