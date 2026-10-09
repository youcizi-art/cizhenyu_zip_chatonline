-- 1. 客服员工/管理员表
CREATE TABLE IF NOT EXISTS agents (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT DEFAULT 'agent',
  status TEXT DEFAULT 'offline',
  created_at INTEGER NOT NULL
);

-- 2. 访客会话表
CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  visitor_name TEXT NOT NULL,
  visitor_avatar TEXT,
  assigned_agent_id TEXT,
  status TEXT DEFAULT 'active',
  unread_agent_count INTEGER DEFAULT 0,
  unread_visitor_count INTEGER DEFAULT 0,
  last_message_text TEXT,
  last_message_time INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);

-- 3. 聊天消息记录表
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL,
  sender_type TEXT NOT NULL, -- 'visitor' 或 'agent'
  sender_id TEXT NOT NULL,
  sender_name TEXT NOT NULL,
  message_type TEXT NOT NULL, -- 'text', 'emoji', 'image', 'file', 'audio'
  content TEXT NOT NULL,
  extra_json TEXT,
  status TEXT DEFAULT 'sent',
  created_at INTEGER NOT NULL
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_conversations_visitor ON conversations(visitor_id);
CREATE INDEX IF NOT EXISTS idx_messages_conv ON messages(conversation_id, created_at);
