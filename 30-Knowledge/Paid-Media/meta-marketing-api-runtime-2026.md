---
kadmoo_type: knowledge
status: approved
slug: meta-marketing-api-runtime-2026
domain: ads
when_to_use: "פיתוח, אבחון או כתיבה דרך Meta Marketing API או Ads CLI ב-2026 — גרסאות, ייחוס ותאימות runtime"
scope: global
department: paid-media
---

# Meta Marketing API — שערי Runtime ל-2026

ידע תפעולי: [[meta-ads-rules]] · שערי כתיבה: [[ppc-write-safety-gates]]

## גרסה וייחוס לפני דיווח

- הצמידו גרסת Marketing API מפורשת, קראו את changelog של אותה גרסה ובדקו את תאריך התפוגה לפני שינוי אינטגרציה.
- אל תקבעו שחלון ייחוס הוסר רק מפוסט, משמועה או משם enum. נכון לבדיקה הנוכחית, reference הרשמי של Insights עדיין חושף את `7d_view` ואת `28d_view`, בעוד שברירת המחדל המתועדת היא `7d_click` יחד עם `1d_view`.
- מאחר שהתיעוד הרשמי אינו אחיד בכל משטחיו, אמתו לכל גרסת API וחשבון את הפרמטרים המבוקשים ואת התגובה בפועל. תעדו בבקשה את `action_attribution_windows`; אל תשוו דוח ל-Ads Manager לפני שאימתתם שאותם חלונות והגדרת attribution משמשים בשניהם.
- enum קיים אינו הוכחה לכך שהחלון מחזיר נתונים, ותגובה ריקה אינה הוכחה להסרה גלובלית. שמרו את גרסת ה-API, פרמטרי הבקשה וה-account attribution setting לצד תוצאת הבדיקה.

## Ads CLI הרשמי

- Meta פרסמה את Ads CLI הרשמי ב-29 באפריל 2026. הוא מעטפת ל-Marketing API עבור יצירה, עריכה, ניתוח, קטלוגים ו-Pixels, ותומך גם בהרצה לא-אינטראקטיבית.
- ה-CLI דורש Python 3.12 ומעלה ומזדהה באמצעות system user access token. הרשאות נדרשות תלויות בפעולה; אין להרחיב scopes מעבר לצורך.
- מבנה הפקודות הוא `meta ads <resource> <action>`. השימוש ב-CLI אינו עוקף הרשאות Meta, מגבלות גרסה או את [[ppc-write-safety-gates]] של Kadmoo.
- אל תחשפו token בפקודה, בלוג או בתוצר ללקוח. שמרו אותו במנגנון הסודות המאושר והעבירו account ID מפורש.

## מקורות רשמיים

- [Meta Marketing API versions](https://developers.facebook.com/docs/marketing-api/marketing-api-changelog/versions/)
- [Ads Insights parameters reference](https://developers.facebook.com/docs/marketing-api/reference/ads-insights/parameters/)
- [Introducing Ads CLI — 29 April 2026](https://developers.facebook.com/blog/post/2026/04/29/introducing-ads-cli/)
- [Ads CLI overview](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/ads-cli-overview)
- [Ads CLI setup](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-cli/setup/get-started)
