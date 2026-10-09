-- 5. 国际化语种表
CREATE TABLE IF NOT EXISTS i18n_languages (
  code TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  is_default INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL
);

-- 6. 国际化翻译词条表
CREATE TABLE IF NOT EXISTS i18n_translations (
  id TEXT PRIMARY KEY,
  lang_code TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  UNIQUE(lang_code, key)
);

-- 插入默认语种：简体中文 (兜底) 与 英语
INSERT OR IGNORE INTO i18n_languages (code, name, is_default, created_at) VALUES
('zh-CN', '简体中文', 1, 1725000000000),
('en', 'English', 0, 1725000000000);

-- 插入默认简体中文词条
INSERT OR IGNORE INTO i18n_translations (id, lang_code, key, value) VALUES
('zh-CN:online_support', 'zh-CN', 'online_support', '在线专属客服'),
('zh-CN:online', 'zh-CN', 'online', '在线'),
('zh-CN:busy', 'zh-CN', 'busy', '忙碌'),
('zh-CN:offline', 'zh-CN', 'offline', '离线'),
('zh-CN:safe_tip', 'zh-CN', 'safe_tip', '已开启端到端安全连接，聊天记录云端保存'),
('zh-CN:welcome_default', 'zh-CN', 'welcome_default', '您好！很高兴为您服务，请问有什么可以协助您的？'),
('zh-CN:offline_default', 'zh-CN', 'offline_default', '当前坐席暂未在线，请直接留言，我们稍后将回复您。'),
('zh-CN:my_name', 'zh-CN', 'my_name', '我是：'),
('zh-CN:edit', 'zh-CN', 'edit', '修改'),
('zh-CN:save', 'zh-CN', 'save', '确定'),
('zh-CN:input_placeholder', 'zh-CN', 'input_placeholder', '输入消息，Enter 发送...'),
('zh-CN:click_to_record', 'zh-CN', 'click_to_record', '点击开始录音'),
('zh-CN:recording', 'zh-CN', 'recording', '正在录音'),
('zh-CN:send', 'zh-CN', 'send', '发送'),
('zh-CN:audio_short', 'zh-CN', 'audio_short', '说话时间太短'),
('zh-CN:mic_error', 'zh-CN', 'mic_error', '无法访问麦克风，请检查浏览器权限'),
('zh-CN:upload_failed', 'zh-CN', 'upload_failed', '上传失败，请重试'),
('zh-CN:file_download', 'zh-CN', 'file_download', '点击下载'),
('zh-CN:visitor_default_prefix', 'zh-CN', 'visitor_default_prefix', '访客');

-- 插入默认英文词条
INSERT OR IGNORE INTO i18n_translations (id, lang_code, key, value) VALUES
('en:online_support', 'en', 'online_support', 'Customer Support'),
('en:online', 'en', 'online', 'Online'),
('en:busy', 'en', 'busy', 'Busy'),
('en:offline', 'en', 'offline', 'Offline'),
('en:safe_tip', 'en', 'safe_tip', 'End-to-end encrypted, history saved in cloud'),
('en:welcome_default', 'en', 'welcome_default', 'Hello! How can we assist you today?'),
('en:offline_default', 'en', 'offline_default', 'Agents are currently offline. Please leave a message.'),
('en:my_name', 'en', 'my_name', 'I am: '),
('en:edit', 'en', 'edit', 'Edit'),
('en:save', 'en', 'save', 'Save'),
('en:input_placeholder', 'en', 'input_placeholder', 'Type a message, press Enter to send...'),
('en:click_to_record', 'en', 'click_to_record', 'Click to Record Voice'),
('en:recording', 'en', 'recording', 'Recording'),
('en:send', 'en', 'send', 'Send'),
('en:audio_short', 'en', 'audio_short', 'Audio too short'),
('en:mic_error', 'en', 'mic_error', 'Microphone access denied'),
('en:upload_failed', 'en', 'upload_failed', 'Upload failed, please retry'),
('en:file_download', 'en', 'file_download', 'Click to download'),
('en:visitor_default_prefix', 'en', 'visitor_default_prefix', 'Visitor');
