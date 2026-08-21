---
kadmoo_type: skill
status: approved
slug: ppc-optimization
domain: ads
department: paid-media
name: אופטימיזציית PPC
description: אבחון ואופטימיזציה מקצועיים לקמפיינים חיים בגוגל ובמטא — עוגן תקציב, אבחון דטרמיניסטי, מנוף אחד, הכל בכרטיס אישור.
when_to_use: "אופטימיזציה, שיפור תוצאות, \"הקמפיין לא עובד\", רענון קריאייטיב/קהל/מילות מפתח בקמפיין קיים, שאלות על חלוקת תקציב פרסום."
tool_hints:
  - get_ads_budget_context
  - diagnose_campaign_optimization
  - plan_ads_budget_allocation
  - get_ad_level_performance
  - get_asset_performance
  - get_search_terms
  - get_campaign_health
  - get_pmax_diagnostics
  - get_meta_campaign_recommendations
  - update_ads_campaign_budget
  - update_ads_campaign_status
  - update_campaign_creative
  - update_campaign_targeting
  - update_campaign_keywords
  - apply_campaign_recommendation
  - rebuild_campaign
---

# אופטימיזציית PPC — פרוטוקול המומחה

מחלקה: [[04-paid-media]] · ידע: [[google-ads-rules]] · [[meta-ads-rules]] · [[creative-refresh-ladder]] · [[budget-rulebook]]

## סדר קבוע — בלי לדלג

1. **עוגן תקציב לפני הכל**: `get_ads_budget_context`. אם `retainer_missing` — שאלו את הלקוח פעם אחת מה תקציב המדיה החודשי. לעולם לא להניח מספר ולהמשיך כאילו הוא אמיתי.
2. **אבחון לפני דעה**: `diagnose_campaign_optimization`. האבחון דטרמיניסטי — לא עוקפים את הפסק. פסק `wait` = התשובה המקצועית היא להמתין, עם תאריך חזרה. עריכת קמפיין בלמידה מאפסת אותה.
3. **ביטחון נאמר ללקוח**: insufficient (ממתינים) / directional (שופטים הפצה וקליקים, לא עלויות) / conclusive (מותר לשפוט עלות-לליד).
4. **מנוף אחד בכל פעם** — הראשון ברשימת ה-levers. לא שני שינויים לאותו קמפיין באותו תור; יש צינון בין שינויים.
5. **כל שינוי בקמפיין חי = כרטיס אישור.** כסף לא זז בלי אישור לקוח, בשום רמת אוטונומיה.
6. **"על מה זה מבוסס"** — עונים רק מתוך ה-evidence שהאבחון החזיר: מדד, בנצ'מרק, חלון. לא ממציאים נימוק.

## חוקים שאסור להפר

- קליקים תקינים ולידים לא מגיעים → בעיית יעד (דף נחיתה / טופס / מענה). להמליץ על תמונה חדשה כאן זו רשלנות. קודם מוודאים שמעקב ההמרות תקין.
- רענון קריאייטיב הוא סולם, לא פעולה אחת — ראו [[creative-refresh-ladder]].
- תקציב: צעד אחד עד 25%, מתחת לתקרת הריטיינר. מעבר למרווח = ניוד מקמפיין אחר, לא כסף חדש — ראו [[budget-rulebook]].
- בנייה מחדש (`rebuild_campaign`) רק כשהאבחון פוסק rebuild. מוצגת כניוד: חדש נוצר מושהה, ישן מושהה, סך ההוצאה לא עולה. ההפעלה — אישור נפרד.
- נתונים ברמת מודעה/נכס לפני כל מסקנת קריאייטיב: `get_ad_level_performance`, ובגוגל `get_asset_performance` (מחליפים רק נכסי LOW).

## העברות בין מחלקות

- האבחון מצביע על קריאייטיב → [[03-creative]] מפיק (upsert_creative_request + generate_ad_image), ורק אז כרטיס `update_campaign_creative`.
- הקשר חוצה-ערוצים / מגמות → [[02-strategy-analytics]].
- ליד זול שלא נסגר = עלות-לליד שמשקרת → איכות לידים אצל [[08-crm-client-success]].
