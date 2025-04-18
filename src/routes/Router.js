import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import PrivateRoute from '../views/dashboard/components/PrivateRoute';
import Mole from "../views/dashboard/components/UnityContents/Mole"; // PrivateRoute 컴포넌트 경로를 수정해야 합니다.

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
const DoorLock = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/DoorLock')));
const Nback = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/Nback')));
const Hammering = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/Hammering')));
const Simon = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/Simon')));
const TrafficLight = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/TrafficLight')));
const Puzzle = Loadable(lazy(() => import('../views/dashboard/components/UnityContents/Puzzle')));
const Kdas = Loadable(lazy(() => import('../views/dashboard/components/Kdas')));
const Signature = Loadable(lazy(()=>import('../views/dashboard/components/Signature')));
const Logout = Loadable(lazy(()=>import('../views/dashboard/logout')));
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
      { path: '/doorlock', exact: true, element: <DoorLock /> },
      { path: '/nback', exact: true, element: <Nback/> },
      { path: '/hammering', exact: true, element: <Hammering /> },
      { path: '/puzzle', exact: true, element: <Puzzle /> },
      { path: '/simon', exact: true, element: <Simon/> },
      { path: '/mole', exact: true, element: <Mole/> },
      { path: '/trafficlight', exact: true, element: <TrafficLight /> },
      { path: '/survey', exact: true, element: <Kdas /> },
      {path: '/signature',exact:true,element: <Signature/>},
      {path: '/logout',exact:true,element: <Logout/>},
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
