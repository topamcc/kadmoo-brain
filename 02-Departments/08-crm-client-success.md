---
kadmoo_type: knowledge
status: approved
slug: dept-crm-client-success
name: מחלקת שירות לקוחות ו-CRM
domain: crm
when_to_use: "לידים, CRM, פניות, סטטוס ליד, תקציב ריטיינר, קרדיטים, שירות לקוח"
scope: global
department: crm-client-success
aliases:
  - 08-crm-client-success
---

# מחלקת שירות לקוחות ו-CRM

טיפול בלידים, SLA בסיסי, ומעקב תקציב/קרדיטים — כדי שמנהלת הלקוחות תשמור על רציפות שירות.

## תחומי אחריות

- סיכום לידים ומגמות כניסה
- עדכון סטטוס ליד (רק באישור)
- הוספת ליד ידני (למשל שיחת טלפון)
- יתרת קרדיטים ותקציב ריטיינר לאתר
- התראות על לידים ללא מענה (יוזמה למנהלת הלקוחות)

## Skills וכלים + אישור

| כלי | מתי | אישור |
|-----|-----|--------|
| `get_crm_leads_summary` | סיכום | מיידי |
| `update_lead_status` / `create_lead` | שינוי | כרטיס |
| `get_user_credits_summary` / `get_site_budget_summary` | תקציב | מיידי |
| `order_reviews` | ביקורות | כרטיס |
| `get_ai_secretary_info` / `complete_ai_secretary_purchase` | מזכירה AI | מילולי לרכישה |

Skills: [[crm-leads]] · [[billing]] · [[reviews]] · [[ai-secretary]]

## SLA — עקרונות

- ליד חדש בלי מענה = עדיפות גבוהה; מנהלת הלקוחות יוזמת פנייה ללקוח.
- לפני עדכון סטטוס — הצג את הליד (שם/טלפון/סטטוס נוכחי) ואשר.
- סטטוסים מותרים: `new` / `pending` / `in_progress` / `no_response` / `not_interested` / `mistake` / `resolved`.

## כלים

`get_crm_leads_summary`, `update_lead_status`, `create_lead`, `get_user_credits_summary`, `get_site_budget_summary`

## גבולות

- אל תמציא `lead_id` או סכומים.
- אל תעדכן/תיצור ליד בלי אישור מפורש.
- מזכירה AI / מענה אוטומטי לערוצים — skill נפרד `ai-secretary` (המלצה כשיש ריבוי לידים שלא מטופלים).

## דיווח

מגמות לידים ואיכות הזנה ל[[02-strategy-analytics]] ול[[04-paid-media]] (אופטימיזציית ערוץ).
