# 项目结构文档

## 目录结构

```
├── src/                    # 源代码目录
│   ├── App.tsx            # 应用主入口组件
│   ├── main.tsx           # 应用入口文件
│   ├── app.css            # 全局样式文件
│   ├── lib/               # 工具库
│   │   └── utils.ts       # 通用工具函数
│   └── views/             # 页面组件
│       ├── Home.tsx       # 首页组件
│       └── View.tsx       # 其他视图组件
├── android/               # Android平台相关代码
│   └── app/              # Android应用代码
│       └── src/
│           └── main/     # Android主代码目录
├── ios/                  # iOS平台相关代码
│   └── App/             # iOS应用代码
├── public/              # 静态资源目录
├── docs/               # 项目文档目录
└── configuration files  # 配置文件
```

## 关键文件说明

### 核心文件
- `src/App.tsx`: 应用主组件，包含路由配置和主题管理
- `src/main.tsx`: 应用入口文件，初始化React应用
- `src/views/Home.tsx`: 首页组件，包含主要功能界面
- `src/views/View.tsx`: 其他视图组件

### 配置文件
- `capacitor.config.ts`: Capacitor移动应用配置
- `components.json`: shadcn/ui组件配置
- `tailwind.config.js`: Tailwind CSS配置
- `tsconfig.json`: TypeScript配置
- `vite.config.ts`: Vite构建工具配置
- `postcss.config.js`: PostCSS配置

### 平台特定文件
- `android/`: Android平台相关配置和代码
- `ios/`: iOS平台相关配置和代码

### 文档
- `docs/`: 项目文档目录，包含开发指南和规范 