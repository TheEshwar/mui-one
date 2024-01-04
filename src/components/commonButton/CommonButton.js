import { Button } from '@mui/material'
import React from 'react'

function CommonButton({children, color, disabled, size, variant}) {
  return (
    <Button
    color={color}
    disabled={disabled}
    size={size}
    variant={variant}>{children}</Button>
  )
}

export default CommonButton