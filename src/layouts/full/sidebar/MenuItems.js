import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
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
  /*  {
      navlabel: true,
      subheader: 'Utilities',
    },
    {
      id: uniqueId(),
      title: 'Typography',
      icon: IconTypography,
      href: '/ui/typography',
    },
    {
      id: uniqueId(),
      title: 'Shadow',
      icon: IconCopy,
      href: '/ui/shadow',
    },*/
  {
    navlabel: true,
    subheader: '사용자',
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
  {
    navlabel: true,
    subheader: '기타',
  },
  {
    id: uniqueId(),
    title: '출석',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: '예비',
    icon: IconAperture,
    href: '/sample-page',
  },
];

export default Menuitems;