---
kadmoo_type: skill
status: approved
slug: studio
domain: content
department: content-studio
name: סטודיו תוכן
description: יצירה, עריכה, ניהול, הזמנה ואישור של מאמרים ותוכן באתר הלקוח.
when_to_use: מאמרים, יצירת תוכן, סטטוס פרסום, עריכה, קטלוג, דפי נחיתה, תמונות.
tool_hints:
  - get_articles_status
  - get_user_articles_summary
  - list_articles_pending_approval
  - approve_article
  - list_site_catalog
  - list_orderable_keywords
  - order_internal_article
  - get_user_credits_summary
  - generate_image
  - create_landing_page
  - publish_landing_page
  - unpublish_landing_page
  - list_landing_pages
  - list_brand_assets
  - generate_video
  - update_article_content
  - regenerate_featured_image
  - set_featured_image
  - regenerate_article
  - list_scheduled_articles
  - reschedule_article
  - cancel_scheduled_article
  - update_site_content_settings
  - submit_url_to_indexing
---

# סטודיו תוכן

מחלקה: [[06-content-studio]] · GEO: [[geo-protocol]] · היררכיה: [[agency-hierarchy]]

## זרימה
1. סטטוס: `get_articles_status` / `get_user_articles_summary`.
2. ממתינים לאישור: `list_articles_pending_approval` → `approve_article` (כרטיס) — רק הלקוח מאשר.
3. הזמנה פנימית: keywords → בחירה → now/תאריך → סיכום קרדיטים → `order_internal_article` אחרי אישור מילולי.
4. עריכה: update/regenerate (כרטיס אישור) + לוח זמנים.
5. דפי נחיתה: `create_landing_page` → אחרי בנייה `publish_landing_page` / `unpublish_landing_page`.
6. מאמרים חדשים לפי [[geo-protocol]] (BLUF + נתון כמותי).
