---
kadmoo_type: knowledge
status: approved
slug: google-ads-api-runtime-2026
domain: ads
when_to_use: "פיתוח, אבחון או כתיבה דרך Google Ads API ב-2026 — גרסאות, תאימות, שמירת נתונים והעלאות קהל והמרות"
scope: global
department: paid-media
---

# Google Ads API — שערי Runtime ל-2026

ידע תפעולי: [[google-ads-rules]] · שערי כתיבה: [[ppc-write-safety-gates]]

## גרסה לפני פעולה

- גרסאות v23, v24 ו-v25 פורסמו ב-2026 בתאריכים 28 בינואר, 22 באפריל ו-22 ביולי, בהתאמה. גרסאות משנה עשויות להוסיף שדות בלי להמתין לגרסה ראשית.
- לפני קריאה או כתיבה, בדקו את גרסת הלקוח בפועל מול גרסת ה-endpoint ואת מועד ה-sunset הרשמי. אל תניחו ששדה שקיים בתיעוד של הגרסה האחרונה זמין ב-runtime ישן.
- `Campaign.text_guidelines` נוסף ב-v23.1 עבור Search ו-Performance Max: עד 25 `term_exclusions`, כל אחד עד 30 תווים; ועד 40 `messaging_restrictions`, כל אחת עד 300 תווים. סוג ההגבלה הנתמך הוא `RESTRICTION_BASED_EXCLUSION`.

## הסרות ושמירת נתונים

- תמיכת API ב-`CallAd` וב-`CallAdInfo` הוסרה ב-v23. אל תיצרו או תעדכנו אותם; השתמשו ב-Responsive Search Ads עם call assets.
- החל מ-1 ביוני 2026, נתוני דיווח גרנולריים יומיים, שעתיים ושבועיים נשמרים ל-37 חודשים. נתונים חודשיים, רבעוניים ושנתיים נשארים זמינים ל-11 שנים. אם נדרש ניתוח גרנולרי ארוך יותר, שמרו אותו במאגר מאושר לפני חלוף החלון.

## Offline conversions ו-Customer Match

- החל מ-1 באפריל 2026, developer tokens ללא בקשות Customer Match בין 1 באוקטובר 2025 ל-31 במרץ 2026 מוגבלים ב-`OfflineUserDataJobService` וב-`UserDataService`; השגיאה הצפויה היא `CUSTOMER_NOT_ALLOWLISTED_FOR_THIS_FEATURE`.
- החל מ-15 ביוני 2026, developer tokens ללא העלאות offline conversions בין 17 בדצמבר 2025 ל-15 ביוני 2026 מוגבלים ב-`UploadClickConversions`, עם אותה שגיאה.
- עבור token מוגבל או אינטגרציה חדשה, תכננו מעבר ל-Data Manager API. אל תנסו לעקוף allowlist, ואל תציגו retry כפתרון להרשאה חסרה.
- גם קליטת session attributes או כתובת IP ב-conversion imports מוגבלת למאושרים מאז 2 בפברואר 2026; למסלול חדש השתמשו ב-Data Manager API.

## Mutate ויצירת מבנים

- לפני write מורכב משתמשים ב-`validate_only=true` כשאפשר. הוא מאמת אך אינו יוצר משאבים; אחרי אישור מבצעים mutate אמיתי וקוראים את המצב חזרה.
- מבנים תלויים, ובפרט יצירת Performance Max עם Asset Group ונכסיו, חייבים להיות אטומיים: `partial_failure=false`. Partial failure מתאים לפעולות עצמאיות בלבד.
- בתוך bulk mutate יוצרים משאב לפני שמפנים אליו, משתמשים ב-temporary resource names עם מזהים שליליים ייחודיים, ומקבצים פעולות רצופות לפי סוג משאב. מזהה זמני אינו תקף בבקשה הבאה.
- timeout אינו הוכחה לכשל. לפני retry מחפשים לפי מזהה פעולה או קוראים את הישות, כדי שלא ליצור קמפיין כפול. לוג `pending` חייב להסתיים ב-`success` או `failed` עם שגיאת API מפורטת.

## מקורות רשמיים

- [Google Ads API release notes](https://developers.google.com/google-ads/api/docs/release-notes)
- [Deprecation and sunset](https://developers.google.com/google-ads/api/docs/sunset-dates)
- [Feature deprecations and unversioned changes](https://developers.google.com/google-ads/api/docs/deprecations)
- [AI Max text guidelines](https://developers.google.com/google-ads/api/docs/campaigns/ai-max-for-search-campaigns/getting-started)
- [Mutate best practices](https://developers.google.com/google-ads/api/docs/mutating/best-practices)
- [Partial failures](https://developers.google.com/google-ads/api/docs/best-practices/partial-failures)
- [Performance Max request structure](https://developers.google.com/google-ads/api/performance-max/structure-requests)
