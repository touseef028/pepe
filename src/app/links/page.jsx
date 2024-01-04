'use client'
import React from 'react'
import { Grid, Typography,Box } from '@mui/material'
import Image from 'next/image'
import link1 from "../../../public/linkk1.png"
import link2 from "../../../public/linkk2.png"
import link3 from "../../../public/linkk3.png"
import { styled } from '@mui/material/styles';
import Link from 'next/link'

const PREFIX = 'page';

const classes = {
  text: `${PREFIX}-text`,
};

const StyledBox = styled(Box)((
  {
    theme
  }
) => ({
  [`& .${classes.text}`]: {
    fontWeight:'bolder',
    fontFamily:'American Typewriter',
    fontSize:'40px',
    color:'green',
    lineHeight:'40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },

}));

const page = () => {
  return (
    <StyledBox>
    <Grid justifyContent="center" alignItems="center" padding={10} spacing={7} container>
      <Grid item xs={12} md={6}>
          <Image src={link3} width={200} height={200}/>
      </Grid>
      <Grid item xs={12} md={6}>
          <Typography className={classes.text}>Stick to X for limited time link</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
          <Image src={link1} width={200} height={200}/>
      </Grid>
      <Grid item xs={12} md={6}>
      <Link style={{textDecoration:'none'}} target='_blank' href="https://twitter.com/justpepeinj">
          <Typography className={classes.text}>twitter.com/justpepeinj</Typography>
      </Link>
      </Grid>
      <Grid item xs={12} md={6}>
          <Image src={link2} width={200} height={200}/>
      </Grid>
      <Grid item xs={12} md={6}>
          <Typography className={classes.text}>S000000N</Typography>
      </Grid>
    </Grid>
    </StyledBox>
  ) 
}

export default page