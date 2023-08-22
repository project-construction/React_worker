import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import PrivateRoute from '../views/dashboard/components/PrivateRoute'; // PrivateRoute 컴포넌트 경로를 수정해야 합니다.

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Memory = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/memory')));
const Memory2 = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/memory2')));
const Attention = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/attention')));
const Attention2 = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/attention2')));
const Concentration = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/concentration')));
const Concentration2 = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/concentration2')));
const Kdas = Loadable(lazy(() => import('../views/dashboard/components/Kdas')));
const Routes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },

      // Remove the PrivateRoute components
      { path: '/button1', exact: true, element: <Memory /> },
      { path: '/button2', exact: true, element: <Memory2 /> },
      { path: '/button3', exact: true, element: <Attention /> },
      { path: '/button4', exact: true, element: <Attention2 /> },
      { path: '/button5', exact: true, element: <Concentration /> },
      { path: '/button6', exact: true, element: <Concentration2 /> },
      { path: '/button7', exact: true, element: <Kdas /> }
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Routes;
