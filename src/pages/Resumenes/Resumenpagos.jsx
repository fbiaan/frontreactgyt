import React from 'react';
import { useState , useEffect} from "react";
import axios from 'axios';
import "./resumenpagos.css";

function Resumenpagos() {
  const [data1, setData]= useState([]);
  const [dataresumes, setDataresumes] = useState([]);
  const [datatotal, setDatatotal] = useState([]);

  //const baseUrl="http://192.168.1.111:3050/pagosxmes";
  const baseUrl="http://168.181.186.118:9095/pagosxmes";
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
      peticionxMes();
      peticionxTotal();
    }, [])   

    //const baseUrl2="http://192.168.1.111:3050/pagostotalxmes";
    const baseUrl2="http://168.181.186.118:9095/pagostotalxmes";
    const peticionxMes=async()=>{
        await axios.get(baseUrl2)
        .then(response=>{
         console.log(response.data);
         setDataresumes(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }
  
      //const baseUrl3="http://192.168.1.111:3050/pagosxclase";
      const baseUrl3="http://168.181.186.118:9095/pagosxclase";
      const peticionxTotal=async()=>{
          await axios.get(baseUrl3)
          .then(response=>{
           console.log(response.data);
           setDatatotal(response.data);
          }).catch(error=>{
            console.log(error);
          })
        }


  return (
    <div>
      <body>
      <div className="table-title">
      <h1>Resumen pagos</h1>
      </div>
      <table className="table-fill">
          <thead>
              <tr>
                  <th className="text-left">Edad</th>
                  <th>Horario</th>                  
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
                              <td className="text-left">{d.descripcion}</td>
                              <td>{d.Sdescripcion}</td>
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
      </body>
      <br/>
      <h2>SUB TOTAL X MES </h2>
      <table className="">
          <thead>
              <tr>
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
                  dataresumes.map((d) => {
                      return (
                          <tr>
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
      <br/>
      <h2> TOTAL X CURSO </h2>
      <table className="container">
          <thead>
              <tr>
                  <th>Edad</th>
                  <th>Horario</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody>
              {
                  datatotal.map((d) => {
                      return (
                          <tr>
                              <td>{d.descripcion}</td>
                              <td>{d.Sdescripcion}</td>
                              <td>{d.TOTAL}</td>
                          </tr>
                      )
                  })
              }
          </tbody>
      </table>

    </div>
  );
}

export default Resumenpagos;