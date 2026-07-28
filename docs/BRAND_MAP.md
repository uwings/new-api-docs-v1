# 品牌信息映射文档 (Brand Map)

> 本文档记录 aididai.cn 公益文档站所有品牌引用位置及其处理方式。
> 用于防止替换时遗漏，也便于未来从上游同步后重新替换。

## 映射规则

| 原始品牌 | 替换为 | 说明 |
|----------|--------|------|
| New API（平台名称） | AI Rider（公益站） | 指代公益站自身的场合 |
| New API（软件名称） | New API（保留） | 描述上游开源软件的场合（技术文档） |
| support@aididai.cn | uwings@gmail.com | 联系邮箱 |
| QuantumNous（GitHub org） | 保留或移除 | 上游归属标注 |
| aididai.cn（接口 URL） | 保留 | API 端点地址 |

## 已处理文件清单

### 全局品牌文件 ✅
| 文件 | 处理方式 |
|------|----------|
| `src/lib/layout.shared.tsx` | logo → airider, siteName → DOCS_SITE_NAME |
| `src/app/[lang]/layout.tsx` | title template → DOCS_SITE_NAME 变量 |
| `src/components/footer.tsx` | 版权 → AI Rider, 删除 GitHub icon, 邮箱 → uwings |
| `src/components/compliance-notice.tsx` | 提示文字 → "AI Rider 提示" |
| `src/lib/metadata.ts` | siteName → DOCS_SITE_NAME（待改） |
| `src/lib/github.ts` | owner → uwings |
| `src/app/[lang]/docs/[[...slug]]/page.tsx` | owner → uwings |
| `src/app/[lang]/(home)/page.tsx` | QuantumNous URL → uwings |
| `src/lib/llms.ts` | New API → DOCS_SITE_NAME（待改） |
| `src/components/search.tsx` | "New API Docs" → 待改 |
| `content/docs/zh/index.mdx` | "部署 New API" → 待改（首页 308 跳转、实际不渲染但代码残留） |

### 使用指南 - 介绍部分 ✅
| 文件 | 状态 |
|------|------|
| `wiki/basic-concepts/project-introduction.mdx` | ✅ 已重写为 AI Rider 公益站介绍 |
| `wiki/basic-concepts/features-introduction.mdx` | ✅ 已重写 |
| `wiki/basic-concepts/technical-architecture.mdx` | ✅ 已重写 |
| `wiki/basic-concepts/analytics-setup.mdx` | ✅ 已重写 |
| `wiki/basic-concepts/performance-analysis.mdx` | ✅ 已重写 |
| `wiki/changelog.mdx` | ✅ 已重写 |
| `wiki/meta.json` | ✅ "维基百科"→"关于公益站" |

### API 参考 ✅
| 文件 | 状态 |
|------|------|
| `api/index.mdx` | ✅ Base URL → aididai.cn/v1 |
| `api/ai-model/**/*.mdx` (43 文件) | ✅ 全部改写为手写文档 |

### 页脚 ✅
| `src/components/footer.tsx` | ✅ 版权/AI Rider, 邮箱/uwings, 相关/友情链接已填充 |

### ⚠️ 保留不处理（技术文档、不在导航显示）

以下文件中的 "New API" 是对上游开源软件的技术文档描述，保留不替换：
- `content/docs/zh/guide/console/**` — 控制台操作手册
- `content/docs/zh/guide/feature-guide/admin/**` — 管理员功能指南
- `content/docs/zh/guide/feature-guide/user/chat-apps.mdx` — 聊天应用集成指南
- `content/docs/zh/installation/**` — New API 部署文档（导航已隐藏）
- `content/docs/zh/business/**` — 商业合作页面（导航已隐藏）
- `content/docs/zh/skills/**` — Skills 插件（导航已隐藏）
- `content/docs/en/**` — 英文内容（未翻译、导航引用为主）
- `content/docs/ja/**` — 日文内容（未翻译、导航引用为主）
- `src/components/antifraud-dialog.tsx` — 防诈骗弹窗（触发条件未知、暂不动）
- `src/components/qq-group-quiz.tsx` — QQ 群问答（不展示、不动）

## ⚠️ 待修复

| 文件 | 问题 | 处理方式 |
|------|------|----------|
| `src/lib/metadata.ts` | siteName: 'New API' 硬编码 | 改为读取 DOCS_SITE_NAME |
| `src/lib/llms.ts` | "# New API Docs" 硬编码 | 改为读取 DOCS_SITE_NAME |
| `src/components/search.tsx` | "New API Docs" | 改为动态读取 |
| `src/app/[lang]/(home)/layout.tsx` | "部署和配置 New API" | 改为"创建 API 令牌并开始使用" |
| `content/docs/zh/index.mdx` | "部署 New API" 卡片 | 改为公益站相关 |
| `wiki/project-records/changelog.mdx` | QuantumNous release 内容 | 清理为公益站更新日志 |

## 邮箱映射

| 旧邮箱 | 出现位置 | 处理 |
|--------|---------|------|
| support@aididai.cn | 已全部替换 | ✅ → uwings@gmail.com |
| support@quantumnous.com | en/ja/zh 的 business + project-intro 旧页 | ⚠️ en/ja 未处理（不展示） |
| newapi@quantumnous.com | en/ja 的 business 页 | ⚠️ 同上 |
