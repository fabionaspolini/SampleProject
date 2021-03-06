import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {title: 'Dashboard', icon: 'home-outline', link: '/pages/dashboard', home: true},
  {title: 'FEATURES', group: true},
  {
    title: 'Cadastros',
    icon: 'layers',
    children: [
      {title: 'Cidades', link: '/pages/cadastros/cidades'},
      {title: 'Parceiros de negócios', link: '/pages/cadastros/parceiros'},
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {title: 'Login', link: '/auth/login'},
      {title: 'Register', link: '/auth/register'},
      {title: 'Request Password', link: '/auth/request-password'},
      {title: 'Reset Password', link: '/auth/reset-password'},
    ],
  },
];
