import React from 'react';
import { useState } from "react";
import "./altapago.css";
import FormInput from "./FormInput";

const Altapago = () => {
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
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },

        {
          id: 3,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Birthday",
        },
      ];

      const handleSubmit = (e) => {
        console.log (values.email);
        console.log (values.username);
        console.log ({values});
        console.log ("accion submit ?");

        //var url = 'http://localhost:3050/addalumno';
        var url = 'http://168.181.186.118:9095/addalumno';
        var data = {name: values.email,
                    dni: values.username
                    };

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
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return (
        <div className="app">
            <h1> G y T </h1>
            <form onSubmit={handleSubmit}>
                <h1>Agregar alumno</h1>
                {inputs.map((input) => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
      );
};

export default Altapago;