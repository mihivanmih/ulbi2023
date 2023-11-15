import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './scrollToTopButton.module.scss'
import { memo } from 'react'
import { Icon } from '@/shared/ui/redesigned/Icon'
import CircleIcon from '@/shared/assets/icons/circle-up.svg'

interface scrollToTopButtonProps {
    className?: string
}

export const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
    const { className = '' } = props

    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Icon
            Svg={CircleIcon}
            onClick={onClick}
            clickable
            width={32}
            height={32}
            className={classNames(styles.scrollToTopButton, {}, [className])}
        />
    )
})
