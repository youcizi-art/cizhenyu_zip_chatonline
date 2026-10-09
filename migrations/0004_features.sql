-- 1. 客户分组表
CREATE TABLE IF NOT EXISTS customer_groups (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT '#07c160',
  created_at INTEGER NOT NULL
);

-- 插入默认客户分组
INSERT OR IGNORE INTO customer_groups (id, name, color, created_at) VALUES
('grp_default', '普通访客', '#64748b', 1725000000000),
('grp_vip', 'VIP客户', '#f59e0b', 1725000000000),
('grp_following', '待跟进', '#3b82f6', 1725000000000),
('grp_deal', '已成交', '#10b981', 1725000000000);

-- 2. 为会话表添加分组字段
ALTER TABLE conversations ADD COLUMN group_id TEXT DEFAULT 'grp_default';

-- 3. 专属私密聊天表
CREATE TABLE IF NOT EXISTS private_chats (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  agent_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  last_message_text TEXT DEFAULT NULL,
  last_message_time INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER DEFAULT NULL
);

-- 4. 国际化翻译表增加 is_custom 标识，用于区分系统固定 key 与用户自定义 key
ALTER TABLE i18n_translations ADD COLUMN is_custom INTEGER DEFAULT 0;
