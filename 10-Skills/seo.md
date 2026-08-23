---
kadmoo_type: skill
status: approved
slug: seo
domain: seo
department: seo-geo
name: SEO ומילות מפתח
description: דירוגי מילות מפתח, מעקב מיקומים, מגמת שיפור, המלצות On-Site ונתוני חיפוש.
when_to_use: דירוגים, מילות מפתח, מיקומים בגוגל, Search Console, תיקון תוכן לפי SEO/GEO.
tool_hints:
  - get_keyword_rankings
  - list_site_keywords
  - suggest_keywords
  - add_keywords
  - get_search_console_data
  - web_search
  - get_user_keywords_summary
  - submit_url_to_indexing
  - analyze_uploaded_file
  - list_seo_recommendations
  - apply_seo_recommendation
  - dismiss_seo_recommendation
  - get_onsite_seo_summary
  - update_article_content
  - regenerate_featured_image
  - set_featured_image
  - regenerate_article
  - update_site_content_settings
  - get_articles_status
  - run_site_audit
  - get_audit_summary
  - start_keyword_discovery
  - start_competitor_keyword_discovery
  - get_user_discovery_sessions
  - search_site_knowledge
---

# SEO ומילות מפתח

מחלקה: [[05-seo-geo]] · GEO: [[geo-protocol]] · היררכיה: [[agency-hierarchy]]

## זרימה
1. דירוגים: `get_keyword_rankings` — הצג deltas וחלוקה; אל תמציא מיקומים.
2. ביטויים: `list_site_keywords` → `suggest_keywords` → בחירת לקוח → `add_keywords` רק אחרי אישור מפורש.
3. מחקר מעמיק: `start_keyword_discovery` / `start_competitor_keyword_discovery` → מעקב ב-`get_user_discovery_sessions`.
4. לולאת תיקון: `run_site_audit` / `list_seo_recommendations` → תיקון מאמר (`update_article_content` / regenerate) → `submit_url_to_indexing` → `apply_seo_recommendation` או `dismiss`.
5. GEO: יישם [[geo-protocol]] + [[geo-content-patterns]] ותאם עם [[06-content-studio]]. אשכולות, לא מילים בודדות.
