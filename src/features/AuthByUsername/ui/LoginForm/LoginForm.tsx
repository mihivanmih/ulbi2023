import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input } from '@/shared/ui/redesigned/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/LoginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className = '', onSuccess }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)
    const password = useSelector(getLoginPassword)
    const forceUpdate = useForceUpdate()

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(() => {
        void (async () => {
            const result = await dispatch(
                loginByUsername({ username, password }),
            )
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess()
                forceUpdate()
            }
        })()
    }, [dispatch, forceUpdate, onSuccess, password, username])

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}
        >
            <ToggleFeatures
                feature={'isAppRedisigned'}
                on={
                    <div
                        className={classNames(styles.LoginForm, {}, [
                            className,
                        ])}
                    >
                        <VStack gap={'16'}>
                            <Text title={t('Форма авторизации')} />
                            {error && (
                                <Text
                                    text={t(
                                        'Вы ввели неверный логин или пароль',
                                    )}
                                    variant={'error'}
                                />
                            )}
                            <Input
                                className={styles.input}
                                placeholder={t('Введите логин')}
                                autofocus
                                onChange={onChangeUsername}
                                value={username}
                            />
                            <Input
                                className={styles.input}
                                placeholder={t('Введите пароль')}
                                onChange={onChangePassword}
                                value={password}
                            />
                        </VStack>

                        <Button
                            variant={'outline'}
                            className={styles.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </div>
                }
                off={
                    <div
                        className={classNames(styles.LoginForm, {}, [
                            className,
                        ])}
                    >
                        <TextDeprecated title={t('Форма авторизации')} />
                        {error && (
                            <TextDeprecated
                                text={t('Вы ввели неверный логин или пароль')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            className={styles.input}
                            placeholder={t('Введите логин')}
                            autofocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            className={styles.input}
                            placeholder={t('Введите пароль')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            theme={ThemeButton.OUTLINE}
                            className={styles.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    )
})

export default LoginForm
