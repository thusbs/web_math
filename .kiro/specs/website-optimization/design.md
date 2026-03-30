# 设计文档：网站性能优化

## Overview

本设计文档描述了静态网站性能优化系统的技术架构和实现方案。该系统针对数学学术导航网站进行全面的资源优化，包括图片、字体、CSS、JavaScript 等静态资源的压缩、转换和传输优化。

### 设计目标

1. **性能提升**: 将 Lighthouse 性能评分提升至 90 分以上，FCP < 1.5s，LCP < 2.5s，TBT < 200ms
2. **资源优化**: 减少资源体积至少 30%，实现高效的缓存策略
3. **用户体验**: 保持视觉质量和功能完整性，避免布局偏移
4. **开发效率**: 提供自动化构建流程，支持开发和生产模式
5. **可维护性**: 生成优化报告，便于持续监控和改进

### 技术栈选择

- **构建工具**: Vite（快速、现代化的构建工具，支持 ES 模块）
- **图片优化**: Sharp（高性能图片处理库）+ vite-plugin-imagemin
- **CSS 优化**: PostCSS + cssnano + PurgeCSS
- **JavaScript 优化**: Terser（内置于 Vite）+ rollup-plugin-visualizer
- **字体优化**: glyphhanger（字体子集化工具）
- **性能测试**: Lighthouse CI
- **HTML 优化**: html-minifier-terser

### 优化策略概览

1. **图片资源**: 压缩、WebP 转换、响应式图片、懒加载
2. **字体资源**: 子集化、font-display: swap、预加载
3. **CSS 资源**: 压缩、Critical CSS 提取、异步加载
4. **JavaScript 资源**: 压缩、tree-shaking、defer/async
5. **缓存策略**: 内容哈希、长期缓存、CDN 配置
6. **HTML 优化**: 压缩、Critical CSS 内联、资源预加载

## Architecture

### 系统架构

系统采用构建时优化（Build-time Optimization）架构，通过自动化构建流程在部署前完成所有资源优化。

```
┌─────────────────────────────────────────────────────────────┐
│                      Source Files                            │
│  (HTML, CSS, JS, Images, Fonts, Data)                       │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                   Build System (Vite)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Image      │  │    Font      │  │     CSS      │      │
│  │  Optimizer   │  │  Subsetter   │  │  Optimizer   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │      JS      │  │    HTML      │  │   Critical   │      │
│  │  Optimizer   │  │  Optimizer   │  │  CSS Extract │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                  Optimized Output (dist/)                    │
│  - Compressed & hashed assets                                │
│  - WebP images with fallbacks                                │
│  - Subset fonts                                              │
│  - Minified CSS/JS                                           │
│  - Critical CSS inlined                                      │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│              Performance Validation                          │
│  - Lighthouse CI                                             │
│  - Size comparison report                                    │
│  - Performance metrics                                       │
└─────────────────────────────────────────────────────────────┘
```

### 数据流

1. **输入阶段**: 读取源文件（HTML、CSS、JS、图片、字体）
2. **分析阶段**: 分析依赖关系、识别关键资源、检测未使用代码
3. **优化阶段**: 并行执行各类资源优化器
4. **生成阶段**: 生成优化后的文件，添加内容哈希
5. **验证阶段**: 运行性能测试，生成报告

### 模块划分

系统分为以下核心模块：

1. **Asset_Pipeline**: 资源处理管道，协调各优化器
2. **Image_Optimizer**: 图片压缩和格式转换
3. **Font_Subsetter**: 字体子集化
4. **CSS_Optimizer**: CSS 压缩和优化
5. **JS_Optimizer**: JavaScript 压缩和 tree-shaking
6. **HTML_Optimizer**: HTML 压缩和 Critical CSS 内联
7. **Cache_Manager**: 缓存策略管理
8. **Performance_Monitor**: 性能测试和报告生成

## Components and Interfaces

### 1. Asset_Pipeline

资源处理管道，负责协调所有优化器的执行。

```typescript
interface AssetPipeline {
  /**
   * 执行完整的构建流程
   * @param mode - 构建模式：'development' | 'production'
   * @returns 构建结果和性能报告
   */
  build(mode: BuildMode): Promise<BuildResult>;
  
  /**
   * 监听文件变化并重新构建（开发模式）
   */
  watch(): void;
  
  /**
   * 清理输出目录
   */
  clean(): Promise<void>;
}

interface BuildResult {
  success: boolean;
  outputDir: string;
  assets: AssetManifest;
  report: OptimizationReport;
  errors: BuildError[];
}

interface AssetManifest {
  images: ImageAsset[];
  fonts: FontAsset[];
  styles: StyleAsset[];
  scripts: ScriptAsset[];
  html: HtmlAsset[];
}

type BuildMode = 'development' | 'production';
```

### 2. Image_Optimizer

图片优化器，负责图片压缩、格式转换和响应式图片生成。

```typescript
interface ImageOptimizer {
  /**
   * 优化单个图片
   * @param input - 输入图片路径
   * @param options - 优化选项
   * @returns 优化后的图片信息
   */
  optimize(input: string, options: ImageOptimizeOptions): Promise<OptimizedImage>;
  
  /**
   * 批量优化图片
   * @param inputs - 输入图片路径数组
   * @param options - 优化选项
   * @returns 优化后的图片信息数组
   */
  optimizeBatch(inputs: string[], options: ImageOptimizeOptions): Promise<OptimizedImage[]>;
  
  /**
   * 生成响应式图片的多个尺寸
   * @param input - 输入图片路径
   * @param sizes - 目标尺寸数组
   * @returns 不同尺寸的图片信息
   */
  generateResponsive(input: string, sizes: number[]): Promise<ResponsiveImageSet>;
}

interface ImageOptimizeOptions {
  quality: number;           // 压缩质量 (0-100)
  generateWebP: boolean;     // 是否生成 WebP 格式
  generateAvif: boolean;     // 是否生成 AVIF 格式
  responsiveSizes?: number[]; // 响应式图片尺寸
  minSizeForResponsive: number; // 触发响应式图片的最小文件大小（KB）
}

interface OptimizedImage {
  original: string;
  optimized: string;
  webp?: string;
  avif?: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  width: number;
  height: number;
}

interface ResponsiveImageSet {
  original: OptimizedImage;
  variants: Array<{
    width: number;
    path: string;
    size: number;
  }>;
  srcset: string;
  sizes: string;
}
```

### 3. Font_Subsetter

字体子集化工具，提取网站实际使用的字符。

```typescript
interface FontSubsetter {
  /**
   * 分析 HTML 和 CSS 文件，提取使用的字符
   * @param files - 要分析的文件路径数组
   * @returns 使用的字符集
   */
  analyzeUsage(files: string[]): Promise<CharacterSet>;
  
  /**
   * 生成字体子集
   * @param fontPath - 字体文件路径
   * @param characters - 要包含的字符集
   * @returns 子集字体信息
   */
  createSubset(fontPath: string, characters: CharacterSet): Promise<SubsetFont>;
  
  /**
   * 批量处理字体文件
   * @param fonts - 字体文件路径数组
   * @param characters - 要包含的字符集
   * @returns 子集字体信息数组
   */
  createSubsets(fonts: string[], characters: CharacterSet): Promise<SubsetFont[]>;
}

interface CharacterSet {
  characters: string;
  unicodeRanges: string[];
  glyphCount: number;
}

interface SubsetFont {
  original: string;
  subset: string;
  format: 'woff2' | 'woff' | 'ttf';
  originalSize: number;
  subsetSize: number;
  compressionRatio: number;
  glyphCount: number;
}
```

### 4. CSS_Optimizer

CSS 优化器，负责压缩、去除未使用样式和 Critical CSS 提取。

```typescript
interface CSSOptimizer {
  /**
   * 优化 CSS 文件
   * @param input - 输入 CSS 文件路径
   * @param options - 优化选项
   * @returns 优化后的 CSS 信息
   */
  optimize(input: string, options: CSSOptimizeOptions): Promise<OptimizedCSS>;
  
  /**
   * 提取 Critical CSS
   * @param cssPath - CSS 文件路径
   * @param htmlPath - HTML 文件路径
   * @param options - 提取选项
   * @returns Critical CSS 内容
   */
  extractCritical(cssPath: string, htmlPath: string, options: CriticalOptions): Promise<CriticalCSS>;
  
  /**
   * 移除未使用的 CSS 规则
   * @param cssPath - CSS 文件路径
   * @param contentFiles - 内容文件路径数组（HTML、JS）
   * @returns 清理后的 CSS
   */
  removeUnused(cssPath: string, contentFiles: string[]): Promise<string>;
}

interface CSSOptimizeOptions {
  minify: boolean;
  removeUnused: boolean;
  contentFiles?: string[];
  autoprefixer: boolean;
}

interface OptimizedCSS {
  original: string;
  optimized: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  removedRules?: number;
}

interface CriticalOptions {
  width: number;
  height: number;
  maxSize: number; // 最大 Critical CSS 大小（字节）
}

interface CriticalCSS {
  css: string;
  size: number;
  coverage: number; // 覆盖率百分比
}
```

### 5. JS_Optimizer

JavaScript 优化器，负责压缩、tree-shaking 和代码分割。

```typescript
interface JSOptimizer {
  /**
   * 优化 JavaScript 文件
   * @param input - 输入 JS 文件路径
   * @param options - 优化选项
   * @returns 优化后的 JS 信息
   */
  optimize(input: string, options: JSOptimizeOptions): Promise<OptimizedJS>;
  
  /**
   * 分析未使用的代码
   * @param input - 输入 JS 文件路径
   * @returns 未使用代码的分析结果
   */
  analyzeDeadCode(input: string): Promise<DeadCodeAnalysis>;
  
  /**
   * 生成代码分割建议
   * @param entryPoints - 入口文件数组
   * @returns 代码分割建议
   */
  suggestCodeSplitting(entryPoints: string[]): Promise<CodeSplitSuggestion[]>;
}

interface JSOptimizeOptions {
  minify: boolean;
  treeshake: boolean;
  sourcemap: boolean;
  target: 'es2015' | 'es2020' | 'esnext';
}

interface OptimizedJS {
  original: string;
  optimized: string;
  sourcemap?: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
}

interface DeadCodeAnalysis {
  unusedExports: string[];
  unusedImports: string[];
  estimatedSavings: number; // 字节
}

interface CodeSplitSuggestion {
  module: string;
  reason: string;
  estimatedSavings: number;
}
```

### 6. HTML_Optimizer

HTML 优化器，负责压缩、Critical CSS 内联和资源预加载。

```typescript
interface HTMLOptimizer {
  /**
   * 优化 HTML 文件
   * @param input - 输入 HTML 文件路径
   * @param options - 优化选项
   * @returns 优化后的 HTML 信息
   */
  optimize(input: string, options: HTMLOptimizeOptions): Promise<OptimizedHTML>;
  
  /**
   * 内联 Critical CSS
   * @param htmlPath - HTML 文件路径
   * @param criticalCSS - Critical CSS 内容
   * @returns 内联后的 HTML
   */
  inlineCriticalCSS(htmlPath: string, criticalCSS: string): Promise<string>;
  
  /**
   * 添加资源预加载标签
   * @param htmlPath - HTML 文件路径
   * @param resources - 要预加载的资源
   * @returns 添加预加载后的 HTML
   */
  addPreloadTags(htmlPath: string, resources: PreloadResource[]): Promise<string>;
  
  /**
   * 验证 HTML 语法
   * @param htmlPath - HTML 文件路径
   * @returns 验证结果
   */
  validate(htmlPath: string): Promise<ValidationResult>;
}

interface HTMLOptimizeOptions {
  minify: boolean;
  inlineCriticalCSS: boolean;
  addPreloadTags: boolean;
  validateSyntax: boolean;
}

interface OptimizedHTML {
  original: string;
  optimized: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  validationErrors: string[];
}

interface PreloadResource {
  href: string;
  as: 'font' | 'image' | 'style' | 'script';
  type?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
}

interface ValidationResult {
  valid: boolean;
  errors: Array<{
    line: number;
    column: number;
    message: string;
  }>;
  warnings: Array<{
    line: number;
    column: number;
    message: string;
  }>;
}
```

### 7. Cache_Manager

缓存策略管理器，负责生成缓存配置和内容哈希。

```typescript
interface CacheManager {
  /**
   * 为资源生成内容哈希
   * @param filePath - 文件路径
   * @returns 带哈希的文件名
   */
  generateHash(filePath: string): Promise<string>;
  
  /**
   * 生成缓存配置
   * @param assets - 资源清单
   * @returns 缓存配置
   */
  generateCacheConfig(assets: AssetManifest): CacheConfig;
  
  /**
   * 更新 HTML 中的资源引用为哈希版本
   * @param htmlPath - HTML 文件路径
   * @param assetMap - 资源映射表
   * @returns 更新后的 HTML
   */
  updateAssetReferences(htmlPath: string, assetMap: Map<string, string>): Promise<string>;
}

interface CacheConfig {
  headers: Record<string, CacheRule>;
  cdnConfig?: CDNConfig;
}

interface CacheRule {
  pattern: string;
  cacheControl: string;
  expires?: string;
}

interface CDNConfig {
  provider: 'cloudflare' | 'cloudfront' | 'custom';
  endpoint: string;
  purgeEndpoint?: string;
}
```

### 8. Performance_Monitor

性能监控器，负责运行 Lighthouse 测试和生成报告。

```typescript
interface PerformanceMonitor {
  /**
   * 运行 Lighthouse 测试
   * @param url - 要测试的 URL
   * @param options - 测试选项
   * @returns Lighthouse 报告
   */
  runLighthouse(url: string, options: LighthouseOptions): Promise<LighthouseReport>;
  
  /**
   * 生成优化报告
   * @param buildResult - 构建结果
   * @param lighthouseReport - Lighthouse 报告
   * @returns 优化报告
   */
  generateReport(buildResult: BuildResult, lighthouseReport: LighthouseReport): OptimizationReport;
  
  /**
   * 比较优化前后的性能指标
   * @param before - 优化前的报告
   * @param after - 优化后的报告
   * @returns 性能对比
   */
  comparePerformance(before: LighthouseReport, after: LighthouseReport): PerformanceComparison;
}

interface LighthouseOptions {
  formFactor: 'mobile' | 'desktop';
  throttling: 'mobile3G' | 'mobile4G' | 'none';
  categories: string[];
}

interface LighthouseReport {
  score: number;
  metrics: {
    fcp: number;  // First Contentful Paint
    lcp: number;  // Largest Contentful Paint
    tbt: number;  // Total Blocking Time
    cls: number;  // Cumulative Layout Shift
    si: number;   // Speed Index
  };
  opportunities: Array<{
    id: string;
    title: string;
    description: string;
    estimatedSavings: number;
  }>;
}

interface OptimizationReport {
  timestamp: string;
  buildTime: number;
  totalSizeBefore: number;
  totalSizeAfter: number;
  compressionRatio: number;
  assetBreakdown: {
    images: AssetStats;
    fonts: AssetStats;
    styles: AssetStats;
    scripts: AssetStats;
    html: AssetStats;
  };
  performance: LighthouseReport;
  recommendations: string[];
}

interface AssetStats {
  count: number;
  sizeBefore: number;
  sizeAfter: number;
  compressionRatio: number;
}

interface PerformanceComparison {
  scoreDelta: number;
  metricDeltas: {
    fcp: number;
    lcp: number;
    tbt: number;
    cls: number;
  };
  improvements: string[];
  regressions: string[];
}
```

## Data Models

### 配置文件结构

系统使用配置文件来定义优化参数和构建选项。

```typescript
interface OptimizationConfig {
  // 图片优化配置
  images: {
    quality: number;
    formats: ('webp' | 'avif' | 'jpeg' | 'png')[];
    responsiveSizes: number[];
    minSizeForResponsive: number;
    lazyLoadThreshold: number;
  };
  
  // 字体优化配置
  fonts: {
    subset: boolean;
    formats: ('woff2' | 'woff' | 'ttf')[];
    preload: string[];
    fontDisplay: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  };
  
  // CSS 优化配置
  css: {
    minify: boolean;
    removeUnused: boolean;
    extractCritical: boolean;
    criticalMaxSize: number;
    autoprefixer: boolean;
  };
  
  // JavaScript 优化配置
  js: {
    minify: boolean;
    treeshake: boolean;
    sourcemap: boolean;
    target: 'es2015' | 'es2020' | 'esnext';
  };
  
  // HTML 优化配置
  html: {
    minify: boolean;
    inlineCriticalCSS: boolean;
    addPreloadTags: boolean;
    validateSyntax: boolean;
  };
  
  // 缓存配置
  cache: {
    enableHashing: boolean;
    hashLength: number;
    cacheRules: CacheRule[];
  };
  
  // 性能目标
  performance: {
    targetScore: number;
    targetFCP: number;
    targetLCP: number;
    targetTBT: number;
  };
  
  // 构建配置
  build: {
    inputDir: string;
    outputDir: string;
    publicPath: string;
    cleanOutput: boolean;
  };
}
```

### 资源元数据

系统为每个资源维护元数据，用于跟踪优化过程和生成报告。

```typescript
interface AssetMetadata {
  id: string;
  type: 'image' | 'font' | 'style' | 'script' | 'html';
  originalPath: string;
  optimizedPath: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  hash: string;
  dependencies: string[];
  optimizations: OptimizationStep[];
  errors: string[];
  warnings: string[];
}

interface OptimizationStep {
  name: string;
  timestamp: number;
  duration: number;
  sizeBefore: number;
  sizeAfter: number;
  success: boolean;
  error?: string;
}
```

### 懒加载配置

懒加载功能的配置和状态管理。

```typescript
interface LazyLoadConfig {
  // 懒加载触发距离（像素）
  rootMargin: string;
  
  // 懒加载阈值
  threshold: number;
  
  // 占位符策略
  placeholder: 'blur' | 'color' | 'none';
  
  // 低质量预览图配置
  lqip: {
    enabled: boolean;
    quality: number;
    width: number;
  };
}

interface LazyLoadState {
  selector: string;
  images: Array<{
    element: HTMLImageElement;
    src: string;
    srcset?: string;
    loaded: boolean;
    error?: string;
  }>;
}
```

### 构建清单

构建过程生成的清单文件，用于资源映射和缓存管理。

```typescript
interface BuildManifest {
  version: string;
  buildTime: string;
  assets: Record<string, AssetEntry>;
  entrypoints: Record<string, string[]>;
  chunks: Record<string, ChunkInfo>;
}

interface AssetEntry {
  file: string;
  src: string;
  isEntry?: boolean;
  isDynamicEntry?: boolean;
  imports?: string[];
  css?: string[];
}

interface ChunkInfo {
  file: string;
  size: number;
  imports: string[];
  dynamicImports: string[];
}
```

