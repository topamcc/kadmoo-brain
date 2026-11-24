---
kadmoo_type: skill
status: approved
slug: seo
domain: seo
department: seo-geo
name: SEO ומילות מפתח
description: דירוגי מילות מפתח, מעקב מיקומים, מגמת שיפור, המלצות On-Site ונתוני חיפוש.
when_to_use: מצב קידום האתר, דירוגים, מילות מפתח, מיקומים בגוגל, Search Console, תיקון תוכן לפי SEO/GEO. לא לחיבורים חדשים (seo-setup), לא לאודיט טכני בלבד (audit), לא לניהול רשימת ביטויים בלבד (keywords).
tool_hints:
  - get_keyword_rankings
  - list_site_keywords
  - suggest_keywords
  - add_keywords
  - get_search_console_data
  - get_analytics_insights
  - get_site_integrations_status
  - check_seo_setup
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
0. "מה מצב הקידום?" — קודם `check_seo_setup` + `get_site_integrations_status`, אחר כך `get_audit_summary` + `get_analytics_insights` + `get_keyword_rankings`. בלי אודיט קיים — בקשו אישור ל-`run_site_audit`. חיבור חסר → `get_connect_links`.
1. דירוגים: `get_keyword_rankings` — הצג deltas וחלוקה; אל תמציא מיקומים.
2. ביטויים: `list_site_keywords` → `suggest_keywords` → בחירת לקוח → `add_keywords` רק אחרי אישור מפורש.
3. מחקר מעמיק: `start_keyword_discovery` / `start_competitor_keyword_discovery` → מעקב ב-`get_user_discovery_sessions`.
4. לולאת תיקון: `run_site_audit` / `list_seo_recommendations` → תיקון מאמר (`update_article_content` / regenerate) → `submit_url_to_indexing` → `apply_seo_recommendation` או `dismiss`.
5. GEO: יישם [[geo-protocol]] + [[geo-content-patterns]] ותאם עם [[06-content-studio]]. אשכולות, לא מילים בודדות.

## עבודה עם לוגו מאושר

במאמרים משתמשים בשם העסק ובעובדות המאושרות מתיק המותג. תמלול הלוגו משמש לזיהוי חזותי ולבריף תמונת המאמר. אי־אפשר להסיק ממנו לבדו מספר לפניות, פריסה ארצית או הבטחה מסחרית. אם הלוגו מופיע בתמונת המאמר, מוסרים את הקובץ שנבחר עם תיאורו ומוודאים התאמה. [[ai-image-prompting]]

## פרופיל העסק בגוגל

- בקדמו בוחרים את אתר הלקוח ואת הסניף שהוא חיבר. אם מנוהלים כמה סניפים, מאמתים את הכתובת לפני הצגת נתונים או הכנת הצעה.
- קוראים מגוגל את פרטי העסק והביקורת הרלוונטית. מנסחים תיאור, פוסט או מענה לפי ספר המותג המאושר של האתר, בשפה שמתאימה לקהל ולכותב הביקורת. שינוי בשעות, בכתובת או בשירותים מצריך עובדה שהעסק אישר.
- מציגים ללקוח את הסניף ואת הנוסח המדויק לאישור. אם ספר המותג או נתוני המקור השתנו, מרעננים את ההצעה. מדווחים בנפרד על שליחה לגוגל ועל פרסום שגוגל אישרה.
- מטפלים קודם במענה שנדחה ובביקורות בדירוג נמוך שמחכות לתגובה. מענה שממתין לבדיקת גוגל כבר הוגש. לבדיקת שינוי בטלפון, בכתובת או בשעות מציגים ללקוח את גרסת העסק ואת הגרסה שגוגל מחזירה ומבקשים שיאשר את הפרט הנכון.
- במדידת פניות משייכים לסניף רק פניות עם פרטי קשר שנקלטו בקדמו עם התיוג שלו. מציגים את התקופה ואת מצב קישור המדידה. מכינים קישור לאישור ושומרים על תיוג קיים. בכלי חיצוני מפנים למסך הפרופיל המאובטח בקדמו.
- לניתוח חיפוש מקומי משתמשים בחשיפות, לחיצות לחיוג, קליקים לאתר, בקשות ניווט וביטויי חיפוש שגוגל החזירה. מסמנים תקופות וערכים שמתחת לסף הדיווח. כשנתון חסר מציינים זאת, ושומרים על השם האמיתי של העסק ועל תיאור שירותים עובדתי.
