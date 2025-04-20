import { Capacitor } from '@capacitor/core';
import { App, AppInfo } from '@capacitor/app';
import { Network, NetworkStatus } from '@capacitor/network';

// 性能指标收集
export const collectMetrics = async () => {
  const metrics = {
    platform: Capacitor.getPlatform(),
    appVersion: await App.getInfo().then((info: AppInfo) => info.version),
    networkStatus: await Network.getStatus(),
    timestamp: new Date().toISOString(),
    performance: {
      timing: performance.timing,
      navigation: performance.getEntriesByType('navigation')[0],
      resources: performance.getEntriesByType('resource'),
    },
  };

  return metrics;
};

// 错误监控
export const setupErrorMonitoring = () => {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error('Global error:', {
      message,
      source,
      lineno,
      colno,
      error,
    });
  };

  window.onunhandledrejection = (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  };
};

// 网络监控
export const setupNetworkMonitoring = () => {
  Network.addListener('networkStatusChange', (status: NetworkStatus) => {
    console.log('Network status changed:', status);
  });
};

// 应用生命周期监控
export const setupAppMonitoring = () => {
  App.addListener('appStateChange', ({ isActive }: { isActive: boolean }) => {
    console.log('App state changed:', { isActive });
  });
};

// 性能监控初始化
export const initMonitoring = () => {
  setupErrorMonitoring();
  setupNetworkMonitoring();
  setupAppMonitoring();
}; 