-- 为会话表添加客户标记备注字段 (最多5个字符Tag展示)
ALTER TABLE conversations ADD COLUMN tag TEXT DEFAULT NULL;
