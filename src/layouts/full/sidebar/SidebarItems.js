import React, { useEffect, useState } from 'react';
import { Box, List } from '@mui/material';
import { useLocation } from 'react-router';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import { uniqueId } from 'lodash';
import { IconLogout } from '@tabler/icons';
import LoginMenuitems from './LoginMenuItems';
import LogoutMenuitems from './LogoutMenuItems';

function getTokenFromLocalStorage() {
    return localStorage.getItem('accessToken');
}

const SidebarItems = () => {
    const { pathname } = useLocation();
    const pathDirect = pathname;

    const token = getTokenFromLocalStorage();

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        if (token) {
            // 토큰이 있는 경우 LogoutMenuitems를 렌더링
            const updatedMenuItems = [...LoginMenuitems];
            updatedMenuItems.push({
                id: uniqueId(),
                title: '로그아웃',
                icon: IconLogout,
                href: '/logout',
            });
            setMenuItems(updatedMenuItems);
        } else {
            // 토큰이 없는 경우 LoginMenuitems를 렌더링
            setMenuItems([...LogoutMenuitems]);
        }
    }, [token]);

    return (
        <Box sx={{ px: 3 }}>
            <List sx={{ pt: 0 }} className="sidebarNav">
                {menuItems.map((item) => {
                    if (item.subheader) {
                        return <NavGroup item={item} key={item.subheader} />;
                    } else {
                        return (
                            <NavItem item={item} key={item.id} pathDirect={pathDirect} />
                        );
                    }
                })}
            </List>
        </Box>
    );
};

export default SidebarItems;
