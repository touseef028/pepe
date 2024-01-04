'use client'
import Image from 'next/image'
import React from 'react'
import gameImg from "../../../public/game.png"
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const PREFIX = 'page';

const classes = {
  image: `${PREFIX}-image`,
};

const StyledBox = styled(Box)((
    {
      theme
    }
  ) => ({
    [`& .${classes.image}`]: {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            height: '50vh', 
            marginTop:'50%'
          },
        [theme.breakpoints.down('sm')]: {
          height: '50vh', 
        },
    },
    [`& .${classes.pageContainer}`]: {
        marginTop:'100px',
        height:'100vh',
      },
      [`& .${classes.imageContainer}`]: {
        width:"100%",
        height:'100%',
        overflow:'hidden',
        position:'relative',
      },

}));

const page = () => {
  return (
    <StyledBox className={classes.pageContainer}>
         <div className={classes.imageContainer}>
        <Image src={gameImg} alt="Leaderboard" className={classes.image} />
        </div>
    </StyledBox>
  )
}

export default page