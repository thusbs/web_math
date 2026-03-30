# Website Performance Optimization

静态网站性能优化系统，用于优化图片、字体、CSS、JavaScript 等静态资源。

## 功能特性

- 🖼️ **图片优化**: 压缩、WebP 转换、响应式图片生成
- 🔤 **字体优化**: 字体子集化、预加载、font-display 策略
- 🎨 **CSS 优化**: 压缩、移除未使用样式、Critical CSS 提取
- ⚡ **JavaScript 优化**: 压缩、tree-shaking、代码分割
- 📦 **缓存策略**: 内容哈希、长期缓存配置
- 📊 **性能监控**: Lighthouse 集成、性能报告生成

## 快速开始

### 安装依赖

```bash
npm install
```

### 构建命令

```bash
# 生产构建
npm run build

# 开发模式
npm run dev

# 清理输出目录
npm run clean

# 性能分析
npm run analyze
```

## 配置

编辑 `config/optimization.config.ts` 文件来自定义优化参数：

```typescript
export const defaultConfig: OptimizationConfig = {
  images: {
    quality: 82,
    formats: ['webp', 'jpeg', 'png'],
    // ...
  },
  // ...
};
```

## 项目结构

```
.
├── src/                    # 源代码
│   ├── types/             # TypeScript 类型定义
│   └── cli.ts             # CLI 入口文件
├── config/                # 配置文件
│   └── optimization.config.ts
├── dist/                  # 构建输出（自动生成）
├── package.json
└── tsconfig.json
```

## 性能目标

- Lighthouse 性能评分: ≥ 90
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Total Blocking Time (TBT): < 200ms

## License

MIT
