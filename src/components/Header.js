'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
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
const drawerWidth = 240;
const navItems = ['Just Tap Game', 'Game Info', 'Memes','Links'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Link href="/" style={{textDecoration:'none'}}>
      <Typography variant="h6" sx={{ my: 2,backgroundColor:'black',padding: '12px 0',color:'white' }}>
        Just Pepe
      </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            {index === 0 ? (
              <Link style={{textDecoration:'none'}} href="/just-tap-game" >
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
            ) : index===1? (
              <Link style={{textDecoration:'none'}} href="/game-info" >
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
            ) :index===2? (
              <Link style={{textDecoration:'none'}} href="/memes" >
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
            ):index===3? (
              <Link style={{textDecoration:'none'}} href="/links" >
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
            ):(
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" style={{textDecoration:'none',flexGrow:0.5}}>
          <Typography
            variant="h1"
            component="div"
            sx={{
              display: { xs: 'none', md: 'block' },
              padding: '12px 0', 
              flexGrow:0.1,
              color:'white',
              fontFamily:'Take Looks'
            }}
          >
            Just Pepe
          </Typography>
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:"center",flexGrow:1 }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' },mx:'auto' }}>
            {navItems.map((item, index) => (
                <React.Fragment key={item}>
                  {index === 0 ? (
                    <Link href="/just-tap-game" passHref>
                      <Button sx={{ color: '#fff', fontWeight: 'bolder',fontFamily:'COPPERPLATE', marginRight: index < navItems.length - 1 ? 5 : 0 }}>
                        {item}
                      </Button>
                    </Link>
                  ) : index===1? (
                    <Link href="/game-info" passHref>
                      <Button sx={{ color: '#fff', fontWeight: 'bolder',fontFamily:'COPPERPLATE', marginRight: index < navItems.length - 1 ? 5 : 0 }}>
                        {item}
                      </Button>
                    </Link>
            ) :index===2? (
                    <Link href="/memes" passHref>
                      <Button sx={{ color: '#fff', fontWeight: 'bolder',fontFamily:'COPPERPLATE', marginRight: index < navItems.length - 1 ? 5 : 0 }}>
                        {item}
                      </Button>
                    </Link>
            ): index===3? (
                    <Link href="/links" passHref>
                      <Button sx={{ color: '#fff', fontWeight: 'bolder',fontFamily:'COPPERPLATE', marginRight: index < navItems.length - 1 ? 5 : 0 }}>
                        {item}
                      </Button>
                    </Link>
            ):(
                    <Button sx={{ color: '#fff', fontWeight: 'bolder',fontFamily:'COPPERPLATE', marginRight: index < navItems.length - 1 ? 5 : 0 }}>
                      {item}
                    </Button>
                  )}
                </React.Fragment>
              ))}
          </Box>
          <Box>
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
                className='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium mui-theme-1pcjehz-MuiButtonBase-root-MuiButton-root'
                variant='outlined'
                sx={{color:'#37d36c !important', marginRight: 1,borderColor:'#37d36c !important',fontWeight:'bolder !important',borderRadius:'10px !important' }}
                theme={"dark"}
                modalSize={"wide"}
              />
            </ThirdwebProvider>
            </Box>
          <Box>
       <Link style={{textDecoration:'none'}} href="/leaderboard">
      <Button variant='outlined' sx={{color:'#37d36c', marginRight: 1,borderColor:'#37d36c',fontWeight:'bolder',borderRadius:'10px' }}>Leaderboard</Button>
      </Link>
    </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;