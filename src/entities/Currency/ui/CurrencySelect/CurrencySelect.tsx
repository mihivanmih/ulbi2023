import { classNames } from '@/shared/lib/classNames/classNames'
import { Currency } from '../../model/types/currency'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/Popups'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(
    ({ className = '', value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation('profile')

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency)
            },
            [onChange],
        )

        return (
            <ListBox
                className={classNames('', {}, [className])}
                onChange={onChangeHandler}
                value={value}
                items={options}
                defaultValue={t('Укажите страну')}
                label={t('Укажите страну')}
            />
        )
    },
)
