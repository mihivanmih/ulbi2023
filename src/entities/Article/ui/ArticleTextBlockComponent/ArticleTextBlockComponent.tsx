import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleTextBlockComponent.module.scss'
import { memo } from 'react'
import { Text } from '@/shared/ui/Text/Text'
import type { ArticleTextBlock } from '../../model/types/article'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className = '', block }: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={styles.title}/>
            )}
            {
                block.paragraphs?.map((paragraph, index) => (
                    <Text key={paragraph} text={paragraph} className={styles.paragraph}/>
                ))
            }
        </div>
    )
})
