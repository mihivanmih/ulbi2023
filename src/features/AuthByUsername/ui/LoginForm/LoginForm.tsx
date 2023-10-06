import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className = '' }: LoginFormProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input type="text" className={styles.input} placeholder={t('Введите логин')} autofocus />
            <Input type="text" className={styles.input} placeholder={t('Введите пароль')}/>
            <Button className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    )
}
