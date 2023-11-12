import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './LoginModal.module.scss'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Suspense } from 'react'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({
    className = '',
    isOpen,
    onClose,
}: LoginModalProps) => {
    return (
        <Modal
            className={classNames(styles.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
}
