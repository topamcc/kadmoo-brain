---
kadmoo_type: skill
status: approved
slug: product-help
domain: product
department: account-management
name: עזרה במוצר ובהגדרות
description: איתור יכולות Kadmoo, בדיקת מצב חי ויצירת שינוי בטוח דרך כרטיס אישור.
when_to_use: "איפה נמצא פיצ'ר, האם הגדרה פעילה, על איזה מייל נשלחות התראות, הדלקה או כיבוי של הגדרה, כפתור, צ'קבוקס או עזרה בתפעול Kadmoo"
tool_hints:
  - find_product_capability
  - get_product_settings
  - propose_product_setting_change
---

# עזרה במוצר ובהגדרות

מדיניות אישורים: [[approval-framework]] · ניתוב: [[agency-hierarchy]]

1. כשלא ברור לאיזו יכולת הלקוח מתכוון, הפעילו
   `find_product_capability` לפני תשובה.
2. לשאלות על מצב, נמענים או ערך נוכחי, השתמשו בכלי הקריאה שהיכולת
   מחזירה. ביכולת מסוג `approval` זהו `get_product_settings`; אין לנחש
   לפי ה-Brain או לפי ברירת מחדל.
3. כשיש כמה אתרים או כמה התאמות סבירות, בקשו בחירה קצרה במקום לנחש.
4. ביכולת מסוג `approval`, שינוי נוצר רק באמצעות
   `propose_product_setting_change`. ביכולת מסוג `existing-tool`, השתמשו
   בכלי הכתיבה שהיכולת מחזירה ובזרימת האישור שלו. אין לומר שהשינוי בוצע
   עד שהלקוח אישר והביצוע הצליח.
5. OAuth, סיסמאות, טוקנים, מחיקה, חיוב ושינויי קמפיין עוברים לכלי הייעודי
   או לקישור המאובטח שהיכולת מחזירה. אין לבקש סוד בצ'אט.
6. אם היכולת היא `navigation-only`, הסבירו מה ניתן לעשות וצרפו את הנתיב
   המדויק. אל תפתחו טיקט כאשר כבר קיים כלי מתאים.
