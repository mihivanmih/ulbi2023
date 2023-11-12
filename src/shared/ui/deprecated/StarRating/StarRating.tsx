import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './StarRating.module.scss'
import { memo, useState } from 'react'
import { Icon } from '../Icon/Icon'
import Star from '@/shared/assets/icons/star.svg'

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

/**
 * Устарел используем новые компоненты из папки redisigned
 *
 */
export const StarRating = memo((props: StarRatingProps) => {
    const { className = '', onSelect, size = 30, selectedStars = 0 } = props

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelectedt] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setIsSelectedt(true)
        }
    }

    return (
        <div className={classNames(styles.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        styles.starIcon,
                        { [styles.selected]: isSelected },
                        [
                            currentStarsCount >= starNumber
                                ? styles.hovered
                                : styles.normal,
                        ],
                    )}
                    Svg={Star}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    )
})