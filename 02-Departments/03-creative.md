---
kadmoo_type: knowledge
status: approved
slug: dept-creative
name: מחלקת קריאייטיב
domain: creative
when_to_use: "מודעות, קריאייטיב, באנרים, ויזואל, Creative OS, קונספט והפקה"
scope: global
department: creative
aliases:
  - 03-creative
---

# מחלקת קריאייטיב — Creative OS

המשרד הפנימי ליצירת פרסום. הלקוח לא רואה את ההיררכיה הפנימית — רק את מנהלת הלקוחות שמציגה תוצרים ממוסגרים.

## היררכיה פנימית

```
מנהל קריאייטיב / מנוע אסטרטגיה
  → קופירייטר  ∥  ארט דיירקטור
  → מעצב / צוות וידאו
  → בקרת איכות
  → חזרה למנהלת הלקוחות
```

- **מנהל הקריאייטיב** — בעל ההחלטה המקצועית (לא מנהלת הלקוחות).
- קופי וארט עובדים **במקביל** אחרי בחירת קונספט — לא בטור.

## Creative OS — Pipeline

ראו פירוט מלא: [[pipeline-stages]].

| שלב | שם                                |
| --- | --------------------------------- |
| 0   | Client DNA                        |
| 1   | זיהוי טריגר                       |
| 2   | תפקיד הקמפיין (עבודה אחת)         |
| 3   | Strategy Stack                    |
| 4   | זיקוק מסר                         |
| 5–7 | רעיונות → טריטוריות → מבחן קונספט |
| 8   | קופי + ארט במקביל                 |
| 9   | מסלול הפקה                        |
| 10  | QA                                |
| 11  | הצגה ללקוח (ממוסגרת)              |
| 12  | הפצה ולמידה                       |

## שבעת האובייקטים (שלד המערכת)

1. **Client DNA** — תיק לקוח מתמשך
2. **Creative Request** — בקשה + טריגר + תפקיד קמפיין
3. **Creative Strategy Card** — תוצר Strategy Stack קצר
4. **Message Map** — מסר ראשי / משני / אמונה / CTA
5. **Concept Board** — טריטוריות + קונספטים + ציונים
6. **Production Brief** — הנחיות הפקה לפורמט
7. **Creative Learning Record** — למה עבד / לא עבד

## Skills וכלים + אישור

| כלי | מתי | אישור |
|-----|-----|--------|
| `check_client_dna` / `scan_and_fill_site_data` | DNA | מיידי / כרטיס |
| `upsert_creative_request` / `generate_ad_image` | הפקה | מיידי (עם שערי רפרנס) |
| `generate_video` | וידאו | כרטיס |
| `create_campaign_draft` → `activate_campaign` | פרסום | **אישור כפול** |
| `record_creative_feedback` / `get_creative_performance` | למידה | מיידי |

Skill: [[creative]] · [[generate-video]] · Pipeline: [[pipeline-stages]] · [[approval-framework]]

## ידע

[[pipeline-stages]] · [[visual-typography-protocol]]

## גבולות

- שני אישורים לפני הוצאת כסף (טיוטה → הפעלה).
- אל תחשוף מסמכים פנימיים ללקוח.
- רגש משרת מכירה — לא גימיק (`product_connection` נמוך = פסילה).
- מודעה אחת = עבודה אחת.
