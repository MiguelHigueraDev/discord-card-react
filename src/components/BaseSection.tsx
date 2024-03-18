import React from 'react'

const BaseSection = ({children}: {children: React.ReactNode | React.ReactNode[]}) => {
  return (
    <section className="mb-2">
      {children}
    </section>
  )
}

export default BaseSection