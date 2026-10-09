-- 8. 扩展会话表与客户表，支持异构站点页面上下文、商品快照及访客旅程轨迹

-- 为会话表增加页面上下文与商品快照字段
ALTER TABLE conversations ADD COLUMN page_context TEXT DEFAULT NULL;
ALTER TABLE conversations ADD COLUMN product_snapshot TEXT DEFAULT NULL;
ALTER TABLE conversations ADD COLUMN device_info TEXT DEFAULT NULL;
ALTER TABLE conversations ADD COLUMN isp TEXT DEFAULT NULL;
ALTER TABLE conversations ADD COLUMN timezone TEXT DEFAULT NULL;

-- 为 CRM 客户表增加关联商品与来源字段
ALTER TABLE crm_customers ADD COLUMN product_snapshot TEXT DEFAULT NULL;
ALTER TABLE crm_customers ADD COLUMN source_url TEXT DEFAULT NULL;
ALTER TABLE crm_customers ADD COLUMN device_info TEXT DEFAULT NULL;

-- 创建访客浏览轨迹日志表 (支持 SPA 与多页面访问流分析)
CREATE TABLE IF NOT EXISTS visitor_journey_logs (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL,
  visitor_id TEXT NOT NULL,
  page_title TEXT,
  page_url TEXT NOT NULL,
  stay_seconds INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_journey_conv ON visitor_journey_logs(conversation_id, created_at);
CREATE INDEX IF NOT EXISTS idx_journey_visitor ON visitor_journey_logs(visitor_id, created_at);
