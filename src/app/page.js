'use client';
import { Grid, Stack, Box, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Image from "next/image";
import cartoonImg from "../../public/pepebg2.png";
import cartoonImg2 from "../../public/cartoon2.png";
import color1 from "../../public/pepe1.JPG";
import color2 from "../../public/pepe2.JPG";
import color3 from "../../public/pepe3.JPG";
import color4 from "../../public/pepe4.JPG";
import {
  ThirdwebProvider,
  ConnectWallet,
  // import the wallets you want
  metamaskWallet,
  walletConnect,
  coinbaseWallet,
  trustWallet,
  phantomWallet,
  zerionWallet,
} from "@thirdweb-dev/react";
const PREFIX = 'page';
// #522FA4

const classes = {
  image: `${PREFIX}-image`,
  thumbnail: `${PREFIX}-thumbnail`,
  imageBottomRight: `${PREFIX}-imageBottomRight`,
  arts: `${PREFIX}-arts`,
  thumbnail2: `${PREFIX}-thumbnail2`,
  thumbnail3: `${PREFIX}-thumbnail3`,
  thumbnail4: `${PREFIX}-thumbnail4`,
};

const StyledBox = styled(Box)((
  {
    theme
  }
) => ({
  [`& .${classes.image}`]: {
    width: '85%',
    height: 'auto',
    cursor: 'pointer',
  },

  [`& .${classes.thumbnail}`]: {
    width: '60%',
    height: '80%',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      // margin: '10px',
      width: '70%',
      height: 'auto'
    },
  },

  [`& .${classes.thumbnail2}`]: {
    width: '60%',
    height: '80%',
    marginTop: '-20px',
    marginLeft: '-90px',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10px',
      width: '70%',
      height: 'auto'
    },
  },

  [`& .${classes.thumbnail3}`]: {
    width: '60%',
    height: '80%',
    marginLeft: '45px',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10px',
      width: '70%',
      height: 'auto'
    },
  },

  [`& .${classes.thumbnail4}`]: {
    width: '60%',
    height: '80%',
    marginTop: '-10px',
    marginLeft: '-40px',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10px',
      width: '70%',
      height: 'auto'
    },
  },
  [`& .${classes.imageBottomRight}`]: {
    width: '100%',
    height: 'auto',
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  [`& .${classes.arts}`]: {
    [theme.breakpoints.down('md')]: {
      padding: '10px',
      marginLeft: '15%',
      marginTop: '20%'
    },
  },

}));

export default function Home() {
  const handleSelect = () => {
    console.log('clicked!!');
  };
  return (
    <StyledBox sx={{ marginTop: '100px' }}>
      <Grid container spacing={1} style={{
        background: `url('/cartoon2.png')`,
      }}>
        <Grid item xs={12} md={6} sx={{ position: 'relative',height:'100vh' }}>
          <Image useMap="#workmap" src={cartoonImg} className={classes.image} />
          <map style={{ cursor: 'pointer' }} name="workmap">
            <area shape="rect" coords="422,477,239,314" alt="btn" href="google.com" onClick={handleSelect} />
          </map>
          <Stack sx={{
            position: 'absolute',
            marginTop: '-19vh',
            marginLeft: '48vh'
          }}>
            <ThirdwebProvider
              clientId="5e74f521aded03927839c03d3881b244"
              // activeChain={Injected}
              supportedWallets={[
                metamaskWallet(),
                walletConnect(),
                coinbaseWallet(),
                trustWallet(),
                phantomWallet(),
                zerionWallet(),
              ]}
            >
              <ConnectWallet
                style={{ background: '#522FA4', color: 'white' }}
                theme={"dark"}
                modalSize={"wide"}
              />
            </ThirdwebProvider>
          </Stack>
        </Grid>
        <Grid className={classes.arts} item container xs={12} md={6} spacing={0}>
          <Grid item xs={12} md={6}>
            <Image src={color4} className={classes.thumbnail} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src={color3} alt="ssd" className={classes.thumbnail2} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src={color2} className={classes.thumbnail3} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src={color1} className={classes.thumbnail4} />
          </Grid>
        </Grid>
      </Grid>
      {/* <Image src={cartoonImg2} className={classes.imageBottomRight} /> */}
    </StyledBox>
  );
}
