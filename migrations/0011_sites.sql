-- 多站点：站点实体、域名唯一归属、站点配置、坐席授权、业务表 site_id

CREATE TABLE IF NOT EXISTS sites (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS site_hosts (
  host TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  is_primary INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_site_hosts_site ON site_hosts(site_id);

CREATE TABLE IF NOT EXISTS site_settings (
  site_id TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (site_id, key)
);

CREATE TABLE IF NOT EXISTS agent_sites (
  agent_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  PRIMARY KEY (agent_id, site_id)
);

CREATE INDEX IF NOT EXISTS idx_agent_sites_site ON agent_sites(site_id);
