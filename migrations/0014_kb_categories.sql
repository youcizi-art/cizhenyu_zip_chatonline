-- 知识库分类（按站点）；文档 domain 存分类 key，删分类不删文档
CREATE TABLE IF NOT EXISTS kb_categories (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  key TEXT NOT NULL,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  UNIQUE(site_id, key)
);

CREATE INDEX IF NOT EXISTS idx_kb_categories_site ON kb_categories(site_id);
