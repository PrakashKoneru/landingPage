import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Checkbox, Flex } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
// import styles from '../../styles/form.module.css'

function validateEmail(email) {
  
  return re.test(String(email).toLowerCase());
}

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default ({ setFormSubmitted = () => {} }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const postData = async (data) => {
    try {
      const post = await axios.post('/api', data);
      setFormSubmitted(true)
    } catch(error) {
      // setFormSubmitted(true)
      console.log(error);
    }
  }
  
  if(!useForm) return null;
  return (
    <>
      <form onSubmit={handleSubmit(postData)}>
        <div>
          <Input
            placeholder="Email"
            mt="5px"
            {...register("email", { required: true, pattern: emailPattern })}
            type='text'
          />
          {errors.email && <p style={{ marginTop: '5px', color: 'red', fontWeight: '400' }}>Please enter a valid email</p>}
        </div>
        <Box mt="8px">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              name="checked"
              borderColor="#495FBF"
              {...register("checked", { required: true })}
              size="lg"
              outlineColor="none"
              ml="5px"
            ></Checkbox>
            <label style={{marginLeft: '10px', fontSize:'14px'}}> I agree to receive future communications from Paisa. </label>
          </div>
          {errors.checked && <p style={{ marginTop: '9px', color: 'red', fontWeight: '400' }}>Please check the box to submit.</p>}
        </Box>
        <Flex
          mt="10px"
          justifyContent="flex-end"
        >
          <Button color="white" type="submit">Keep me posted</Button>
        </Flex>
      </form>
    </>
  )
}