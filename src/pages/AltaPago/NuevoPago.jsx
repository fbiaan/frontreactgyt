import React from "react";
import { useState , useEffect} from "react";
import './nuevopago.css';
import FormInput from "./Forminput";
import axios from 'axios';

const NuevoPago = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Importe",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Importe",
          pattern: "^[0-9]{3,16}$",
          required: true,
        }, 
        {
          id: 3,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Fecha de Pago",
        },

      ];
    
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const [selalumno,setSelalumno] = useState();
      const [data1, setData]= useState([]);
      const [selalumno1,setSelalumno1] = useState();

      const [planillas, setPlanillas]= useState([]);
      const [plani, setPlani]= useState();

      const [periodos, setPeriodos]= useState([]);
      const [elper, setElper]= useState();

      //const baseUrl="http://192.168.1.111:3050/prueba";
      const baseUrl="http://168.181.186.118:9095/prueba";
      const peticionGet=async()=>{
          await axios.get(baseUrl)
          .then(response=>{
           console.log(response.data);
           setData(response.data);
           //setSelectcomp1(response.data.return[0].COMPANY_ID);
          }).catch(error=>{
            console.log(error);
          })
        }

        useEffect(()=>{
            peticionGet();
          }, []) 

          //const baseUrl2="http://192.168.1.111:3050/planillas";
          const baseUrl2="http://168.181.186.118:9095/planillas";
          const peticionPla=async()=>{
              await axios.get(baseUrl2)
              .then(response=>{
               console.log(response.data);
               setPlanillas(response.data);
               //setSelectcomp1(response.data.return[0].COMPANY_ID);
              }).catch(error=>{
                console.log(error);
              })
            }
    
            useEffect(()=>{
                peticionPla();
              }, []) 

              //const baseUrl3="http://192.168.1.111:3050/periodos";
              const baseUrl3="http://168.181.186.118:9095/periodos";
              const peticionPer=async()=>{
                  await axios.get(baseUrl3)
                  .then(response=>{
                   console.log(response.data);
                   setPeriodos(response.data);
                   //setSelectcomp1(response.data.return[0].COMPANY_ID);
                  }).catch(error=>{
                    console.log(error);
                  })
                }
        
                useEffect(()=>{
                    peticionPer();
                  }, []) 

      const handleSubmit = (e) => {
        console.log (values.email);
        console.log (values.birthday);
        console.log ({values});
        console.log ({selalumno1});
        console.log ({elper});
        console.log ("accion submit ?");

     

        //var url = 'http://192.168.1.111:3050/addpago';
        var url = 'http://168.181.186.118:9095/addpago';
        var data = {
          idplanilla : plani,
          idpercuota : elper,
          idalumno : selalumno1,
          fecha : values.birthday,
          importe :  values.username
      }   
        
      console.log (data);
                
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        e.preventDefault();

        // llamo al modal
        
      };                  


      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Registrar Pago</h1>
            <h3>Seleccion un alumno</h3>
            <select className="select-css" name="selalumno1" value={selalumno1} onChange={e => setSelalumno1(e.target.value)}>
                        {
                            data1.map((alumno) => {
                                return <option key={alumno.idAlumno} value={alumno.idAlumno}>{alumno.Nombre}</option>
                            })
                        }
            </select>
            {plani}
            <select className="select-css" name="plani" value={plani} onChange={e => setPlani(e.target.value)}>
                        {
                            planillas.map((plani) => {
                                return <option key={plani.idPlanilla} value={plani.idPlanilla}>{plani.detalle}</option>
                            })
                        }
            </select>

            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <select size="5" className="select-css" name="elper" value={elper} onChange={e => setElper(e.target.value)}>
                        {
                            periodos.map((perio) => {
                                return <option key={perio.idPerCuotas} value={perio.idPerCuotas}>{perio.desper}</option>
                            })
                        }
            </select>
            <button type="submit">Registrar</button>
          </form>
        </div>
      );
};

export default NuevoPago;


