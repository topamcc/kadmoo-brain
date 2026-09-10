---
kadmoo_type: playbook
status: approved
slug: approval-framework
domain: agency
when_to_use: "תמיד — מסגרת אישורים: מי מאשר, מתי כרטיס, מתי מילולי, מתי אישור כפול"
scope: global
---

# מסגרת אישורים — אישור אישי של הלקוח בלבד

אין צורך באישור אדמין לפעולות שוטפות. הלקוח מאשר בעצמו בפעולות קריטיות.

## סוגי אישור

| סוג | מתי | דוגמאות |
|-----|-----|---------|
| **מיידי** | קריאה בלבד | דירוגים, אנליטיקה, סיכומי Ads, רשימות |
| **אישור מילולי** | כתיבה עם עלות/שינוי — כן מפורש בצ'אט | order_internal_article, order_external_article, add_keywords, run_site_audit, complete_ai_secretary_purchase |
| **כרטיס אישור** | כתיבה/כסף — כפתור אשר/בטל | 23+ כלים (קמפיין, תקציב, פוסט, ליד, מאמר, LP, וידאו, אינדוקס…) |
| **שלבי קמפיין ואישור פרסום מסכם** | קמפיין ממומן חדש | הלקוח מאשר אפיון, פלטפורמה, מדיה, טקסט, הדמיה וקהל; אישור סופי אחד מכסה יצירה מושהית, אימות והפעלה. מסלולים ישנים נשארים מושהים עד אישור הפעלה. |

## כללי ברזל

1. אל תאשר בשם הלקוח — גם לא "נראה לי שהוא מסכים".
2. אל תפנה לאדמין / תמיכה אנושית כשיש כלי — השתמש ב-create_ticket רק כשאין כלי.
3. הצג עלות קרדיטים / תקציב יומי לפני אישור הוצאה.
4. OAuth וסיסמאות — רק בדפדפן הלקוח דרך get_connect_links; הסוכן לא מבצע OAuth.
5. פעולות יזומות (proactive) — קריאה והמלצה בלבד; בלי כתיבה.
6. כלי הגדרות self-proposing רשאי להכין כרטיס, אך לעולם אינו משנה ערך לפני
   אישור. לפני/אחרי מוצגים בכרטיס והערך החי נבדק שוב בזמן הביצוע.
7. אם הערך או ההרשאה השתנו מאז יצירת הכרטיס, הפעולה נעצרת ומוכנה מחדש; אין
   לדרוס שינוי מאוחר יותר.

## כרטיס אישור (רשימה עיקרית)

scan_and_fill_site_data · create_site · create_campaign_draft · launch_ad_draft · activate_campaign · update_ads_campaign_status · update_ads_campaign_budget · update_campaign_creative · update_campaign_targeting · update_campaign_keywords · update_campaign_bidding · update_campaign_text_guidelines · apply_campaign_recommendation · rebuild_campaign · create_social_post · update_lead_status · create_lead · order_reviews · deep_research · create_landing_page · publish_landing_page · unpublish_landing_page · generate_video · submit_url_to_indexing · update_article_content · regenerate_* · set_featured_image · reschedule_article · cancel_scheduled_article · update_site_content_settings · propose_product_setting_change · apply/dismiss_seo_recommendation · approve_article · start_keyword_discovery · start_competitor_keyword_discovery · verify_site_connection

מנהלת לקוחות: [[01-account-management]] · אישור כפול בממומן: [[04-paid-media]] · ניתוב: [[agency-hierarchy]]
