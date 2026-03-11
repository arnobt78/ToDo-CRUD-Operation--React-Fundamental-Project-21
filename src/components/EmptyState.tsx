/**
 * Reusable empty-state UI: optional icon, title, description, and extra children.
 * Used when task list is empty; can be reused for "no results", "no items", etc. in other screens.
 */
import { type ReactNode } from 'react'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  children,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`emptyState ${className}`.trim()}>
      {icon && <div className="emptyStateIcon">{icon}</div>}
      <h3 className="emptyStateTitle">{title}</h3>
      {description && <p className="emptyStateDesc">{description}</p>}
      {children}
    </div>
  )
}
