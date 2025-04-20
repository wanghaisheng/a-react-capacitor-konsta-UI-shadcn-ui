# 测试与发布指南

## 测试规范

### 1. 测试文件组织
```
src/
  ├── components/
  │   ├── Component.tsx
  │   └── Component.test.tsx
  ├── views/
  │   ├── View.tsx
  │   └── View.test.tsx
  └── lib/
      ├── utils.ts
      └── utils.test.ts
```

### 2. 测试类型与要求

#### 单元测试
- 使用 Vitest 作为测试框架
- 测试文件命名：`*.test.ts` 或 `*.test.tsx`
- 覆盖率要求：
  - 语句覆盖率 > 80%
  - 分支覆盖率 > 70%
  - 函数覆盖率 > 85%

#### 集成测试
- 使用 React Testing Library
- 测试用户交互流程
- 测试组件组合
- 测试数据流

#### 端到端测试
- 使用 Playwright
- 测试关键用户流程
- 测试跨平台兼容性
- 测试性能指标

### 3. Mock策略
```typescript
// 示例：API Mock
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json({ data: 'mock data' }))
  })
)
```

### 4. 测试环境
- 开发环境：本地测试
- 预发布环境：集成测试
- 生产环境：监控和告警

## 发布流程

### 1. 版本管理
- 遵循语义化版本 (SemVer)
- 主版本号：不兼容的API修改
- 次版本号：向下兼容的功能性新增
- 修订号：向下兼容的问题修正

### 2. 构建流程
```bash
# 开发环境构建
pnpm build:dev

# 生产环境构建
pnpm build:prod

# 移动端构建
pnpm build:android
pnpm build:ios
```

### 3. 发布检查清单
- [ ] 所有测试通过
- [ ] 代码审查完成
- [ ] 文档更新
- [ ] 版本号更新
- [ ] 变更日志更新
- [ ] 依赖检查
- [ ] 性能测试通过

### 4. 移动端发布
#### Android
- 签名配置检查
- 版本号更新
- Google Play 商店发布
- 渠道包生成

#### iOS
- 证书配置检查
- 版本号更新
- App Store 发布
- TestFlight 测试

### 5. 监控与回滚
- 错误监控
- 性能监控
- 用户反馈收集
- 回滚预案执行

## 常见问题处理

### 1. 测试相关问题
- 测试覆盖率不足
- 测试环境不一致
- 测试数据管理
- 性能测试失败

### 2. 发布相关问题
- 构建失败
- 证书问题
- 商店审核
- 版本回滚

### 3. 移动端特定问题
- 原生功能兼容性
- 权限问题
- 性能问题
- 离线功能 