## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: 图片压缩率

*For any* PNG、JPG 或 GIF 图片文件，经过 Image_Optimizer 优化后，文件体积应减少至少 30%，且生成的图片应包含 WebP 格式版本（如果配置启用）。

**Validates: Requirements 1.1, 1.2**

### Property 2: 图片尺寸属性完整性

*For any* HTML 文件中的 img 标签，优化后的 HTML 应包含 width 和 height 属性。

**Validates: Requirements 1.3**

### Property 3: 图片 alt 属性完整性

*For any* HTML 文件中的 img 标签，优化后的 HTML 应包含 alt 属性。

**Validates: Requirements 1.4**

### Property 4: 响应式图片生成

*For any* 原始大小超过 100KB 的图片文件，Image_Optimizer 应生成多个尺寸的响应式图片版本。

**Validates: Requirements 1.5**

### Property 5: 字体子集化

*For any* 字体文件和对应的 HTML/CSS 文件集合，Font_Subsetter 生成的子集字体应只包含实际使用的字符，且文件体积应小于原始字体。

**Validates: Requirements 2.1**

### Property 6: 字体显示策略

*For any* CSS 文件中的 @font-face 规则，优化后的 CSS 应包含 font-display: swap 声明。

**Validates: Requirements 2.2**

### Property 7: 关键字体预加载

*For any* 配置为关键字体的字体文件，优化后的 HTML 应包含对应的 <link rel="preload"> 标签。

**Validates: Requirements 2.3**

### Property 8: 未使用资源移除

*For any* 在源代码中未被引用的资源文件（如 FontAwesome），构建输出目录中不应包含该资源。

**Validates: Requirements 2.4**

### Property 9: CSS 压缩

*For any* CSS 文件，优化后的 CSS 应移除所有注释和不必要的空格，且文件体积应小于原始文件。

**Validates: Requirements 3.1**

### Property 10: Critical CSS 内联

*For any* HTML 文件，优化后的 HTML 的 <head> 部分应包含内联的 <style> 标签，其中包含首屏渲染所需的 CSS。

**Validates: Requirements 3.2**

### Property 11: 非关键 CSS 异步加载

*For any* 非关键 CSS 文件的引用，优化后的 HTML 应使用异步加载策略（如 media="print" onload 技巧或 rel="preload"）。

**Validates: Requirements 3.3**

### Property 12: CSS 文件合并

*For any* 构建过程，输出目录中的 CSS 文件数量应少于或等于输入目录中的 CSS 文件数量。

**Validates: Requirements 3.4**

### Property 13: 资源内容哈希

*For any* CSS 或 JavaScript 文件，优化后的文件名应包含基于内容的哈希值（如 style.abc123.css）。

**Validates: Requirements 3.5, 4.5, 6.5**

### Property 14: JavaScript 压缩和 tree-shaking

*For any* JavaScript 文件，优化后的 JS 应移除未使用的代码和导出，且文件体积应小于原始文件。

**Validates: Requirements 4.1, 4.3**

### Property 15: JavaScript 异步加载

*For any* 非关键 JavaScript 文件的引用，优化后的 HTML 中的 <script> 标签应包含 defer 或 async 属性。

**Validates: Requirements 4.2**

### Property 16: 首屏以下图片懒加载

*For any* 位于首屏以下的图片元素，优化后的 HTML 应包含 loading="lazy" 属性。

**Validates: Requirements 5.1, 5.2**

### Property 17: 懒加载图片占位符

*For any* 设置了懒加载的图片元素，应提供占位符（如背景色、LQIP 或 blur-up 效果）。

**Validates: Requirements 5.4**

### Property 18: 卡片组件图片懒加载

*For any* 卡片组件（.card 类）中的 logo 图片，优化后的 HTML 应包含 loading="lazy" 属性。

**Validates: Requirements 5.5**

### Property 19: CDN 资源引用

*For any* 静态资源文件，优化后的 HTML 中的资源 URL 应指向配置的 CDN 域名（如果启用 CDN）。

**Validates: Requirements 6.1**

### Property 20: 缓存策略配置

*For any* 资源类型（图片、字体、CSS、JS、HTML），生成的缓存配置应包含符合规范的 Cache-Control 和 Expires 响应头设置：图片和字体 1 年，CSS 和 JS 1 年（带哈希），HTML 不缓存。

**Validates: Requirements 6.2, 6.3**

### Property 21: 公共 CDN 引用

*For any* 常见的第三方库（如 jQuery、Bootstrap），优化后的 HTML 应引用公共 CDN（如 cdnjs、jsDelivr）而非本地副本。

**Validates: Requirements 6.4**

### Property 22: 构建报告生成

*For any* 构建过程，完成后应生成包含文件体积变化、压缩率和性能指标的优化报告文件。

**Validates: Requirements 7.2**

### Property 23: 构建验证

*For any* 构建过程，如果源 HTML 中存在缺少 alt 属性的图片或配置错误的响应式图片，构建系统应在报告中输出警告或错误。

**Validates: Requirements 7.3**

### Property 24: 开发模式 sourcemap

*For any* 开发模式构建，输出目录应包含对应的 .map sourcemap 文件。

**Validates: Requirements 7.4**

### Property 25: 构建输出目录

*For any* 构建过程，完成后应在配置的输出目录（默认 dist/）中生成优化后的文件。

**Validates: Requirements 7.5**

### Property 26: Lighthouse 报告生成

*For any* 生产模式构建，完成后应生成包含性能评分和核心指标（FCP、LCP、TBT）的 Lighthouse 报告文件。

**Validates: Requirements 8.1, 8.3, 8.4, 8.5**

### Property 27: 预连接标签

*For any* 配置的关键第三方域名，优化后的 HTML 应包含 <link rel="preconnect"> 标签。

**Validates: Requirements 9.1**

### Property 28: DNS 预解析标签

*For any* 配置的次要第三方域名，优化后的 HTML 应包含 <link rel="dns-prefetch"> 标签。

**Validates: Requirements 9.2**

### Property 29: 关键资源预加载

*For any* 配置为关键资源的字体或首屏图片，优化后的 HTML 应包含 <link rel="preload"> 标签，且标签应包含正确的 as 和 type 属性。

**Validates: Requirements 9.3, 9.5**

### Property 30: HTML 压缩

*For any* HTML 文件，优化后的 HTML 应移除不必要的空格、换行和注释，且文件体积应小于原始文件。

**Validates: Requirements 10.1**

### Property 31: Critical CSS 大小限制

*For any* HTML 文件，内联到 <head> 中的 Critical CSS 大小应不超过 14KB。

**Validates: Requirements 10.2**

### Property 32: JavaScript 脚本位置

*For any* HTML 文件中的 <script> 标签，应位于 <body> 底部或包含 defer 属性。

**Validates: Requirements 10.3**

### Property 33: HTML 清理

*For any* HTML 文件，优化后的 HTML 应移除未使用的 HTML 元素和属性。

**Validates: Requirements 10.4**

### Property 34: HTML 语法验证

*For any* HTML 文件，如果存在 HTML5 语法错误，构建系统应在报告中输出错误信息。

**Validates: Requirements 10.5**

