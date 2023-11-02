import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/shared/ui/Text/Text'
import styles from './ArticleImageBlockComponent.module.scss'
import { memo } from 'react'
import type { ArticleImageBlock } from '../../model/types/article'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className = '', block }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={styles.img} alt={block.title} />
            {block.title && (<Text text={block.title} align={TextAlign.CENTER}/>) }
        </div>
    )
})
