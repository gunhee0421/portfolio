import React from 'react'

export const TitleLabel: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h3 className={`text-lg lg:text-xl font-semibold ${className}`}>{title}</h3>
  )
}
