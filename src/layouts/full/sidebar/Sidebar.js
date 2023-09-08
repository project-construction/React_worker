import { useMediaQuery, Box, Drawer } from '@mui/material';
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';

const Sidebar = (props) => {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    const sidebarWidth = '270px';

    // 로컬 스토리지에서 토큰을 가져오는 함수
    const getTokenFromLocalStorage = () => {
        return localStorage.getItem('accessToken'); // 토큰을 저장하는 방식에 따라 수정해야 할 수 있습니다.
    };

    // 토큰을 확인하여 "로그인" 및 "로그아웃" 메뉴 아이템을 업데이트하는 함수
    const updateMenuItems = () => {
        const token = getTokenFromLocalStorage();
        const loginMenuItem = SidebarItems.find(item => item.title === '로그인');
        const logoutMenuItem = SidebarItems.find(item => item.title === '로그아웃');

        if (token) {
            // 토큰이 있는 경우, "로그인"을 숨기고 "로그아웃"을 보이게 합니다.
            if (loginMenuItem) {
                loginMenuItem.hidden = true;
            }
            if (logoutMenuItem) {
                logoutMenuItem.hidden = false;
            }
        } else {
            // 토큰이 없는 경우, "로그아웃"을 숨기고 "로그인"을 보이게 합니다.
            if (loginMenuItem) {
                loginMenuItem.hidden = false;
            }
            if (logoutMenuItem) {
                logoutMenuItem.hidden = true;
            }
        }
    };

    // 페이지가 로드될 때 메뉴 아이템 업데이트 함수를 호출합니다.
    window.addEventListener('load', updateMenuItems);

    if (lgUp) {
        return (
            <Box
                sx={{
                    width: sidebarWidth,
                    flexShrink: 0,
                }}
            >
                {/* ------------------------------------------- */}
                {/* Sidebar for desktop */}
                {/* ------------------------------------------- */}
                <Drawer
                    anchor="left"
                    open={props.isSidebarOpen}
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            width: sidebarWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                >
                    {/* ------------------------------------------- */}
                    {/* Sidebar Box */}
                    {/* ------------------------------------------- */}
                    <Box
                        sx={{
                            height: '100%',
                        }}
                    >
                        {/* ------------------------------------------- */}
                        {/* Logo */}
                        {/* ------------------------------------------- */}
                        <Box px={3}>
                            <Logo />
                        </Box>
                        <Box>
                            {/* ------------------------------------------- */}
                            {/* Sidebar Items */}
                            {/* ------------------------------------------- */}
                            <SidebarItems />
                        </Box>
                    </Box>
                </Drawer>
            </Box>
        );
    }

    return (
        <Drawer
            anchor="left"
            open={props.isMobileSidebarOpen}
            onClose={props.onSidebarClose}
            variant="temporary"
            PaperProps={{
                sx: {
                    width: sidebarWidth,
                    boxShadow: (theme) => theme.shadows[8],
                },
            }}
        >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={2}>
                <Logo />
            </Box>
            {/* ------------------------------------------- */}
            {/* Sidebar For Mobile */}
            {/* ------------------------------------------- */}
            <SidebarItems />
        </Drawer>
    );
};

export default Sidebar;
