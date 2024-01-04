'use client'
import Image from 'next/image'
import React from 'react'
import leaderboardImg1 from "../../../public/Leaderboard5.png"
import leaderboardImg2 from "../../../public/leaderboard3.png"
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

const PREFIX = 'page';

const classes = {
  image: `${PREFIX}-image`,
  pageContainer:`${PREFIX}-pageContainer`,
  imageContainer:`${PREFIX}-imageContainer`
};

const StyledBox = styled(Box)((
    {
      theme
    }
  ) => ({
    [`& .${classes.image}`]: {
        width: '90%',
        height: '100vh',
        padding:'60px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '50vh', 
          },
        [theme.breakpoints.down('sm')]: {
          width:'100%',
          height: 'auto', 
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
          <Grid className={classes.imageContainer} container>
              <Grid item xs={12} md={6}>
                <Image src={leaderboardImg1} className={classes.image}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image src={leaderboardImg2} className={classes.image}/>
              </Grid>
          </Grid>
    </StyledBox>
  )
}

export default page