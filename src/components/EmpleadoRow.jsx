import React from "react";
import {ListItem, Divider, ListItemText} from "@mui/material"
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  return (
    <div key={props.id}>
      <ListItem alignpropss="center">
        <EmpleadoAvatar alt={props.fullName} src={props.pic}></EmpleadoAvatar>
        <ListItemText
          primary={`${props.fullName}`}
          secondary={`${props.title}  ${props.department}`}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default EmpleadoRow;
