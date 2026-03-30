import type { OptimizationConfig } from '../src/types/config.js';

/**
 * 默认优化配置
 * 
 * 此配置文件定义了网站性能优化的所有参数。
 * 可以根据项目需求调整这些配置。
 */
export const defaultConfig: OptimizationConfig = {
  // 图片优化配置
  images: {
    // 压缩质量 (0-100)，推荐 80-85
    quality: 82,
    
    // 生成的图片格式，WebP 提供更好的压缩率
    formats: ['webp', 'jpeg', 'png'],
    
    // 响应式图片尺寸（宽度，单位：像素）
    responsiveSizes: [320, 640, 768, 1024, 1280, 1920],
    
    // 触发响应式图片生成的最小文件大小（KB）
    minSizeForResponsive: 100,
    
    // 懒加载触发距离（像素）
    lazyLoadThreshold: 200,
  },
  
  // 字体优化配置
  fonts: {
    // 是否启用字体子集化
    subset: true,
    
    // 字体格式，WOFF2 提供最佳压缩率
    formats: ['woff2', 'woff'],
    
    // 需要预加载的字体文件路径
    preload: [],
    
    // 字体显示策略，swap 确保文本始终可见
    fontDisplay: 'swap',
  },
  
  // CSS 优化配置
  css: {
    // 是否压缩 CSS
    minify: true,
    
    // 是否移除未使用的 CSS 规则
    removeUnused: true,
    
    // 是否提取 Critical CSS
    extractCritical: true,
    
    // Critical CSS 最大大小（字节），推荐 14KB
    criticalMaxSize: 14336,
    
    // 是否自动添加浏览器前缀
    autoprefixer: true,
  },
  
  // JavaScript 优化配置
  js: {
    // 是否压缩 JavaScript
    minify: true,
    
    // 是否启用 tree-shaking
    treeshake: true,
    
    // 是否生成 sourcemap（开发模式）
    sourcemap: true,
    
    // 目标 ECMAScript 版本
    target: 'es2020',
  },
  
  // HTML 优化配置
  html: {
    // 是否压缩 HTML
    minify: true,
    
    // 是否内联 Critical CSS
    inlineCriticalCSS: true,
    
    // 是否添加资源预加载标签
    addPreloadTags: true,
    
    // 是否验证 HTML 语法
    validateSyntax: true,
  },
  
  // 缓存配置
  cache: {
    // 是否启用内容哈希
    enableHashing: true,
    
    // 哈希长度
    hashLength: 8,
    
    // 缓存规则
    cacheRules: [
      {
        pattern: '**/*.{jpg,jpeg,png,gif,svg,webp,avif}',
        cacheControl: 'public, max-age=31536000, immutable',
      },
      {
        pattern: '**/*.{woff,woff2,ttf,eot}',
        cacheControl: 'public, max-age=31536000, immutable',
      },
      {
        pattern: '**/*.{css,js}',
        cacheControl: 'public, max-age=31536000, immutable',
      },
      {
        pattern: '**/*.html',
        cacheControl: 'public, max-age=0, must-revalidate',
      },
    ],
  },
  
  // 性能目标
  performance: {
    // Lighthouse 目标评分
    targetScore: 90,
    
    // First Contentful Paint 目标（毫秒）
    targetFCP: 1500,
    
    // Largest Contentful Paint 目标（毫秒）
    targetLCP: 2500,
    
    // Total Blocking Time 目标（毫秒）
    targetTBT: 200,
  },
  
  // 构建配置
  build: {
    // 输入目录（源文件）
    inputDir: '.',
    
    // 输出目录（构建产物）
    outputDir: 'dist',
    
    // 公共路径（CDN 或相对路径）
    publicPath: '/',
    
    // 构建前是否清理输出目录
    cleanOutput: true,
  },
};

export default defaultConfig;
