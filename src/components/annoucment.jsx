import { Box, styled } from '@mui/material';
import React from 'react'

const MyComponent = styled(Box)({
height:"30px",
backgroundColor: "teal",
color:"white",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontSize:"14px",
fontWeight:"500"
  });

function Annouecment() {
  return (
  <MyComponent>
    super deal !free shiping on order $50
  </MyComponent>
  )
}

export default Annouecment
