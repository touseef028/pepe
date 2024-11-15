'use client'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Info1 from "../../../public/info1.png"
import Info2 from "../../../public/info2.png"
import Info3 from "../../../public/info3.png"
import Info4 from "../../../public/info4.png"
import arrow from "../../../public/arrow.png"

const PREFIX = 'page';

const classes = {
  image: `${PREFIX}-image`,
  span: `${PREFIX}-span`,
  para: `${PREFIX}-para`,
  header: `${PREFIX}-header`,
  container: `${PREFIX}-container`,
};

const StyledBox = styled(Box)((
    {
      theme
    }
  ) => ({
    [`& .${classes.image}`]: {
        width:'200px',
        height:'200px',
        [theme.breakpoints.down('sm')]: {
            width:'100px',
            height:'100px',
          },
    },
    [`& .${classes.span}`]: {
        color:'black',
        fontSize:'20px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px'
          },
    },
    [`& .${classes.para}`]: {
        color:'green',
        fontSize:'20px',
        fontWeight:'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize:'14px'
          },
    },
    [`& .${classes.header}`]: {
        fontSize:'40px',
        fontWeight:'bolder',
        fontStyle:'italic',
        [theme.breakpoints.down('sm')]: {
            fontSize:'20px'
          },
    },
    [`& .${classes.container}`]: {
        padding:'20px',
        [theme.breakpoints.down('sm')]: {
            padding:'10px'
          },
    },


}));

const page = () => {
  return (
    <StyledBox sx={{marginTop:'100px'}}>
        <Grid container>
            <Grid className={classes.container} container item xs={12} md={6} alignItems="center" justifyContent="center">
                {/* align heading to the center */}
                <Typography className={classes.header}>Just <span style={{color:'green'}}>Tap</span> Features</Typography>
                <p className={classes.para}><span className={classes.span}>Entry Fee: </span> Each player pays a $1 entry fee to start the game, contributing to the daily prize pool.</p>
                <p className={classes.para}><span className={classes.span}>Scoring and Leaderboard: </span> Points are awarded based on the speed and accuracy of button presses. The daily leaderboard displays the top performers.</p>
                <p className={classes.para}><span className={classes.span}>Pepe-Press Challenge: </span> Players engage in timed challenge where they must tap or press Pepe button as quickly as possible after it turns green on the screen. The speed and accuracy of their reaction determine their score.</p>
                <Grid container item xs={12} justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Image src={Info3} className={classes.image}/>
                </Grid>
                <Grid item xs={4}>
                    <Image src={arrow} className={classes.image}/>
                </Grid>
                <Grid item xs={4}>
                    <Image src={Info1} className={classes.image} />
                </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.container} container item xs={12} md={6} alignItems="center" justifyContent="center">
                <p className={classes.para}><span className={classes.span}>Fairness and Transparency: </span> The game ensures fairness in challenges, scoring, and distribution, displaying results transparently using a secure system to verify scores and prevent cheating.</p>
                {/* align this image to the center */}
                <Image src={Info4} width={300} height={300}/>
                <p className={classes.para}><span className={classes.span}>User-Friendly Interface: </span> The game should feature an intuitive interface displaying real-time leaderboard rankings, current prize pool amounts, and clear instructions for gameplay.</p>
                <p className={classes.para}><span className={classes.span}>Social Sharing and Notifications: </span> Players may have the option to share their achievements on social media platforms, encouraging competition and engagement. Regular notifications about winners and prize pool updates can also boost participation.</p>
                <Grid container item xs={12} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8}>
                    <h2>Prizepool Distribution</h2>
                    <p className={classes.para}><span className={classes.span}>Top Player(50%): </span> At the end of each day, the player who tops the leaderboard wins 50% of the accumulated prize pool generated by the entry fees.</p>
                    <p className={classes.para}><span className={classes.span}>NFT Holders(40%): </span> 40% of the prize pool goes to holders of Just Pepe NFT</p>
                    <p className={classes.para}><span className={classes.span}>Team(10%): </span> 10% of the prize pool is allocated to the development team.</p>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src={Info2} width={300} height={300}/>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        </StyledBox>
  )
}

export default page