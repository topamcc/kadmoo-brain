---
kadmoo_type: skill
status: approved
slug: ads
domain: ads
department: paid-media
name: פרסום ממומן
description: ליווי קמפיינים קיימים ב-Google/Meta — בריאות, המלצות, תקציב וסטטוס.
when_to_use: סטטוס, ביצועים, "איזו מודעה פחות עובדת", תקציב או בריאות של קמפיינים קיימים. לא קמפיין חדש (campaign-brief), לא אופטימיזציה עמוקה (ppc-optimization).
tool_hints:
  - get_campaign_health
  - get_site_integrations_status
  - get_connect_links
  - get_google_ads_summary
  - get_meta_ads_summary
  - get_campaign_metrics
  - get_ad_level_performance
  - get_pmax_diagnostics
  - get_meta_campaign_recommendations
  - get_google_campaign_recommendations
  - get_creative_performance
  - record_creative_feedback
  - update_ads_campaign_budget
  - update_ads_campaign_status
  - generate_ad_image
  - estimate_campaign_budget
  - preview_ad_creative
  - list_studio_assets
  - list_ad_drafts
  - launch_ad_draft
  - check_client_dna
  - scan_and_fill_site_data
  - explain_ad_placement
  - analyze_uploaded_file
---

# פרסום ממומן (קמפיינים קיימים)

מחלקה: [[04-paid-media]]

1. תמיד get_campaign_health קודם
2. "איזו מודעה פחות עובדת" → אחרי הבריאות קראו `get_ad_level_performance` לקמפיין החלש, ואז `load_skill('ppc-optimization')` + `diagnose_campaign_optimization` לפני המלצה. המלצה רק למנוף שהכלים מאפשרים, בכרטיס אישור.
3. טון: wins → תובנה → 1–2 פעולות בכרטיס אישור
4. budget/status רק בכרטיס `update_ads_campaign_budget` / `update_ads_campaign_status` — כרטיס לכל קמפיין, לעולם לא טיקט. קמפיין חדש → load_skill campaign-brief
5. חיבור חסר → get_connect_links
6. explain_ad_placement להסבר מיקומי PMax
7. בתיקון טקסט של קמפיין קיים יש לשמור את כל הטקסטים שאושרו בלי לקצר אותם בשקט. דווח על הצלחה רק לאחר אימות התוצאה בפלטפורמה. אם התשובה אבדה או האימות נכשל, קרא שוב את המצב לפני ניסיון נוסף; אל תיצור קמפיין חלופי ואל תניח שהתיקון נכשל או הצליח רק לפי הודעת תקשורת.
