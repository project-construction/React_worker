import {
    IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconLogout, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const LogoutMenuitems = [
    {
        navlabel: true,
        subheader: '메인',
    },

    {
        id: uniqueId(),
        title: '대시보드',
        icon: IconLayoutDashboard,
        href: '/dashboard',
    },
    {
        id: uniqueId(),
        title: '로그인',
        icon: IconLogin,
        href: '/auth/login',
    },
    {
        id: uniqueId(),
        title: '회원가입',
        icon: IconUserPlus,
        href: '/auth/register',
    },

];

export default LogoutMenuitems;