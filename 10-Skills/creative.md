---
kadmoo_type: skill
status: approved
slug: creative
domain: creative
department: creative
name: קריאייטיב (Creative OS)
description: משרד פרסום אוטונומי — Client DNA, Strategy Stack, קונספט, ארט, הפקה, QA, טיוטה ולמידה.
when_to_use: מודעה, קריאייטיב, באנר, ויזואל, וריאציה או קמפיין ממומן. לא הפקת סרטון חדש בלבד (generate-video), לא עריכת סרטון קיים (edit-video).
tool_hints:
  - check_client_dna
  - scan_and_fill_site_data
  - resolve_offer_assets
  - search_site_products
  - fetch_offer_page
  - browse_site_offers
  - add_catalog_item
  - save_brand_asset
  - upsert_creative_request
  - get_creative_request
  - find_creative_principles
  - generate_ad_image
  - generate_video
  - preview_ad_creative
  - list_studio_assets
  - list_ad_drafts
  - launch_ad_draft
  - record_creative_feedback
  - create_campaign_draft
  - activate_campaign
  - get_creative_performance
  - list_brand_assets
  - list_site_catalog
  - get_connect_links
  - create_ticket
---

# Creative OS

מחלקה: [[03-creative]] · Pipeline: [[pipeline-stages]] · ויזואל: [[visual-typography-protocol]] · פרומפט: [[ai-image-prompting]] · היררכיה: [[agency-hierarchy]]

## שלבים
0. Client DNA — check_client_dna; אל תמציא מותג
1. מוצר — resolve_offer_assets / browse_site_offers
2. Strategy Stack + Message Map ב-upsert_creative_request
3. קופי קודם → generate_ad_image (אסינכרוני)
4. תצוגה ממוסגרת (לא "מה דעתך?")
5. בקמפיין ממומן: שמירת העבודה, אישור מדיה, אישור טקסט חי, אישור הדמיה ואישור קהל בכרטיס השלבים; לאחר בדיקת מוכנות — אישור פרסום מסכם אחד.
6. למידה — record_creative_feedback / get_creative_performance

גבולות: רק הלקוח מאשר בשלבי הקמפיין. אישור הפרסום המסכם כולל יצירה מושהית, אימות והפעלה. אל תחשוף מסמכים פנימיים. מודעה אחת = עבודה אחת.

## עבודה שמורה בממומן
פתח workflow עם `upsert_creative_request.campaign_json` כבר באפיון, וקרא `get_campaign_draft` לפני שינוי. עדכן באמצעות `update_ad_draft.campaign_json` עם הגרסה העדכנית. מדיה וטקסט שהופקו נשמרים בעבודה לפני הצגתם לאישור. שינוי טקסט חי אינו מפיק תמונה חדשה. אל תעקוף שלב באמצעות כלי יצירה ישן, ואל תבקש שוב בחירה אורגני/ממומן כאשר הלקוח כבר ביקש קמפיין ממומן.

Paid campaigns use a persisted workflow. Autosave the brief, copy, placement assets and targeting; only the client can approve stages. Read the current revision before edits. The final approval covers paused creation, verification and activation. Missing connections preserve all work; reconnecting never publishes automatically.

## קופי שהלקוח הכתיב
כותרת, טקסט מודעה או מחיר שהלקוח כתב במפורש = קדוש. העתיקו מילה במילה ל-`message_map.client_locked_copy` ב-`upsert_creative_request` (`headline` / `primary_text` / `price_text`) וגם לשדות הייצור התואמים. לעולם אל תחליפו מחיר שהלקוח נתן במחיר מקטלוג, אתר או ספר מותג.
