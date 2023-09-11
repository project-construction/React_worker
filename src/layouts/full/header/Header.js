import React, {useState,useRef} from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
// components
import Profile from './Profile';
import { IconBellRinging, IconMenu } from '@tabler/icons';
import "./modal.css";


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
            <p>리액트로 모달 구현하기할말이많은데</p>
            <p>정리가잘안돼</p>
            <p>도와줘SOS</p>
            <p>하나둘셋넷</p>
            <p>어떤표현법을 써야만 어쩌구쩌쩌구
            마음을 꺼내서 너에게 복사해
            붙여야 하는건가</p>
              <p>어느 멋진 날에</p>
              <p>나에게 짠 하고 나타나선</p>
              <p>내 맘을 취하고 시선을 빼앗고 넌 욕심쟁이</p>
              <p>내가 하고 싶었던 말은</p>
              <p>Don't take this the wrong way</p>
              <p>But 너 말곤 안 보여</p>
              <p>Your so ice ice baby</p>
              <p>At the same time 넌 날 녹여</p>
              <p>Just can't get enough</p>
              <p>날 너에게 숨김없이 보여 주고 싶어 oh</p>
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
