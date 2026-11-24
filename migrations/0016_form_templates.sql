-- 表单模板中心：支持用户另存为自定义模板并自主控制是否跨站点共享
CREATE TABLE IF NOT EXISTS form_templates (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'custom',
  description TEXT,
  suggested_key TEXT,
  render_template TEXT NOT NULL DEFAULT 'standard',
  is_shared INTEGER NOT NULL DEFAULT 1,
  site_id TEXT,
  created_by TEXT,
  fields_json TEXT NOT NULL,
  style_config_json TEXT,
  translations_json TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_form_templates_shared ON form_templates(is_shared);
CREATE INDEX IF NOT EXISTS idx_form_templates_site ON form_templates(site_id);
