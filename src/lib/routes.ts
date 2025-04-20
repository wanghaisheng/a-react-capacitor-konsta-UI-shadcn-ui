import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import ProtectedRoute from './ProtectedRoute';

const Home = lazy(() => import('../views/Home'));
const Login = lazy(() => import('../views/Login'));
const Register = lazy(() => import('../views/Register'));
const Onboarding = lazy(() => import('../views/Onboarding'));
const Dashboard = lazy(() => import('../views/Dashboard'));
const WishSetting = lazy(() => import('../views/WishSetting'));
const Progress = lazy(() => import('../views/Progress'));
const Leaderboard = lazy(() => import('../views/Leaderboard'));
const Profile = lazy(() => import('../views/Profile'));
const Community = lazy(() => import('../views/Community'));
const Statistics = lazy(() => import('../views/Statistics'));
const WritingPractice = lazy(() => import('../views/WritingPractice'));
const About = lazy(() => import('../views/About'));
const Paywall = lazy(() => import('../views/Paywall'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
  {
    path: '/wish-setting',
    element: <ProtectedRoute><WishSetting /></ProtectedRoute>,
  },
  {
    path: '/progress',
    element: <ProtectedRoute><Progress /></ProtectedRoute>,
  },
  {
    path: '/leaderboard',
    element: <ProtectedRoute><Leaderboard /></ProtectedRoute>,
  },
  {
    path: '/profile',
    element: <ProtectedRoute><Profile /></ProtectedRoute>,
  },
  {
    path: '/community',
    element: <ProtectedRoute><Community /></ProtectedRoute>,
  },
  {
    path: '/statistics',
    element: <ProtectedRoute><Statistics /></ProtectedRoute>,
  },
  {
    path: '/writing-practice',
    element: <ProtectedRoute><WritingPractice /></ProtectedRoute>,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/paywall',
    element: <ProtectedRoute><Paywall /></ProtectedRoute>,
  },
]; 