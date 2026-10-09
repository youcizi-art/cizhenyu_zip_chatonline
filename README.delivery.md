# Cizhenyu CRM / IM 通用交付包

本包为脱敏构建产物，供 **cizhenyu_deploy** 一键部署到客户 Cloudflare 账户。

## 包含

- `worker/` — Workers + Durable Object 脚本（已打包）
- `client/` — 前台 / 管理台静态资源（ASSETS）
- `migrations/` — D1 SQL
- `wrangler.delivery.example.toml` — 仅占位说明

## 不含

- 真实 `wrangler.toml` / database_id / 密钥
- 源码与 node_modules

部署时由 cizhenyu_deploy 自动创建 D1、R2、Vectorize，绑定 AI / Durable Objects，执行迁移并配置 Turnstile。
