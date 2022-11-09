import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
 const {register, handleSubmit, watch, getValues, formState: {errors}} = useForm();
  
  function onSubmit(data) {
    //acceder al servidor--//
    console.log('submit', data);  
  }
  useEffect(() => {
    console.log('los valores del formulario son', getValues())
  }, 
  [watch(getValues())]
  )
 
  return (
    <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("campo1")} /><br></br>
          <input {...register("campo2")} /><br></br>
          {errors.campo2 && <span>el campo es requerido</span>}
          <input type="submit" />
          </form>   
    </div>
  )
}
export default App
