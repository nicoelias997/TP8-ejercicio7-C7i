import React from 'react'
import { ListItemAvatar, Avatar } from '@mui/material'

const EmpleadoAvatar = (props) => {
  return (
    <ListItemAvatar>
          <Avatar alt={props.fullName} src={props.pic} />
    </ListItemAvatar>
  )
}

export default EmpleadoAvatar