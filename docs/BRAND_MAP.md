# 品牌信息映射文档 (Brand Map)

> 本文档记录 AI Rider 公益文档站所有品牌引用位置及处理方式。
> 用于品牌替换时防止遗漏，也便于从上游同步后重新替换。

## 映射规则

| 原始 | 替换为 | 适用场景 |
|------|--------|---------|
| New API（品牌指代公益站） | AI Rider | 首页、使用指南、首页卡片描述等 |
| New API（软件名称） | New API（保留） | 技术文档：控制台操作、部署、Skills、致谢 |
| `aididai.cn`（域名） | `airider.cn` | API 参考文档中的 URL 示例 |
| `api.unsnow.org`（旧域名） | `airider.cn` | 快速开始、教程中的 URL 示例 |
| `support@aididai.cn` / `newapi@quantumnous.com` | `uwings@gmail.com` | 联系邮箱 |
| `New API Docs`（搜索） | `AI Rider Docs` | 搜索组件角色标签 |

## 品牌引用全量清单

### ✅ SRC 源代码

| 文件 | 位置 | 处理 |
|------|------|------|
| `src/lib/layout.shared.tsx` | fallback siteName | `'New API'` → `'AI Rider'` |
| `src/lib/metadata.ts` | OG url/siteName/images | → aididai.cn / DOCS_SITE_NAME / airider-logo |
| `src/lib/llms.ts` | "# New API Docs" | → `DOCS_SITE_NAME` 动态 |
| `src/components/search.tsx` | "New API Docs" role | → 'AI Rider Docs' |
| `src/components/footer.tsx` | "New API" link | → "New API 开源" |
| `src/app/[lang]/(home)/layout.tsx` | zh/en/ja "快速开始"描述 | → 公益站三步上手 / AI Rider 使い方 |
| `src/components/antifraud-dialog.tsx` | New API 防诈骗弹窗 | ⚠️ 保留 (不可见组件) |
| `src/components/qq-group-quiz.tsx` | New API QQ 群问答 | ⚠️ 保留 (不可见组件) |

### ✅ 使用指南 (zh/guide/wiki)

| 文件 | 原有 "New API" | 处理 |
|------|---------------|------|
| `project-introduction.mdx` | 全文 New API → AI Rider + 致谢保留 | ✅ 已改 |
| `features-introduction.mdx` | 全文 → AI Rider | ✅ 已改 |
| `technical-architecture.mdx` | 全文 → aididai.cn | ✅ 已改 |
| `analytics-setup.mdx` | 全文 → aididai.cn | ✅ 已改 |
| `performance-analysis.mdx` | 全文 → aididai.cn | ✅ 已改 |
| `changelog.mdx` | → 公益站文档更新日志 | ✅ 已改 |
| `project-records/changelog.mdx` | → 公益站文档更新日志 | ✅ 已改 |

### ✅ 快速开始 (zh/public/getting-started)

| 文件 | 状态 |
|------|------|
| `index.mdx` | ✅ AI Rider 公益站 |
| `introduction.mdx` | ✅ 已改写 |
| `register-login.mdx` | ✅ 域名已改 |
| `create-token.mdx` | ✅ 域名已改 |
| `first-request.mdx` | ✅ api.unsnow.org → airider.cn |
| `choose-model.mdx` | ✅ api.unsnow.org → airider.cn |
| `quota-rate-limit.mdx` | ✅ |
| `usage-rules.mdx` | ✅ |
| `common-errors.mdx` | ✅ api.unsnow.org → airider.cn |

### ✅ API 参考 (zh/api)

| 范围 | 处理 |
|------|------|
| 全部 `aididai.cn` → `airider.cn` (59处) | ✅ |
| `api/index.mdx` Base URL + 描述 | ✅ |

### ✅ 应用集成 (zh/apps)

| 文件 | 处理 |
|------|------|
| `index.mdx:20` "New API 兼容" → "AI Rider 兼容" | ✅ |

### ⚠️ 保留不处理（技术/软件文档）

以下页面中的 "New API" 是对上游开源软件的描述，保留：
- `zh/guide/console/**` — New API 控制台操作手册
- `zh/guide/feature-guide/admin/**` — New API 管理员功能
- `zh/guide/feature-guide/user/chat-apps.mdx` — 聊天应用集成
- `zh/installation/**` — New API 部署文档（导航隐藏）
- `zh/business/**` — 商业合作（导航隐藏）
- `zh/skills/**` — Skills 插件（导航隐藏）
- `zh/support/**` — 社区支持（导航隐藏）
- `en/**` / `ja/**` — 非中文内容

### ✅ 其他 public 内容

| 文件 | 处理 |
|------|------|
| `public/ai-basics/*.mdx` | ✅ api.unsnow → airider.cn |
| `public/agents/*.mdx` | ✅ api.unsnow → airider.cn |
| `public/tools-clients/*.mdx` | ✅ api.unsnow → airider.cn |
| `public/tutorials/*.mdx` | ✅ api.unsnow → airider.cn |

## 域名替换汇总

| 旧域名 | 新域名 | 影响文件数 |
|--------|--------|----------|
| `api.unsnow.org` | `airider.cn` | 12+ 文件 (28处) |
| `aididai.cn` | `airider.cn` | 30+ 文件 (59处) |

## 邮箱映射

| 邮箱 | 处理 |
|------|------|
| `support@aididai.cn` | → uwings@gmail.com |
| `newapi@quantumnous.com` | → 未处理（在隐藏页 en/ja 中） |
| `support@quantumnous.com` | → 未处理（在隐藏页 en/ja 中） |
