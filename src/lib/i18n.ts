import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        loading: "Loading...",
        error: "Error",
        retry: "Retry",
        cancel: "Cancel",
        confirm: "Confirm",
        save: "Save",
        delete: "Delete",
        edit: "Edit"
      },
      auth: {
        login: "Login",
        register: "Register",
        logout: "Logout",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        forgotPassword: "Forgot Password?"
      },
      home: {
        title: "Home",
        welcome: "Welcome to {{appName}}",
        greeting: "Hello",
        guest: "Guest",
        welcomeBack: "Welcome back!",
        streak: "Current Streak",
        days: "days",
        todayTasks: "Today's Tasks",
        todayProgress: "Today's Progress",
        yourAffirmations: "Your Affirmations",
        viewAll: "View All",
        morning: "Morning",
        afternoon: "Afternoon",
        evening: "Evening",
        completeNow: "Complete Now"
      },
      nav: {
        home: "Home",
        wishes: "Wishes",
        progress: "Progress",
        leaderboard: "Leaderboard",
        profile: "Profile"
      },
      dashboard: {
        title: "Dashboard",
        stats: {
          totalWishes: "Total Wishes",
          completedWishes: "Completed Wishes",
          inProgressWishes: "In Progress Wishes"
        }
      },
      wish: {
        title: "Wish Setting",
        create: "Create Wish",
        edit: "Edit Wish",
        delete: "Delete Wish",
        name: "Wish Name",
        description: "Description",
        deadline: "Deadline",
        priority: "Priority",
        status: "Status"
      },
      progress: {
        title: "Progress",
        total: "Total Progress",
        today: "Today's Progress",
        week: "This Week",
        month: "This Month"
      },
      leaderboard: {
        title: "Leaderboard",
        rank: "Rank",
        name: "Name",
        score: "Score",
        progress: "Progress"
      },
      profile: {
        title: "Profile",
        basicInfo: "Basic Information",
        settings: "Settings",
        theme: "Theme",
        language: "Language",
        notifications: "Notifications"
      },
      community: {
        title: "Community",
        posts: "Posts",
        comments: "Comments",
        likes: "Likes",
        share: "Share"
      },
      statistics: {
        title: "Statistics",
        overview: "Overview",
        trends: "Trends",
        analysis: "Analysis"
      },
      writing: {
        title: "Writing Practice",
        start: "Start Writing",
        continue: "Continue Writing",
        save: "Save Draft",
        publish: "Publish"
      },
      about: {
        title: "About",
        version: "Version",
        description: "Description",
        contact: "Contact Us"
      },
      paywall: {
        title: "Premium Features",
        subscribe: "Subscribe Now",
        features: "Premium Features",
        price: "Price",
        period: "Period"
      }
    }
  },
  zh: {
    translation: {
      common: {
        loading: "加载中...",
        error: "错误",
        retry: "重试",
        cancel: "取消",
        confirm: "确认",
        save: "保存",
        delete: "删除",
        edit: "编辑"
      },
      auth: {
        login: "登录",
        register: "注册",
        logout: "退出",
        email: "邮箱",
        password: "密码",
        confirmPassword: "确认密码",
        forgotPassword: "忘记密码？"
      },
      home: {
        title: "首页",
        welcome: "欢迎使用 {{appName}}",
        greeting: "你好",
        guest: "访客",
        welcomeBack: "欢迎回来！",
        streak: "当前连续天数",
        days: "天",
        todayTasks: "今日任务",
        todayProgress: "今日进度",
        yourAffirmations: "你的肯定语",
        viewAll: "查看全部",
        morning: "早晨",
        afternoon: "下午",
        evening: "晚上",
        completeNow: "立即完成"
      },
      nav: {
        home: "首页",
        wishes: "愿望",
        progress: "进度",
        leaderboard: "排行榜",
        profile: "个人资料"
      },
      dashboard: {
        title: "仪表盘",
        stats: {
          totalWishes: "总愿望数",
          completedWishes: "已完成愿望",
          inProgressWishes: "进行中愿望"
        }
      },
      wish: {
        title: "愿望设置",
        create: "创建愿望",
        edit: "编辑愿望",
        delete: "删除愿望",
        name: "愿望名称",
        description: "描述",
        deadline: "截止日期",
        priority: "优先级",
        status: "状态"
      },
      progress: {
        title: "进度",
        total: "总进度",
        today: "今日进度",
        week: "本周进度",
        month: "本月进度"
      },
      leaderboard: {
        title: "排行榜",
        rank: "排名",
        name: "名称",
        score: "分数",
        progress: "进度"
      },
      profile: {
        title: "个人资料",
        basicInfo: "基本信息",
        settings: "设置",
        theme: "主题",
        language: "语言",
        notifications: "通知"
      },
      community: {
        title: "社区",
        posts: "帖子",
        comments: "评论",
        likes: "点赞",
        share: "分享"
      },
      statistics: {
        title: "统计",
        overview: "概览",
        trends: "趋势",
        analysis: "分析"
      },
      writing: {
        title: "写作练习",
        start: "开始写作",
        continue: "继续写作",
        save: "保存草稿",
        publish: "发布"
      },
      about: {
        title: "关于",
        version: "版本",
        description: "描述",
        contact: "联系我们"
      },
      paywall: {
        title: "高级功能",
        subscribe: "立即订阅",
        features: "高级功能",
        price: "价格",
        period: "周期"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 