-- 知识库文档 / 切片增加语种；旧数据暂标 en，可由后台改语种后重新索引
ALTER TABLE kb_documents ADD COLUMN lang TEXT DEFAULT 'en';
ALTER TABLE kb_chunks ADD COLUMN lang TEXT DEFAULT 'en';

CREATE INDEX IF NOT EXISTS idx_kb_documents_lang ON kb_documents(lang);
CREATE INDEX IF NOT EXISTS idx_kb_chunks_lang ON kb_chunks(lang);
