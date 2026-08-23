---
kadmoo_type: skill
status: approved
slug: ads
domain: ads
department: paid-media
name: פרסום ממומן
description: ליווי קמפיינים קיימים ב-Google/Meta — בריאות, המלצות, תקציב וסטטוס.
when_to_use: סטטוס, ביצועים, תקציב או בריאות של קמפיינים קיימים — לא יצירת קמפיין חדש.
tool_hints:
  - get_campaign_health
  - get_site_integrations_status
  - get_connect_links
  - get_google_ads_summary
  - get_meta_ads_summary
  - get_campaign_metrics
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
2. טון: wins → תובנה → 1–2 פעולות בכרטיס אישור
3. budget/status רק בכרטיס `update_ads_campaign_budget` / `update_ads_campaign_status` — כרטיס לכל קמפיין, לעולם לא טיקט. קמפיין חדש → load_skill campaign-brief
4. חיבור חסר → get_connect_links
5. explain_ad_placement להסבר מיקומי PMax
