-- 会话站点/地理/足迹：此前仅靠运行时 ALTER，现固化到迁移（新建库一次到位）
-- 已有库若列已存在，部署工具/ wrangler 按文件版本跳过；运行时 ensureSitesSchema 仍作 isolate 级兜底

CREATE TABLE IF NOT EXISTS visitor_journey_logs (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL,
  visitor_id TEXT NOT NULL,
  page_title TEXT,
  page_url TEXT NOT NULL,
  stay_seconds INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_visitor_journey_conv ON visitor_journey_logs(conversation_id, created_at);
