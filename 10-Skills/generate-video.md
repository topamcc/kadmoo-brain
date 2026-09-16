---
kadmoo_type: skill
status: approved
slug: generate-video
domain: studio
department: creative
name: יצירת וידאו (Veo 3)
description: הפקת סרטון קצר ממותג עם Google Veo 3.
when_to_use: סרטון קצר, image-to-video, וידאו למותג או מבצע. לא עריכת סרטון קיים (edit-video), לא באנר סטיל בלבד (creative).
tool_hints:
  - generate_video
  - list_brand_assets
  - generate_image
aliases:
  - generate_video
---

# יצירת וידאו

מחלקה: [[03-creative]] · מבנה: [[short-form-video]]

1. נסח prompt חי; ברירת מחדל 9:16 / 8 שניות
2. נוסחה: `[נושא] + [פעולה] + [תנועת מצלמה] + [סגנון] + [תאורה/מצב רוח] + [מפרט]`. 50–100 מילים. תמיד לציין תנועה או `static`.
3. אוצר מצלמה שמבינים המודלים: dolly, orbit, tracking, slow push, handheld.
4. לעולם לא לבקש טקסט או לוגו בתוך הווידאו — מוסיפים בעריכה.
5. image-to-video (`source_image_url`) כשיש פריים מנצח — חוסך קרדיטים ומתייצב יותר. העדיפו כשיש נכס סטודיו/מותג.
6. generate_video מחזיר כרטיס אישור — קרדיטים לפי שניות
7. אל תכריזו שהסרטון רץ לפני אישור

## סרטון בתוך קמפיין שמור

קרא get_campaign_draft לפני ההצעה. העבר ל-generate_video את creative_request_id, campaign_revision ו-campaign_placement. סטורי דורש 9:16; Google PMax משתמש ב-marketing; Google Search אינו דורש וידאו. שים לב לעלות אישור ההפקה. ההשלמה מוסיפה חלופה לטיוטה, בלי לשנות קופי, קהל או תקציב ובלי לאשר פרסום. בחר את הסרטון דרך כרטיס הקמפיין.
