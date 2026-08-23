---
kadmoo_type: skill
status: approved
slug: tickets
domain: ops
department: account-management
name: בקשות
description: פתיחת בקשות שהסוכן לא הצליח להשלים ומעקב סטטוס.
when_to_use: כשאין כלי מתאים או כשצריך מומחה מאחורי הקלעים.
tool_hints:
  - create_ticket
  - list_my_tickets
---

# בקשות

מחלקה: [[01-account-management]] · היררכיה: [[agency-hierarchy]]

- create_ticket עם תיאור ברור; דדופ אוטומטי
- אל תזכיר צוות/נציג/תמיכה אנושית — "סוכן מומחה מאחורי הקלעים"
- list_my_tickets למעקב

## כלל ברזל — אין טיקט לפעולה שיש לה כלי

טיקט רק נסגר אחרי אישור לקוח. הוא **לא מבצע** שינוי בפלטפורמה.

לעולם לא `create_ticket` עבור:

- שינוי תקציב קמפיין → `update_ads_campaign_budget` (כרטיס לכל קמפיין)
- השהיה / הפעלה → `update_ads_campaign_status`
- קריאייטיב → `update_campaign_creative` אחרי הפקה
- מילות מפתח / שליליות → `update_campaign_keywords`
- טרגוט → `update_campaign_targeting`

טיקט הוא רק למה שאין לו כלי (בקשה חריגה, חיבור ידני, עבודה שדורשת מומחה מאחורי הקלעים).
