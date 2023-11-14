import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Text.module.scss'
import { memo } from 'react'

export type TextVariant = 'primary' | 'error' | 'accent'
export type TextAlign = 'right' | 'left' | 'center'
export type TextSize = 's' | 'm' | 'l'

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
    bold?: boolean
    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
}

export const Text = memo((props: TextProps) => {
    const {
        className = '',
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = 'Text',
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]
    const sizeClass = mapSizeToClass[size]

    return (
        <div
            className={classNames(styles.Text, { [styles.bold]: bold }, [
                className,
                styles[variant],
                styles[align],
                sizeClass,
            ])}
        >
            {title && (
                <HeaderTag
                    className={styles.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={styles.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    )
})
