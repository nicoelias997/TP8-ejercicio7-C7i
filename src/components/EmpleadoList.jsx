import React from 'react'

import {List} from "@mui/material"
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = () => {

    let empleados = [
      { id: 0, fullName: "Nicolas Elias", title: "Junior", department: "Engineering", pic: "https://placekitten.com/56/76" },
        { id: 1, fullName: "Nico Dueñas", title: "CEO", department: "Business", pic: "https://placekitten.com/56/80" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://placekitten.com/56/50" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://placekitten.com/55/56" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://placekitten.com/56/57" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://placekitten.com/59/56" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://placekitten.com/56/58" },  
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://placekitten.com/53/56" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://placekitten.com/56/59" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://placekitten.com/56/76" },
        
      ]
      
      
  return (
    <div style={{display: "flex", justifyContent: "center", padding: 10}}>
    <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'pink', borderRadius: 3}}>
        {
            empleados.map((item) =>(
                <EmpleadoRow key={item.id} alt={item.fullName} imagen={item.pic} fullName={item.fullName} title={item.title} department={item.department}></EmpleadoRow>
                )
            )}    
    </List>
    </div>
  );
}

export default EmpleadoList