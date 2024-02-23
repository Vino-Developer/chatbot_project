import * as React from 'react';
import { PaletteMode} from '@mui/material';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { useNavigate } from 'react-router-dom';



const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigate=useNavigate();
  const scrollToSection = (sectionId: string) => {
  
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  mode==="dark"?'https://www.fireflink.com/static/media/fireflink-white-logo.02f6222e30b5718ce26c.png':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAABOCAMAAAAejDH9AAAABlBMVEX///9DR60wQeZwAAAD7klEQVR4nO2ZyXLjQAxDrf//6VQlh1hqAAS1NBM3cbS4PBAZxal5vX60/ejVKtH2q2qUJbXtVE2znrajqoFW0xBARzBV4P4dwUzhADqCWWL37wQmiQfQCUxR379Wff5i9fmL1ecvVp+/WH3+YpkBdDJPybp//+N4Tk4A/X56UEYA/SviSYUB9C/phxXcd/gl3RHcLHldcH43AtL6NgFMlPXucHd//F/hCjBRurHK7yfKaWRyXgA22DYrAP6jqksHjrM+Zwew22jUxfsvBkBPJQMYMbhL/x5zAtjM4bMCYD/YKgBNMZBoEzqCuBWMchcaVcYkNPnZAAzQTAAygrgRDHL3GUXGIDA4FQB5tfAAYDex6AUgIojbYhi6zSgyBoHBuQDwuyWZHh3pBUATiLvAFHebUWPMGedmA4AvF/ZJ3DmQaBM2POkBM9xdRo0xZ5ybDgD9HJNPcJ8dgLJkwquIRBNaFQ/nXxgTiHJxRHT4hJ4Mzzs+I9sFfsq//9XNHT4tAEq0/4QfDI47PGPFij/l3//jxR3+pwOgoPiZKucGUv6DV4th15meRpSA+0eBF3EsNG33TBhTBlL+/3UAx1c8aFa3AsPenwXWuIOU/wsBMBAJZyJKwP1Dt3RcpR4nvmLm3d30O4CBSDgTUQLuF9ilqQDiw/E+tv+3GLTjgbqVgMT7bwxgy2R1NYBzc0ExaIcDg1YCEu+/MwA9HfGdDSDYensAKXPvIPH+mgCuvYLCrfcFcMrcNjGA6MIhYT4Aw1MHYDCeDcCw9HQAxvB5AQRveYMxFYAyNCsAZ/jEAPT3EceHH4Cyg7vi8hz0bksMPCUA+Y3cc+IFoGaxprg+CU3+MigNAG4574WRyFGMPnSXDSA3/Pm/hCkx9MLvLGzGR7nibqkAhkoMCkjUSdwD+CdyN+X2PxkAQGYAxA13GV5E2L8ewLg+NXxaAOOJnGbeT00gMfPejRxoss7AMjjDIQYgGMNLo7ojqwTkvjgq90+b8EKDywANhziA9ISgNKo7skpAff7bAsCHNMgM1HCIBWgcVhYieAOQHh40G/55E9yqyP5yAKgSwceA/PCg2fAvmgJzDM6gDYd4gDEj3QkoLEB6ddxs+FdNuo7hGbzhEBMw4QUkgOA1ILHD3Rn+VRNYTsjeawzicIgJmCodtiB4CUjcCHeGf9k0rsdktMQAgENcwP2ToPS4BsELQOJFurN77tTsAF526ZUALp2kBZUIoArxs+UHUEX44XIDqOL7eHkBVNEtICuAKrgVZARQhbaGwgCqwFZRFEAV1zLSAVRRLSQVQBXTUhIBtKaoAyhWB1CtDqBYHUC1OoBqdQD16vvX6Au1IyR05Iy1swAAAABJRU5ErkJggg=="
                }
                style={logoStyle}
                alt="logo of sitemark"
              width={"10px"}
              height={'10px'}
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem >
                  <Typography variant="body2" color="text.primary">
                    Features
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography variant="body2" color="text.primary">
                    Testimonials
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('highlights')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Highlights
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('pricing')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Pricing
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
              onClick={()=>navigate("/signin")}
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
               onClick={()=>{navigate("/signup")}}
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem >
                    Features
                  </MenuItem>
                  <MenuItem >
                    Testimonials
                  </MenuItem>
                  <MenuItem >
                    Highlights
                  </MenuItem>
                  <MenuItem >
                    Pricing
                  </MenuItem>
                  <MenuItem >FAQ</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                     onClick={()=>navigate("/signup")}
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      onClick={()=>navigate("/sign-in")}
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;