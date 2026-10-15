---
kadmoo_type: skill
status: approved
slug: studio
domain: content
department: content-studio
name: סטודיו תוכן
description: הכנת שאלות ותסריט, הקלטה, עיבוד ותיקון וידאו בסטודיו, לצד יצירה וניהול של מאמרים ותוכן באתר הלקוח.
when_to_use: סטודיו תוכן, שאלות לצילום, תסריט, הקלטה, העלאת סרטון, כתוביות, תיקוני וידאו, מאמרים, סטטוס פרסום, קטלוג, דפי נחיתה ותמונות.
tool_hints:
  - get_content_studio_state
  - prepare_content_studio_render
  - get_content_studio_result
  - create_social_post
  - quote_content_studio
  - prepare_content_studio_draft
  - get_articles_status
  - get_user_articles_summary
  - list_articles_pending_approval
  - approve_article
  - list_site_catalog
  - list_orderable_keywords
  - order_internal_article
  - get_user_credits_summary
  - generate_image
  - create_landing_page
  - publish_landing_page
  - unpublish_landing_page
  - list_landing_pages
  - list_brand_assets
  - generate_video
  - update_article_content
  - regenerate_featured_image
  - set_featured_image
  - regenerate_article
  - list_scheduled_articles
  - reschedule_article
  - cancel_scheduled_article
  - update_site_content_settings
  - submit_url_to_indexing
---

# סטודיו תוכן

## הדמיות פרסום באונבורדינג

- הדמיית אונבורדינג משתמשת בתהליך היצירה של הסטודיו, אך אינה אישור לפרסום או לחיוב. קרא את המצב החי; כאשר ההפקה רצה או נכשלה, אל תציג אותה כמוכנה. הפנה לתצוגת ההדמיה באונבורדינג לבדיקת מצב, השוואת גרסאות ושליחת תיקון כללי או אזורי. המכסה והגרסה הקובעת מגיעות מהמערכת; אין להמציא מכסה, לעקוף אותה באמצעות יצירה מחדש, או להפעיל כלי תמונה בתשלום במקום ההדמיה.
- Onboarding previews reuse Studio production without authorizing publication or client charges. Read live status; running or failed production is not ready. Use the onboarding preview for status, version comparison and explicit general or regional revision requests. Read quota and current version from the application; never invent an allowance, bypass it with regeneration or substitute a paid image tool.

## עבודת וידאו קיימת

- פעולות בעורך הגרסאות משתמשות ב־`edit_operation`: שמירה (`save`), ייצוא (`export`), ביטול (`cancel`) ואישור (`approve`). כולן מתחילות בהצעה עם הגרסה החיה והחתימה שלה. אין להמציא אישורי חיתוך ב־`reviewedFrames`; שינוי חיתוך ישיר מחייב בדיקה חדשה של הלקוח. תוצאה חלקית, לרבות המחשה שהושמטה או כשל בתכנון Motion, דורשת בחירה מפורשת של הלקוח ב־`accept_partial`; אין להסיק אותה מאישור קודם.
- Version editor operations use `edit_operation`: `save`, `export`, `cancel`, or `approve`, with the live revision and its signature. Never fabricate `reviewedFrames`: a changed direct crop requires a fresh client review. A partial result, including omitted illustrations or failed Motion planning, requires explicit client acceptance through `accept_partial`; an earlier approval does not imply acceptance.
- לקליפ פודקאסט קיים, קרא את `podcastClips` והצע פתיחה בעורך באמצעות `prepare_content_studio_draft` עם `podcast_clip_id` ו־`draft_json={}`. הפעולה דורשת אישור, שומרת את המקור והתוצרים הקודמים ואינה מפיקה, מחייבת או מפרסמת. לאחר הפתיחה קרא את `recordingId` שהוחזר והמשך באותן פעולות גרסה. אין לשלב מזהה קליפ עם מזהה הקלטה או פריט באותה בקשה.
- For an existing podcast clip, read `podcastClips` and propose opening the shared editor using `prepare_content_studio_draft`, `podcast_clip_id`, and `draft_json={}`. Opening requires approval, preserves the source and previous outputs, and does not generate, charge, or publish. Read the returned `recordingId` before continuing with revision operations. Do not combine a clip ID with a recording or item ID in the same request.
- עריכה בעלת גרסאות זמינה רק לפי `editorAvailable` בקריאה החיה. עם `recording_id`, קוראים את `editVersions` ואת הגרסה העדכנית לפני תיקון. `prepare_content_studio_draft` עם `edit_json`, `expected_revision` ו־`draft_json={}` מציע לשמור תיקון בלבד; אינו שומר לפני אישור. יש לשמור את המקור, מזהי הנכסים והגדרות העיבוד, ולשנות רק מה שהלקוח ביקש. שמירת תיקון מבטלת את תוקף האישור הקודם. הלקוח צופה, מייצא ומאשר את כל התוצרים בסטודיו. שחזור יוצר גרסה חדשה ושומר את ההיסטוריה.
- Versioned editing is available only when the live reader reports `editorAvailable`. Read `editVersions` with `recording_id` before proposing `edit_json` and `expected_revision` through `prepare_content_studio_draft` (use `draft_json={}`). Never mutate before approval. Preserve source, asset IDs and processing choices. The client reviews, exports and approves all selected outputs in Studio. Saving invalidates the prior approval; restoring creates a new version without deleting history.
- במסלול החדש פיד ריבועי וסטורי משתמשים בחיתוך ישיר ללא השלמת רקע. בחן את הפריים עם הלקוח; אין להבטיח שהדובר או המוצר יישארו בפריים רק על סמך יחס התמונה. מקצועי מלא הוא ברירת המחדל לעבודות חדשות; המראה המקורי נשמר, ושינוי מראה או שיפור וידאו דורשים בחירה מפורשת. הזמינות, הבחירות והמחיר נקראים מהמערכת. אין להוסיף מחיר בגלל Motion ואין להבטיח זמן סיום קבוע.
- Square feed and story use direct crop without background padding in the new route. Review framing with the client; aspect ratio alone does not verify subject visibility. New work defaults to full professional editing while preserving appearance. Appearance changes and video enhancement require explicit selection. Read availability, settings and price live; Motion does not justify an extra fee or a promised completion time.

- קודם `get_content_studio_state`: המשך מאותה עבודה וקרא את גרסת הטיוטה לפני תיקון. שמור נתונים קיימים ושאל רק על פרטים חסרים.
- `prepare_content_studio_draft` מציע שמירת טיוטה לאחר אישור. בעריכה העבר את `item_id` ואת `expected_updated_at` שקיבלת בקריאה. שמירה אינה אישור הפקה בתשלום או פרסום.
- הכנה לצילום: כתוב שאלות ותסריט לפי הבריף ועובדות העסק, ושמור אותם ב־`recordingGuide.questions` ו־`recordingGuide.script` בתוך `draft_json`. שאל רק על מידע חסר. ההנחיות מופיעות לאותו לקוח לפני צילום באותה עבודה; זה אינו ייצור קריינות. בתיקון תסריט שמור את ההגדרות, הפורמטים והנכסים האחרים. לאחר השמירה החזר את קישור העבודה המדויק, הכולל את מזהה הפריט, כדי שהלקוח ימשיך בהקלטה או בהעלאה.
- פורמטי הסטודיו: `square` פיד רגיל, `feed` פיד מורחב, `story` סטורי/ריל, `landscape` YouTube. פרטי המידות והבחירה הנוכחית מגיעים מהמפרט והטיוטה החיים. `deliveryFormats` מציין את הקבצים שהלקוח בחר לקבל, בנפרד מהפורמט שפתוח בתצוגה ובעריכה. בשינוי בחירה שמור לפחות פורמט אחד ואת העיצובים של יתר הפורמטים. אין לערוך את `outputs` הטכני כדי לבחור תוצרים, ואין להעביר לפרסום קובץ פנימי שלא נבחר. בטיוטה חדשה אפשר להשאיר את ברירת המחדל של המערכת; בטיוטה קיימת יש לשמר את הבחירה שנקראה. העתקת תמונה או פריסה דורשת פורמט יעד מפורש ואינה משנה את הבחירה למסירה.
- `contain` משמר את כל הפריים; `cover` ממלא את המסגרת בחיתוך. אין להציג חיתוך שמאבד פרטים כהפקה מותאמת ומאושרת.
- הקלטה, העלאה והרשאת מצלמה הן פעולות של הלקוח במסך הסטודיו, עם חזרה לאותה עבודה. אל תמציא הקלטה או מזהה תוצר.
- לפני הפקה יש להציג מחיר ולאפשר אישור מפורש. אין להסיק מתקציב קודם היתר להפקה נוספת. אם כלי עיבוד או העברה ליעד אינם זמינים בקטלוג, פתח את העבודה במסך והסבר בדיוק את השלב שנותר.
- `quote_content_studio` מחשב מחיר חי לאותה הקלטה וטיוטה לפי תמחור המסך, ומבדיל בין שינוי עיצוב שאינו מפיק מחדש לבין עיבוד חדש. המחיר בקרדיטים ואינו מפעיל הפקה; שינוי אחרי ההצעה דורש תמחור מעודכן.
- `prepare_content_studio_render` מציע הפקה או תיקון לאותה הקלטה, עם `expected_recording_at` מהצעת המחיר. רק לחיצת הלקוח על האישור מתחילה עיבוד. שינוי מקור או מחיר מבטל את ההצעה. תיקון כתוביות אינו סיבה להחלפת מראה או יצירת נכסי המחשה חדשים.
- לאחר מצב מוכן: `get_content_studio_result` מחזיר גרסאות וקישור למסך סושיאל או ממומן. בחר את הקובץ המתאים לכל מיקום. המסלול אינו מפרסם; נדרש אישור סופי על הטקסט, המדיה, היעדים, המועד והתקציב. אל תציג קישור לפתיחת מסך כהוכחת פרסום בפלטפורמה.
- קישור למסך אינו טיוטה שמורה ואינו כרטיס אישור. אם התבקשה הכנת טיוטת סושיאל בתוך השיחה, המשך ל־`create_social_post` עם הנכס המתאים ו־`video_qa_recording_id`; לשמירת טיוטה בלבד השתמש ב־`publish_now=false` וללא תזמון. רק תוצאת כלי ההצעה מוכיחה שנוצר כרטיס אישור. תיקון טקסט שומר על אותו נכס ויעד ואינו מפעיל הפקת מדיה.
- אם הכלי מחזיר `technicalInspection=completed`, המידות, משך הסרטון, הקידוד ונוכחות האודיו נבדקו בקבצים בפועל. זה אינו אישור איכות קריאייטיב או מדיניות הפלטפורמה. כשבדיקת קובץ נכשלת, אל תחליף את הממצאים במידות הפורמט המתוכנן או במשך ההקלטה השמור, ואל תמציא קישור להעברה. שמור את העבודה והסבר את החסם המדויק. אם סטטוס הבדיקה אינו קיים בתוצאה, אל תטען שהבדיקה הושלמה.
- בהעברת תוצר מוכן, היעדר גרסה שאינה נדרשת ליעד אינו סיבה להפקה נוספת. העבר רק גרסאות קיימות ומתאימות; אם חסר פורמט נתמך ביעד, הסבר מה נדרש והצע מחיר לפני הפקה נוספת. אין לסמן סרטון מרובע או רוחבי כאנכי או כפיד 4:5 כדי לעקוף את החוסר. לפני הפקה חדשה קרא את רשימת הפורמטים בהצעת המחיר ואל תבטיח שהמנוע יפיק פורמט יחיד אם ההצעה כוללת אחרים.

- בהעברה לממומן יש לבחור במפורש את הפלטפורמה: `ads_platform=meta` או `ads_platform=google_pmax`. ב־Performance Max מועברות רק גרסאות אנכית, מרובעת ורוחבית, ומשך הסרטון חייב להיות עשר שניות לפחות. פיד 4:5 אינו תחליף לגרסה נתמכת בגוגל. הקישור פותח את האשף המתאים עם הנכסים הקיימים ואינו יוצר או מפרסם קמפיין. קמפיין חיפוש אינו יעד לסרטון.
- אותן אפשרויות יעד מוצגות במסך תוצאת הסטודיו: סושיאל, Meta ו־Google Performance Max. אפשר להמשיך במסך או דרך הסוכן באותה עבודה; אין להפיק שוב סרטון רק כדי לעבור לאשף אחר. סרטון קצר מדי נשאר שמור, ויש להסביר את דרישת היעד לפני הצעת הפקה נוספת.
- אם הלקוח כבר בחר טקסט, העבר אותו ב־`caption` ללא שינוי. בסושיאל וב־Meta הוא משמש כטקסט הפוסט או המודעה. ב־Google Performance Max הוא מועבר כבריף לעריכה ולהתאמה לכותרות ולתיאורים, ואינו אישור לנכסי טקסט מוכנים. פתיחת אשף הממומן לא אמורה לייצר קופי; אם חסר טקסט, השלם אותו במסגרת העבודה והאישור לפני פרסום. אל תציג בריף שהועבר לגוגל כאילו כבר הותאם למגבלות השדות.

מחלקה: [[06-content-studio]] · GEO: [[geo-protocol]] · היררכיה: [[agency-hierarchy]]

## זרימה
1. סטטוס: `get_articles_status` / `get_user_articles_summary`.
2. ממתינים לאישור: `list_articles_pending_approval` → `approve_article` (כרטיס) — רק הלקוח מאשר.
3. הזמנה פנימית: keywords → בחירה → now/תאריך → סיכום קרדיטים → `order_internal_article` אחרי אישור מילולי.
4. עריכה: update/regenerate (כרטיס אישור) + לוח זמנים.
5. דפי נחיתה: `create_landing_page` → אחרי בנייה `publish_landing_page` / `unpublish_landing_page`.
6. מאמרים חדשים לפי [[geo-protocol]] (BLUF + נתון כמותי).


## המחשות בתנועה

- ניסיון חוזר להמחשת וידאו שנכשלה משתמש ב־`retry_asset` ובמזהה הנכס מהגרסה החיה. מציגים אישור עם אפס חיוב לקוח נוסף. רק ההמחשה שנבחרה משוחזרת; אין לשלוח מחדש בקשה שמצבה לא ידוע ואין לשנות רעיון במסגרת תיקון תקלה. יש לייצא ולאשר מחדש לאחר התיקון.
- Use `retry_asset` with the failed video asset ID from the live revision. Propose approval at zero additional customer credits. Recover only the selected illustration, never repeat an unknown submission or change its concept as a fault retry. Export and approve the corrected revision afterward.

- בתיקון ניתן להזיז המחשה קיימת על ציר הזמן בלי ליצור אותה שוב. כותרת דובר ומעבר נושא משתמשים בטקסט שאושר; אין להסיק שם או תפקיד שלא נאמרו. שינוי תזמון או עיצוב מחייב ייצוא ואישור לגרסה החדשה.
- Corrections can move an existing illustration on the timeline without regenerating it. Speaker titles and section transitions use approved text; never infer an unspoken name or role. Timing or design changes require export and approval of the new revision.

- הפקה חדשה משתמשת בתכנון ההמחשות העדכני; צפייה בתוצר ישן אינה משדרגת אותו. אין להבטיח מספר המחשות קבוע: הן תלויות בדיבור ובמקום פנוי לפרזנטור ולכתוביות. בהכנה לרשתות בחר פורמטים אמיתיים מהטיוטה החיה ושמור בחירות קיימות. פיד מרובע וסטורי מחייבים חיתוך ישיר ללא השלמת רקע; בפיד 4:5 ובפורמט רוחבי אפשר לשמור את כל הפריים עם רקע מטושטש, צבע מותג או תמונה שהועלתה. הדגשת מילים מדויקת תלויה בתזמון מאומת; כשאינו זמין משתמשים בכתוביות משפט קריאות. אין להציג בדיקה מקומית או בדיקה עם מודל מדומה כאימות של הסרטון החי.

- בחירת המחשות נשמרת בטיוטה ונקראת מהמצב החי. שינוי שלה דורש את אישור הטיוטה הרגיל; אין לדרוס בחירה קיימת או להבטיח זמינות לפני קריאה. לאחר אישור ההפקה ההמחשות נבחרות אוטומטית לפי מה שנאמר, ללא אישור לכל סצנה.
- אין להמציא נתונים או להפוך שאלת מראיינת לקביעה. כשל בהמחשה עשוי להסתיים בווידאו תקין עם הודעת השמטה; אין לדווח על הצלחת ההמחשה בלי תוצר מאומת.
- בפודקסט מפנים למסך המורשה לבחירה לכל הקליפים או ליצירת גרסה מונפשת לקליפ קיים. הפעולה אינה משנה את הסרטון הראשי ואינה מאשרת פרסום. המחיר והזמינות נקראים מהמערכת; אין להוסיף חיוב המחשות נפרד.

## פודקסט וקליפים

- במסלול העריכה החדש יש לבדוק ולאשר חיתוך פיד מרובע וסטורי לכל קליפ בנפרד לאורך הקטע. שינוי חיתוך או מקור מחייב אישור מחדש. אין לסמן את הבדיקה בשם הלקוח. רינדור שנכשל מתחדש רק בפעולה מפורשת; פורמטים שהושלמו נשמרים. עבודות פעילות ממשיכות במנוע שבו התחילו.
- In the new editing route, the customer reviews and confirms square-feed and story crops separately for every clip throughout its duration. A changed source or crop requires new confirmation. Never fabricate this confirmation. A failed render requires explicit resumption and retains completed formats. Active jobs keep their original engine.

- יצירת קליפים בפודקסט מתבצעת במערכת. אין להפנות את הלקוח ל־Opus לצורך הפקה חדשה.
- פתיחת הפודקסט, תצוגת הקליפים, אישור והפקה הן פעולות נפרדות. הסוכן מפנה למסך המורשה: הלקוח בודק תמלול מאוחד ושיוך דוברים, צופה בזמנים ובטקסט של כל קליפ, ורק אז מאשר יצירה. תצוגה מקדימה, ניווט ורענון אינם מתחילים הפקה. שינוי בתמלול או במקור מחייב תצוגה ואישור מעודכנים. המשך קליפים שנכשלו דורש לחיצה מפורשת.
- מצב ופרטי התקדמות נקראים מהמערכת. קליפים שכבר הושלמו נשמרים גם כאשר אחרים נכשלו. חידוש ממשיך עבודה חסרה ואינו אישור לפרסום.
- כאשר אין קטעי דיבור מתאימים, יש להסביר שנדרשת בדיקת התמלול או הקלטה נוספת; אין להבטיח שניסיון חוזר יתקן חומר מקור חסר. תיוג דובר או תזמון שגויים אינם הוכחה שהלקוח ענה בקצרה. קטעי תמלול שחורגים מאורך הסרטון לא ייכללו בהצעה; יש להסביר את הצורך בבדיקת התמלול.

- עריכת פודקסט חלה על הקליפים בלבד. לפני אישור יש להציג את משך העריכה, חיתוכי השתיקות, הטקסט והפורמטים עם מסגור. הבחירה והמחיר נקראים מהמסך החי; אין להמציא עלות או להפעיל הפקה דרך ניווט. שינוי במקור, בתמלול או בעריכה מחייב אישור חדש.
- כל פורמט נוצר ממאסטר נקי של הקליפ עם כתוביות מותאמות ליחס. שיפור סאונד יכול לחזור לניקוי מקומי תוך הודעה מדויקת. שיפור וידאו מוצע רק לתוצר מוכן, דורש מחיר ואישור נפרדים, ומתבצע פעם אחת למאסטר. תוצרים קודמים נשמרים, התאוששות ממשיכה רק עבודה חסרה, ובקשה לא ידועה לספק אינה נשלחת שוב. אין להבטיח איכות שנבדקה בלי צפייה והאזנה לתוצרים.
