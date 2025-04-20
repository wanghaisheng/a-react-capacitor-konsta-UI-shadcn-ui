import { lazy } from 'react';

// 路由懒加载配置
export const lazyRoutes = {
  Home: lazy(() => import('../views/Home')),
  Dashboard: lazy(() => import('../views/Dashboard')),
  WishSetting: lazy(() => import('../views/WishSetting')),
  Progress: lazy(() => import('../views/Progress')),
  Leaderboard: lazy(() => import('../views/Leaderboard')),
  Profile: lazy(() => import('../views/Profile')),
  Community: lazy(() => import('../views/Community')),
  Statistics: lazy(() => import('../views/Statistics')),
  WritingPractice: lazy(() => import('../views/WritingPractice')),
  Paywall: lazy(() => import('../views/Paywall')),
};

// 资源预加载配置
export const preloadResources = [
  '/assets/images/logo.png',
  '/assets/images/avatar-placeholder.png',
  '/assets/fonts/Inter-Regular.woff2',
  '/assets/fonts/Inter-Medium.woff2',
  '/assets/fonts/Inter-Bold.woff2',
];

// 缓存策略配置
export const cacheConfig = {
  // 静态资源缓存
  static: {
    maxAge: 60 * 60 * 24 * 7, // 7天
    staleWhileRevalidate: true,
  },
  // API 响应缓存
  api: {
    maxAge: 60 * 5, // 5分钟
    staleWhileRevalidate: true,
  },
  // 用户数据缓存
  user: {
    maxAge: 60 * 60, // 1小时
    staleWhileRevalidate: true,
  },
};

// 性能优化配置
export const performanceConfig = {
  // 虚拟列表配置
  virtualList: {
    itemHeight: 60, // 列表项高度
    overscan: 5, // 预渲染数量
  },
  // 图片优化配置
  image: {
    quality: 80, // 图片质量
    format: 'webp', // 图片格式
    sizes: [320, 640, 960, 1280], // 响应式图片尺寸
  },
  // 动画配置
  animation: {
    duration: 300, // 动画时长
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // 动画曲线
  },
}; 