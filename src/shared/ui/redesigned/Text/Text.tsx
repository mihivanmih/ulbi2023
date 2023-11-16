import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Text.module.scss'
import { memo } from 'react'

export type TextVariant = 'primary' | 'error' | 'accent'
export type TextAlign = 'right' | 'left' | 'center'
export type TextSize = 's' | 'm' | 'l'
export type TextPaddingTopBottom = '0' | '8' | '16' | '24' | 'auto'

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
    bold?: boolean
    paddingTop?: TextPaddingTopBottom
    paddingBottom?: TextPaddingTopBottom
    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
    s: styles.size_s,
    m: styles.size_m,
    l: styles.size_l,
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
}

const mapPaddingTopToClass: Record<TextPaddingTopBottom, string> = {
    '0': 'pt_0',
    '8': 'pt_8',
    '16': 'pt_16',
    '24': 'pt_24',
    auto: 'pt_auto',
}

const mapPaddingBottomToClass: Record<TextPaddingTopBottom, string> = {
    '0': 'pb_0',
    '8': 'pb_8',
    '16': 'pb_16',
    '24': 'pb_24',
    auto: 'pb_auto',
}

export const Text = memo((props: TextProps) => {
    const {
        className = '',
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        paddingTop = 'auto',
        paddingBottom = 'auto',
        bold,
        'data-testid': dataTestId = 'Text',
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]
    const sizeClass = mapSizeToClass[size]
    const paddingClassTop = mapPaddingTopToClass[paddingTop]
    const paddingClassBottom = mapPaddingBottomToClass[paddingBottom]

    return (
        <div
            className={classNames(styles.Text, { [styles.bold]: bold }, [
                className,
                styles[variant],
                styles[align],
                styles[paddingClassTop],
                styles[paddingClassBottom],
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
