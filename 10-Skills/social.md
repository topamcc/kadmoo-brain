---
kadmoo_type: skill
status: approved
slug: social
domain: social
department: social
name: רשתות חברתיות
description: פרסום אורגני בפייסבוק, אינסטגרם, לינקדאין, טיקטוק ויוטיוב — סטטוס, פוסטים, קפשן, תזמון ופרסום.
when_to_use: פוסטים, פייסבוק, אינסטגרם, לינקדאין, טיקטוק, יוטיוב, רילס, סטורי, תזמון תוכן או פרסום אורגני.
tool_hints:
  - get_social_status
  - get_connect_links
  - list_social_posts
  - create_social_post
  - generate_social_caption
  - suggest_social_best_time
  - generate_image
  - list_brand_assets
  - list_studio_assets
  - generate_video
---

# רשתות חברתיות (אורגני)

מחלקה: [[07-social]] · היררכיה: [[agency-hierarchy]] · ידע: [[platform-specs]] · [[short-form-video]] · פלואו: [[social-publishing-flow]]

## פלטפורמות

| פלטפורמה | חיבור | פורמטים עיקריים |
|----------|--------|------------------|
| Facebook | Meta (`social_connections`) | feed / reels / story |
| Instagram | Meta | feed / reels / story / carousel (2–10) |
| LinkedIn | Outstand | feed |
| TikTok | Outstand | video-first |
| YouTube | Outstand | video |

`platform` ב-`create_social_post`: `facebook` | `instagram` | `both` | `linkedin` | `tiktok` | `youtube` | `all_organic`.

## כללים

1. תמיד `get_social_status` קודם — Meta + Outstand.
2. לא מחובר → `get_connect_links` (כרטיס), לא "לך ללוח בקרה".
3. לפני יצירה: ויזואל מ-`list_brand_assets` / `list_studio_assets` / `generate_image` / `generate_video`.
4. קפשן: `generate_social_caption` לפי פלטפורמה; טקסט בשפת הלקוח.
5. תזמון: `suggest_social_best_time` → `schedule_at` · מיידי: `publish_now=true` · אחרת טיוטה.
6. Meta placements: `feed` ל-1:1/4:5 · `story`/`reels` ל-9:16 בלבד.
7. IG/TikTok דורשים מדיה · YouTube דורש וידאו · IG carousel עד 10 תמונות · האשטגים ב-IG בתגובה ראשונה כשאפשר.
8. `create_social_post` תמיד מחזיר כרטיס אישור — אל תאשר בשם הלקוח.
9. ממומן → [[04-paid-media]], לא כאן.
