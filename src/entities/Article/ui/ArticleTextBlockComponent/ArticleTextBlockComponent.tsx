import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleTextBlockComponent.module.scss'
import { memo } from 'react'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import type { ArticleTextBlock } from '../../model/types/article'
import { ToggleFeatures } from '@/shared/lib/features'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
    ({ className = '', block }: ArticleTextBlockComponentProps) => {
        return (
            <div
                className={classNames(styles.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature={'isAppRedisigned'}
                        on={
                            <Text
                                title={block.title}
                                className={styles.title}
                            />
                        }
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={styles.title}
                            />
                        }
                    />
                )}
                {block.paragraphs?.map((paragraph, index) => (
                    <ToggleFeatures
                        key={paragraph}
                        feature={'isAppRedisigned'}
                        on={
                            <Text
                                key={paragraph}
                                text={paragraph}
                                className={styles.paragraph}
                            />
                        }
                        off={
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={styles.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        )
    },
)
