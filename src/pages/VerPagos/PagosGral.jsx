import React from 'react';
import { useState , useEffect} from "react";
import axios from 'axios';
import "./pagosGral.css";


export default function PagosGral() {
    const [data1, setData]= useState([]);

    //const baseUrl="http://192.168.1.111:3050/planilla";
    const baseUrl="http://168.181.186.118:9095/planilla"
    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
         console.log(response.data);
         setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }

      useEffect(()=>{
        peticionGet();
      }, [])   

    return(
      <div>
      <div>Pagos x Meses</div> 
      <table className="styled-table">
          <thead>
              <tr>
                  <th>Edad</th>
                  <th>Horario</th>
                  <th>Nombre</th>
                  <th>Ene</th>
                  <th>Feb</th>
                  <th>Mar</th>
                  <th>Abr</th>
                  <th>May</th>
                  <th>Jun</th>
                  <th>Jul</th>
              </tr>
          </thead>
          <tbody>
              {
                  data1.map((d) => {
                      return (
                          <tr>
                              <td>{d.descripcion}</td>
                              <td>{d.Sdescripcion}</td>
                              <td>{d.Nombre}</td>
                              <td>{d.ENERO}</td>
                              <td>{d.FEBRERO}</td>
                              <td>{d.MARZO}</td>
                              <td>{d.ABRIL}</td>
                              <td>{d.MAYO}</td>
                              <td>{d.JUNIO}</td>
                              <td>{d.JULIO}</td>
                          </tr>
                      )
                  })
              }
          </tbody>
      </table>
       </div> 
    );
  
}
