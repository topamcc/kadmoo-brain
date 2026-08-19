---
kadmoo_type: knowledge
status: approved
slug: platform-specs
domain: social
when_to_use: "מגבלות קפשן, פורמטי מדיה, יחסי גובה-רוחב, האשטגים, פלייסמנטים לפייסבוק אינסטגרם לינקדאין טיקטוק יוטיוב"
scope: global
department: social
---

# מפרטי פלטפורמות — סושיאל אורגני

מקור האמת בקוד: `lib/services/social/platform-specs.ts`. מסמך זה מסנכרן את הידע לסוכן.

## Facebook

- Caption soft ~2000 · hard עד ~63k
- מדיה אופציונלית · עד 10 תמונות
- Aspects: feed_square / landscape / reels
- Placements: `feed` | `reels` | `story`
- קישור בפוסט: כן · first-comment: לא
- טון: שיחתי, CTA ברור, 3–5 האשטגים

## Instagram

- Caption hard 2200 · soft ~1800
- **מדיה חובה** · carousel 2–10 תמונות
- Aspects: feed_portrait / feed_square / reels
- Placements: `feed` | `reels` | `story`
- קישור ב-caption: לא · האשטגים 5–10 **בתגובה ראשונה**
- טון: קצר, hook בפתיחה, אימוג'י קל

## LinkedIn

- Caption hard 3000 · soft ~1300
- מדיה אופציונלית · עד 9 תמונות
- Aspects: feed_square / landscape
- קישור: כן · first-comment: כן
- טון: מקצועי, ערך עסקי, 3–5 האשטגים

## TikTok

- Caption קצר יחסית · **וידאו חובה**
- Aspect: reels (9:16)
- טון: אנרגטי, hook ב-2 השניות הראשונות, האשטגים רלוונטיים

## YouTube

- כותרת נפרדת + תיאור · **וידאו חובה**
- Aspect: landscape / reels לפי פורמט
- טון: ברור, SEO-friendly בכותרת, CTA בתיאור

## בחירת פלייסמנט (Meta)

| פורמט ויזואלי | Placement |
|---------------|-----------|
| 1:1 או 4:5 | `feed` |
| 9:16 | `story` או `reels` |

אל תציע story/reels עם קריאייטיב מרובע.

## כללי בטיחות

- אין X/Twitter ואין WhatsApp אורגני במערכת.
- LinkedIn/TikTok/YouTube עוברים דרך Outstand — ודא חיבור ב-`get_social_status`.
- תזמון נשאר ב-Kadmoo (`social_posts.scheduled_at` + cron כל 5 דק').
