import React from 'react'
import { CustomHeadingContainer, Heading, HeadingSeparator } from './CustomHeading.styles'
import { Lato } from 'next/font/google'
 
const lato = Lato({ weight:['400', '700'], subsets:['latin'] })
 
const CustomHeading:React.FC<{heading: string}> = ({heading}) => {
  return (
   <CustomHeadingContainer>
       <HeadingSeparator />
       <Heading className={lato.className}>{heading}</Heading>
       <HeadingSeparator />
   </CustomHeadingContainer>
  )
}

export default CustomHeading