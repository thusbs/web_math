/**
 * 优化配置类型定义
 */

export interface OptimizationConfig {
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

export interface CacheRule {
  pattern: string;
  cacheControl: string;
  expires?: string;
}

export type BuildMode = 'development' | 'production';
