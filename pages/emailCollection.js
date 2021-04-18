import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
// import styles from '../../styles/form.module.css'

function validateEmail(email) {
  
  return re.test(String(email).toLowerCase());
}

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default ({ submissionSuccesful = () => {} }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(register, useForm);
  const postData = async (data) => {
    try {
      const post = await axios.post('/api', data);
      submissionSuccesful(true)
    } catch(error) {
      submissionSuccesful(true)
      console.log(error);
    }
  }
  
  if(!useForm) return null;
  return (
    <>
      <form onSubmit={handleSubmit(postData)}>
        <div>
          <input placeholder="name"
            {...register("name", { required: true })}
            type='text' 
          />
          {errors.name && <p style={{ marginTop: '5px', color: 'red', fontWeight: '400' }}>Name is required</p>}
        </div>
        <div>
          <input placeholder="Email"
            {...register("email", { required: true, pattern: emailPattern })}
            type='text'
          />
          {errors.email && <p style={{ marginTop: '5px', color: 'red', fontWeight: '400' }}>Please enter a valid email</p>}
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              name="checked"
              {...register("checked", { required: true })}
              type='checkbox'
              height="10px"
              width="10px"
            />
            <label style={{marginLeft: '10px', fontSize:'14px'}}> I agree to receive future communications from Paisa. </label>
          </div>
          {errors.checked && <p style={{ marginTop: '9px', color: 'red', fontWeight: '400' }}>Please check the box to submit.</p>}
        </div>
        <div>
          <Button color="white" type="submit">Keep me posted</Button>
        </div>
      </form>
    </>
  )
}