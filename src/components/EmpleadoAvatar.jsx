import React from 'react'
import { ListItemAvatar, Avatar } from '@mui/material'

const EmpleadoAvatar = (props) => {
  return (
    <ListItemAvatar>
          <Avatar alt={props.alt} src={props.src} />
    </ListItemAvatar>
  )
}

export default EmpleadoAvatar