-- 为私密聊天表添加 plain_password 字段，以便管理员随时查阅并提供给客户
ALTER TABLE private_chats ADD COLUMN plain_password TEXT DEFAULT NULL;
