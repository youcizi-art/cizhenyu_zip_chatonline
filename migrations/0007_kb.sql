-- 知识库与文案素材主文档表
CREATE TABLE IF NOT EXISTS kb_documents (
  id TEXT PRIMARY KEY,
  domain TEXT NOT NULL DEFAULT 'support',
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  rel_product_id TEXT,
  tags_json TEXT,
  chunks_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'ready',
  error_message TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- 知识库向量切片详情表
CREATE TABLE IF NOT EXISTS kb_chunks (
  id TEXT PRIMARY KEY,
  document_id TEXT NOT NULL,
  domain TEXT NOT NULL DEFAULT 'support',
  chunk_index INTEGER NOT NULL,
  content TEXT NOT NULL,
  vector_id TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_kb_documents_domain ON kb_documents(domain);
CREATE INDEX IF NOT EXISTS idx_kb_documents_product ON kb_documents(rel_product_id);
CREATE INDEX IF NOT EXISTS idx_kb_chunks_document ON kb_chunks(document_id);
CREATE INDEX IF NOT EXISTS idx_kb_chunks_vector ON kb_chunks(vector_id);
