import React from "react";
import {ListItem, Divider, ListItemText, Typography} from "@mui/material"
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  return (
    <div key={props.id}>
      <Divider variant="middle" component="li" />
      <ListItem alignpropss="center">
        <EmpleadoAvatar alt={props.fullName} src={props.imagen}></EmpleadoAvatar>
        <ListItemText   
          primary={<Typography variant="h6" style={{ color: '#2979ff' }}>{`${props.fullName}`}</Typography>}
          secondary={<Typography variant="subtitle1">{`${props.title} - ${props.department}`}</Typography>}
            
        />
      </ListItem>
      <Divider variant="middle" component="li" />
    </div>
  );
};

export default EmpleadoRow;
