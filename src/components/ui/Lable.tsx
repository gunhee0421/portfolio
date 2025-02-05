import React from 'react'

export const TitleLabel: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h3 className={`text-sm sm:text-lg lg:text-xl font-semibold ${className}`}>
      {title}
    </h3>
  )
}
export const ContentLabel: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <p className={`text-xs sm:text-base lg:text-lg ${className}`}>{children}</p>
  )
}
