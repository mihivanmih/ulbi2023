import type { Mods } from '@/shared/lib/classNames/classNames'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Flex.module.scss'
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    end: styles.justifyEnd,
    center: styles.justifyCenter,
    between: styles.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    end: styles.alignEnd,
    center: styles.alignCenter,
}

const directionClasses: Record<FlexDirection, string> = {
    column: styles.directionColumn,
    row: styles.directionRow,
}

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    32: styles.gap32,
}

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export interface FlexProps extends DivProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const Flex = (props: FlexProps) => {
    const {
        className = '',
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        ...arg
    } = props

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ]

    const mods: Mods = {
        [styles.max]: max,
    }

    return (
        <div className={classNames(styles.Flex, mods, classes)} {...arg}>
            {children}
        </div>
    )
}
