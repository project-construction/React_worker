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
    subheader: '메인',
  },

  {
    id: uniqueId(),
    title: '대시보드',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: '사용자',
  },
  {
    id: uniqueId(),
    title: '출석',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: '전자서명',
    icon: IconAperture,
    href: '/signature',
  },
];

export default LoginMenuitems;