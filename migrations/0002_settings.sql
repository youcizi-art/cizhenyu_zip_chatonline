-- 4. 系统全局与浮窗配置表
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT OR IGNORE INTO settings (key, value) VALUES 
('widget_title', '在线专属客服'),
('welcome_message', '您好！很高兴为您服务，请问有什么可以协助您的？'),
('primary_color', '#07c160');
