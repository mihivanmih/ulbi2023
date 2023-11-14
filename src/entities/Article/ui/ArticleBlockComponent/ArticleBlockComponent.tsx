import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleBlockComponent.module.scss'
import { memo } from 'react'
import { Code } from '@/shared/ui/redesigned/Code'
import type { ArticleCodeBlock } from '../../model/types/article'

interface ArticleBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleBlockComponent = memo(
    ({ className = '', block }: ArticleBlockComponentProps) => {
        return (
            <div
                className={classNames(styles.ArticleBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        )
    },
)
