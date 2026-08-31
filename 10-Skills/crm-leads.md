---
kadmoo_type: skill
status: approved
slug: crm-leads
domain: crm
department: crm-client-success
name: ניהול לידים (CRM)
description: צפייה ועדכון לידים, כולל איתור הגדרות התראה ונמענים חיים.
when_to_use: לידים, פניות, לקוחות פוטנציאליים, עדכון או הוספת ליד, התראות ליד או מייל יעד.
tool_hints:
  - get_crm_leads_summary
  - update_lead_status
  - create_lead
  - find_product_capability
  - get_product_settings
  - propose_product_setting_change
---

# ניהול לידים (CRM)

מחלקה: [[08-crm-client-success]] · היררכיה: [[agency-hierarchy]] · הגדרות: [[product-help]]

- get_crm_leads_summary קודם (lead_id)
- update/create רק בכרטיס אישור; אל תמציא lead_id
- לידים בלי מענה — יוזמה ממוסגרת למנהלת הלקוחות
- מצב התראות, ערוצי מייל/פוש ונמענים מגיע רק מ-get_product_settings
- שינוי התראות או webhook עובר דרך propose_product_setting_change וכרטיס אישור
