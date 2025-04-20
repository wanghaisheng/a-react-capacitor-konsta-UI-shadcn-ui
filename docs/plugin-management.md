# Capacitor插件管理指南

## 已集成插件

### 1. 核心插件
- `@capacitor/core`: 核心功能
- `@capacitor/app`: 应用生命周期管理
- `@capacitor/haptics`: 触觉反馈
- `@capacitor/keyboard`: 键盘管理
- `@capacitor/status-bar`: 状态栏管理
- `@capacitor/storage`: 本地存储

### 2. 功能插件
- `@capacitor/camera`: 相机功能
- `@capacitor/filesystem`: 文件系统
- `@capacitor/geolocation`: 地理位置
- `@capacitor/local-notifications`: 本地通知
- `@capacitor/network`: 网络状态

## 插件集成流程

### 1. 安装插件
```bash
# 安装新插件
pnpm add @capacitor/plugin-name

# 同步到原生项目
pnpm cap sync
```

### 2. 权限配置

#### Android
```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

#### iOS
```xml
<!-- ios/App/App/Info.plist -->
<key>NSCameraUsageDescription</key>
<string>需要相机权限以拍照</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>需要位置权限以提供定位服务</string>
```

### 3. 插件封装
```typescript
// src/lib/plugins/PluginWrapper.ts
import { Plugin } from '@capacitor/core';

class PluginWrapper {
  private plugin: Plugin;

  constructor(plugin: Plugin) {
    this.plugin = plugin;
  }

  async initialize() {
    // 初始化逻辑
  }

  async checkPermissions() {
    // 权限检查
  }

  async requestPermissions() {
    // 权限请求
  }
}
```

### 4. 使用示例
```typescript
// src/components/FeatureComponent.tsx
import { usePlugin } from '../lib/plugins/PluginWrapper';

const FeatureComponent = () => {
  const plugin = usePlugin('plugin-name');

  useEffect(() => {
    plugin.initialize();
  }, []);

  const handleFeature = async () => {
    await plugin.checkPermissions();
    // 使用插件功能
  };
};
```

## 自定义插件开发

### 1. 创建插件
```bash
# 创建插件项目
npx @capacitor/cli plugin:generate

# 开发插件
cd my-plugin
pnpm install
```

### 2. 插件结构
```
my-plugin/
  ├── src/
  │   ├── web.ts
  │   ├── android/
  │   └── ios/
  ├── package.json
  └── tsconfig.json
```

### 3. 平台实现

#### Web实现
```typescript
// src/web.ts
export class MyPluginWeb extends WebPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    return options;
  }
}
```

#### Android实现
```java
// src/android/MyPlugin.java
@NativePlugin
public class MyPlugin extends Plugin {
  @PluginMethod
  public void echo(PluginCall call) {
    String value = call.getString("value");
    call.resolve(new JSObject().put("value", value));
  }
}
```

#### iOS实现
```swift
// src/ios/Plugin.swift
@objc(MyPlugin)
public class MyPlugin: CAPPlugin {
  @objc func echo(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.resolve(["value": value])
  }
}
```

## 插件测试

### 1. 单元测试
```typescript
// __tests__/plugin.test.ts
import { MyPlugin } from '../src';

describe('MyPlugin', () => {
  it('should echo value', async () => {
    const result = await MyPlugin.echo({ value: 'test' });
    expect(result.value).toBe('test');
  });
});
```

### 2. 集成测试
```typescript
// __tests__/integration.test.ts
describe('Plugin Integration', () => {
  it('should work with permissions', async () => {
    await plugin.requestPermissions();
    const result = await plugin.echo({ value: 'test' });
    expect(result.value).toBe('test');
  });
});
```

## 常见问题

### 1. 权限问题
- 检查权限配置
- 处理权限拒绝
- 提供降级方案

### 2. 平台兼容性
- 处理平台差异
- 提供统一接口
- 实现优雅降级

### 3. 性能优化
- 减少原生调用
- 批量处理请求
- 缓存结果

### 4. 错误处理
- 捕获原生错误
- 提供错误信息
- 实现重试机制 