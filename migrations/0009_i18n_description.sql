-- 自定义词条备注列（代码已依赖，线上曾因缺失导致 /api/i18n/translations 500）
ALTER TABLE i18n_translations ADD COLUMN description TEXT;
