import { cn } from '@/lib/utils'
import React from 'react'
import Container from '../common/Container';
import { RiSkullFill } from "react-icons/ri";

interface EditorHeaderProps {
  className?: string;
  title: string;
}

const EditorHeader = ({ className, title }: EditorHeaderProps) => {
  return (
    <Container className={cn("items-center mx-auto justify-center md:p-3  border-b  flex gap-x-2", className)}>
      <RiSkullFill className='w-5 h-5' />
      <span className='md:py-2 md:text-lg'>{title}</span>
      <span className='text-xs text-primary/50 mt-1'>v1.0</span>
    </Container>
  )
}

export default EditorHeader