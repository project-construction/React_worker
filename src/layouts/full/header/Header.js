import React, {useState,useRef} from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
// components
import Profile from './Profile';
import { IconBellRinging, IconMenu } from '@tabler/icons';



const Header = (props) => {

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();


  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

          {/* IconButton with Badge */}
          <IconButton
              size="large"
              aria-label="show 11 new notifications"
              color="inherit"
              aria-controls="msgs-menu"
              aria-haspopup="true"
              sx={{
                ...(typeof anchorEl2 === 'object' && {
                  color: 'primary.main',
                }),
              }}
              onClick={() => setModalOpen(true)} // Open the modal when IconButton is clicked
          >
            <Badge variant="dot" color="primary">
              <IconBellRinging size="21" stroke="1.5" />
            </Badge>
          </IconButton>

        <Modal
            isOpen={modalOpen}
            contentLabel="Modal"
            style={{
              content: {
                width: '80%', // Adjust the width as needed
                maxWidth: '800px', // Set a maximum width if desired
                margin: 'auto', // Center the modal horizontally
                zIndex: 1000, // Set a higher z-index value
              },
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999, // Set a z-index for the overlay
              },
            }}
        >
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
              모달 닫기
            </button>
          </div>
        </Modal>

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
{/*          <Button variant="contained" color="primary"  target="_blank" href="https://adminmart.com/product/modernize-react-mui-dashboard-template/">
            Upgrade to Pro
          </Button>*/}
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
