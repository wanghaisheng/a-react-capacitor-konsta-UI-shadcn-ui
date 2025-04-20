import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // 通用
      common: {
        loading: 'Loading...',
        error: 'Error',
        retry: 'Retry',
        cancel: 'Cancel',
        confirm: 'Confirm',
        save: 'Save',
        delete: 'Delete',
        edit: 'Edit',
      },
      // 认证
      auth: {
        login: 'Login',
        register: 'Register',
        logout: 'Logout',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        forgotPassword: 'Forgot Password?',
      },
      // 首页
      home: {
        title: 'Home',
        welcome: 'Welcome to {{appName}}',
      },
      // 仪表盘
      dashboard: {
        title: 'Dashboard',
        stats: {
          totalWishes: 'Total Wishes',
          completedWishes: 'Completed Wishes',
          inProgressWishes: 'In Progress Wishes',
        },
      },
      // 愿望设置
      wish: {
        title: 'Wish Setting',
        create: 'Create Wish',
        edit: 'Edit Wish',
        delete: 'Delete Wish',
        name: 'Wish Name',
        description: 'Description',
        deadline: 'Deadline',
        priority: 'Priority',
        status: 'Status',
      },
      // 进度
      progress: {
        title: 'Progress',
        total: 'Total Progress',
        today: 'Today\'s Progress',
        week: 'This Week',
        month: 'This Month',
      },
      // 排行榜
      leaderboard: {
        title: 'Leaderboard',
        rank: 'Rank',
        name: 'Name',
        score: 'Score',
        progress: 'Progress',
      },
      // 个人资料
      profile: {
        title: 'Profile',
        basicInfo: 'Basic Information',
        settings: 'Settings',
        theme: 'Theme',
        language: 'Language',
        notifications: 'Notifications',
      },
      // 社区
      community: {
        title: 'Community',
        posts: 'Posts',
        comments: 'Comments',
        likes: 'Likes',
        share: 'Share',
      },
      // 统计
      statistics: {
        title: 'Statistics',
        overview: 'Overview',
        trends: 'Trends',
        analysis: 'Analysis',
      },
      // 写作练习
      writing: {
        title: 'Writing Practice',
        start: 'Start Writing',
        continue: 'Continue Writing',
        save: 'Save Draft',
        publish: 'Publish',
      },
      // 关于
      about: {
        title: 'About',
        version: 'Version',
        description: 'Description',
        contact: 'Contact Us',
      },
      // 付费墙
      paywall: {
        title: 'Premium Features',
        subscribe: 'Subscribe Now',
        features: 'Premium Features',
        price: 'Price',
        period: 'Period',
      },
    },
  },
  zh: {
    translation: {
      // 通用
      common: {
        loading: '加载中...',
        error: '错误',
        retry: '重试',
        cancel: '取消',
        confirm: '确认',
        save: '保存',
        delete: '删除',
        edit: '编辑',
      },
      // 认证
      auth: {
        login: '登录',
        register: '注册',
        logout: '退出',
        email: '邮箱',
        password: '密码',
        confirmPassword: '确认密码',
        forgotPassword: '忘记密码？',
      },
      // 首页
      home: {
        title: '首页',
        welcome: '欢迎使用 {{appName}}',
      },
      // 仪表盘
      dashboard: {
        title: '仪表盘',
        stats: {
          totalWishes: '总愿望数',
          completedWishes: '已完成愿望',
          inProgressWishes: '进行中愿望',
        },
      },
      // 愿望设置
      wish: {
        title: '愿望设置',
        create: '创建愿望',
        edit: '编辑愿望',
        delete: '删除愿望',
        name: '愿望名称',
        description: '描述',
        deadline: '截止日期',
        priority: '优先级',
        status: '状态',
      },
      // 进度
      progress: {
        title: '进度',
        total: '总进度',
        today: '今日进度',
        week: '本周进度',
        month: '本月进度',
      },
      // 排行榜
      leaderboard: {
        title: '排行榜',
        rank: '排名',
        name: '名称',
        score: '分数',
        progress: '进度',
      },
      // 个人资料
      profile: {
        title: '个人资料',
        basicInfo: '基本信息',
        settings: '设置',
        theme: '主题',
        language: '语言',
        notifications: '通知',
      },
      // 社区
      community: {
        title: '社区',
        posts: '帖子',
        comments: '评论',
        likes: '点赞',
        share: '分享',
      },
      // 统计
      statistics: {
        title: '统计',
        overview: '概览',
        trends: '趋势',
        analysis: '分析',
      },
      // 写作练习
      writing: {
        title: '写作练习',
        start: '开始写作',
        continue: '继续写作',
        save: '保存草稿',
        publish: '发布',
      },
      // 关于
      about: {
        title: '关于',
        version: '版本',
        description: '描述',
        contact: '联系我们',
      },
      // 付费墙
      paywall: {
        title: '高级功能',
        subscribe: '立即订阅',
        features: '高级功能',
        price: '价格',
        period: '周期',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 