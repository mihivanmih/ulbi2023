import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Icon.module.scss'
import React, { memo } from 'react'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>
interface IconBaseProps extends SvgProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}
interface NonClickableIconBaseProps extends IconBaseProps {
    clickable?: false
}
interface ClickableBaseProps extends IconBaseProps {
    clickable?: true
    onClick: () => void
}

type IconProps = NonClickableIconBaseProps | ClickableBaseProps

export const Icon = memo((props: IconProps) => {
    const {
        className = '',
        Svg,
        clickable,
        width = 32,
        height = 32,
        ...otherProps
    } = props

    const icon = (
        <Svg
            className={classNames(styles.Icon, {}, [className])}
            width={width}
            height={width}
            {...otherProps}
        />
    )

    if (clickable) {
        return (
            <button
                type={'button'}
                onClick={props.onClick}
                className={styles.button}
                style={{ width, height }}
            >
                {icon}
            </button>
        )
    }

    return icon
})
