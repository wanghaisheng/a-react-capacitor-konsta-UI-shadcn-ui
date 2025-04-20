import { useEffect, useRef, useState } from 'react';

// 性能监控
export const usePerformanceMonitor = () => {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`Performance Entry: ${entry.name}`, entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'resource'] });
    return () => observer.disconnect();
  }, []);
};

// 懒加载组件
export const lazyLoad = (importFn: () => Promise<any>) => {
  return () => {
    const ref = useRef<Promise<any>>();

    if (!ref.current) {
      ref.current = importFn().then((module) => module.default);
    }

    return ref.current;
  };
};

// 虚拟列表
export const useVirtualList = <T>(items: T[], itemHeight: number, containerHeight: number) => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount, items.length);

  const visibleItems = items.slice(startIndex, endIndex);
  const totalHeight = items.length * itemHeight;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const newStartIndex = Math.floor(scrollTop / itemHeight);
        setStartIndex(newStartIndex);
      }
    };

    containerRef.current?.addEventListener('scroll', handleScroll);
    return () => containerRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    containerRef,
    visibleItems,
    totalHeight,
    startIndex,
    endIndex,
  };
};

// 缓存管理
export const useCache = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

// 防抖
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

// 节流
export const useThrottle = <T>(value: T, limit: number) => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRun.current >= limit) {
        setThrottledValue(value);
        lastRun.current = Date.now();
      }
    }, limit - (Date.now() - lastRun.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}; 