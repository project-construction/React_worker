import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconLogout, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';
function removeTokenFromLocalStorage() {
  localStorage.removeItem('accessToken');
}
const LoginMenuitems = [
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
    navlabel: true,
    subheader: '사용자',
  },
  {
    id: uniqueId(),
    title: 'Attendance',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sign',
    icon: IconAperture,
    href: '/signature',
  },
];

export default LoginMenuitems;
