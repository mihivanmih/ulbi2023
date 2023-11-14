import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import styles from './ArticleImageBlockComponent.module.scss'
import { memo } from 'react'
import type { ArticleImageBlock } from '../../model/types/article'
import { ToggleFeatures } from '@/shared/lib/features'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
    ({ className = '', block }: ArticleImageBlockComponentProps) => {
        return (
            <div
                className={classNames(styles.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} className={styles.img} alt={block.title} />
                {block.title && (
                    <ToggleFeatures
                        feature={'isAppRedisigned'}
                        on={<Text text={block.title} align={'center'} />}
                        off={
                            <TextDeprecated
                                text={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        )
    },
)
