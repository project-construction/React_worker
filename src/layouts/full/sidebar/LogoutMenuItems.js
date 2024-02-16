import {
    IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconLogout, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const LogoutMenuitems = [
    {
        navlabel: true,
        subheader: 'Main',
    },

    {
        id: uniqueId(),
        title: 'Dashboard',
        icon: IconLayoutDashboard,
        href: '/dashboard',
    },
    {
        id: uniqueId(),
        title: 'Login',
        icon: IconLogin,
        href: '/auth/login',
    },
    {
        id: uniqueId(),
        title: 'SignUp',
        icon: IconUserPlus,
        href: '/auth/register',
    },

];

export default LogoutMenuitems;
