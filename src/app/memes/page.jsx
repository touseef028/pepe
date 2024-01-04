'use client'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import img from "../../../public/memes.png"

const PREFIX = 'page';

const classes = {
  imageBottomLeft: `${PREFIX}-imageBottomLeft`,
  text: `${PREFIX}-text`,

};

const StyledBox = styled(Box)((
  {
    theme
  }
) => ({
  [`& .${classes.imageBottomLeft}`]: {
    width: '100%',
    height: 'auto',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  [`& .${classes.text}`]: {
      textAlign:'center',
      fontSize:'50px',
      fontFamily:'jumper',
      fontWeight:'bolder',
      padding:'50px',
      lineHeight:'70px',
      [theme.breakpoints.down('sm')]: {
        fontSize:'32px',
      },
  },
}));

const page = () => {
  return (
    <StyledBox style={{marginTop:'100px'}}>
      <Typography className={classes.text}>BEST <span style={{color:'green'}}>PEPE</span><br/> MEMES WILL BE <br/>DISPLAYED HERE AND REWARDED</Typography>
      <Image src={img} className={classes.imageBottomLeft}/>
    </StyledBox>
  )
}

export default page