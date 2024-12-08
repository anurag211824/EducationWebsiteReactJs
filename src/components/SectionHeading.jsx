import React from 'react'

const SectionHeading = ({heading,subHeading}) => {
  return (
    <div className='flex flex-col justify-center items-center mb-10'>
      <p className='capitalize text-customBlue font-parkinsans font-semibold text-2xl mb-2'>{heading}</p>
      <h3 className='font-parkinsans font-semibold text-4xl'>{subHeading}</h3>
    </div>
  )
}

export default SectionHeading