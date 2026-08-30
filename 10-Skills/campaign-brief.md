---
kadmoo_type: skill
status: approved
slug: campaign-brief
domain: ads
department: paid-media
name: אפיון קמפיין
description: תהליך סוכנות מלא — Client DNA, אפיון, סקיצה, קריאייטיב, טיוטה מושהה והפעלה באישור כפול.
when_to_use: קמפיין חדש / לידים / "מה כדאי לפרסם" / הצעה לפרסום ממומן. לא ליווי קמפיין קיים (ads), לא אופטימיזציה (ppc-optimization).
tool_hints:
  - check_client_dna
  - scan_and_fill_site_data
  - get_site_info
  - resolve_offer_assets
  - list_brand_assets
  - list_site_keywords
  - get_crm_leads_summary
  - get_google_ads_summary
  - get_meta_ads_summary
  - get_social_status
  - get_connect_links
  - get_site_integrations_status
  - estimate_campaign_budget
  - suggest_campaign_headlines
  - suggest_campaign_descriptions
  - generate_ad_image
  - create_campaign_draft
  - activate_campaign
  - update_ads_campaign_budget
  - update_ads_campaign_status
  - create_ticket
  - browse_site_offers
  - get_meta_whatsapp_numbers
  - list_meta_lead_forms
  - list_landing_pages
  - check_campaign_readiness
  - estimate_campaign_outcomes
  - check_meta_copy_policy
  - ask_clarify
  - update_ad_draft
  - get_campaign_draft
---

# אפיון קמפיין

מחלקה: [[04-paid-media]] · קריאייטיב: [[03-creative]] · היררכיה: [[agency-hierarchy]] · בטיחות: [[ppc-write-safety-gates]] · API: [[google-ads-api-runtime-2026]] · [[meta-marketing-api-runtime-2026]]

## זרימה
1. DNA קודם (`check_client_dna`) — בלי שאלות מיותרות.
2. עד 3 שאלות רק על מה שחסר; שלוף נתונים במקביל.
3. חיבור חסר → `get_connect_links` / `get_site_integrations_status` (אל תגיד רק "לא מחובר").
4. סקיצה מובנית → אישור א׳ → `create_campaign_draft` (מושהה).
5. אישור ב׳ → `activate_campaign` (הוצאת כסף).
6. קריאייטיב חסר → skill `creative`.

## בחירת מבנה לפני כרטיס אישור

- Google Search/חיפוש → `google_campaign_type=search_ai_max`; לא הופכים בקשת Search ל-Performance Max. נדרשים כתובת יעד, לפחות 3 כותרות ו-2 תיאורים; תמונה אינה תנאי ל-RSA. בזמן היצירה מעבירים `Campaign.text_guidelines` מתוך חוקי המותג המאושרים.
- Google Performance Max → `google_campaign_type=performance_max`; נדרשים כתובת יעד, תמונת marketing ולוגו ריבועי נגישים, קבוצת נכסים מלאה, `Campaign.text_guidelines` מאושרים ומעקב המרות. מחלקים Asset Groups לפי מוצר או שירות ולא מערבבים הצעות לא קשורות; המבנה נוצר אטומית.
- Meta: מאשרים יעד לפני יצירה. CBO מתאים לסקייל של קריאייטיב מוכח; ABO מתאים למעבדת בדיקות. Cost Cap מוצע רק כשיש יעד עלות, חלון attribution מאומת והבנה שהוא עשוי להפחית ניצול תקציב.
- לפני הצגת הכרטיס מריצים preflight מלא. הכרטיס מציג סוג קמפיין, יעד, תקציב, נכסים וסטטוס מושהה. אם חסר תנאי, מציגים מה חסר ומה הפעולה הבאה — לא כרטיס שנועד להיכשל.
