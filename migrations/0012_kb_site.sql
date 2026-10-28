-- 知识库按站点隔离：文档与切片增加 site_id
ALTER TABLE kb_documents ADD COLUMN site_id TEXT;
ALTER TABLE kb_chunks ADD COLUMN site_id TEXT;

CREATE INDEX IF NOT EXISTS idx_kb_documents_site ON kb_documents(site_id);
CREATE INDEX IF NOT EXISTS idx_kb_chunks_site ON kb_chunks(site_id);
