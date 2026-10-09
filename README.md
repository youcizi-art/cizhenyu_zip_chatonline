# Cloudflare IM + CRM + CMS 通用分发项目部署指引

欢迎使用 **Cloudflare IM + CRM + CMS 全栈边缘运营系统** 通用分发项目！
本项目 100% 运行于 Cloudflare 全球边缘网络（Workers + Durable Objects + D1 + R2 + Workers AI + Vectorize），具备极低延迟、零服务器运维成本与企业级安全防护。

---

## 🚀 客户快速部署 6 步法

### 步骤 1：安装依赖
确保本地安装有 **Node.js (推荐 v18 或 v20+)** 与 **Git**。在解压后的项目根目录下执行：
```bash
npm install
```

---

### 步骤 2：登录您的 Cloudflare 账户
在终端执行授权登录：
```bash
npx wrangler login
```
验证当前登录身份：
```bash
npx wrangler whoami
```

---

### 步骤 3：在您的 Cloudflare 账户中创建边缘资源
在终端依次执行以下 3 条资源创建命令：

```bash
# 1. 创建 D1 数据库 (系统核心数据)
npx wrangler d1 create im-chat-db

# 2. 创建 R2 存储桶 (聊天图片与产品素材)
npx wrangler r2 bucket create im-chat-media

# 3. 创建 1024 维 Vectorize 向量库 (知识库与 AI 检索)
npx wrangler vectorize create kb-vector-index --dimensions=1024 --metric=cosine
```

> 💡 **特别提醒**：执行第 1 条 `npx wrangler d1 create im-chat-db` 命令后，终端控制台会输出类似如下的配置片段：
> ```toml
> [[d1_databases]]
> binding = "DB"
> database_name = "im-chat-db"
> database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
> ```
> 请务必复制此处的 `database_id`。

---

### 步骤 4：填写 `wrangler.toml` 中的配置信息
打开项目根目录下的 `wrangler.toml` 文件，填入您自己的专属信息：
1. **`database_id`**：填入步骤 3 中创建获取的 D1 `database_id`。
2. **`ADMIN_PATH_SECRET`**：设置您的专属私密后台访问路径后缀（例如设为 `custom888`，则管理后台地址为 `/admin-custom888`）。
3. **`ADMIN_SECURITY_CODE`**：设置您的后台登录安全码（高强度字符串）。
4. **`PRIVATE_CHAT_DEVELOPER_KEY`**：设置私密聊天密钥。
5. **`TURNSTILE_*`**（可选）：若需要启用官方人机验证，可前往 Cloudflare 控制台 Turnstile 创建并填入；若保持默认官方测试密钥也可正常登录。

---

### 步骤 5：初始化远程 D1 数据库表结构
执行以下迁移命令，自动将完整的数据库表结构与预设数据写入您的 D1 数据库：
```bash
npm run db:migrate:remote
```

---

### 步骤 6：一键构建并部署上线
执行一键部署命令：
```bash
npm run deploy
```

部署成功后，控制台会输出您的专属 Worker 访问域名，例如：
`https://cloudflare-im-chat.<你的子域>.workers.dev`

---

## 🛡️ 系统访问说明
- **前台测试入口**：`https://<您的域名>/`
- **安全管理控制台**：`https://<您的域名>/admin-<ADMIN_PATH_SECRET>`
- 登录后台时请输入在 `wrangler.toml` 中配置的 `ADMIN_SECURITY_CODE` 安全码。
