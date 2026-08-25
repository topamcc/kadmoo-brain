# Kadmoo Brain — הוראות הפעלה

המוח (Obsidian Vault) מוכן בתיקייה `C:\Users\6leon\Desktop\kadmoo-brain`.
הקוד באפליקציה ובסוכן כבר מוכן לקבל אותו. מה שנותר הוא חיבור GitHub + סודות.

## 0. Cursor workspace (מומלץ)

פתח את הקובץ:

`C:\Users\6leon\Desktop\Kadmoo.code-workspace`

הוא כולל שלושה שורשים:
- `Kadmoo App 2026` (האפליקציה)
- `kadmoo-agent-rag` (הסוכן)
- `kadmoo-brain` (Obsidian Second Brain)

כך Cursor (וגם אני) יכולים לקרוא ולערוך את המוח באותה סשן.

## 1. התקן Obsidian

1. הורד מ־https://obsidian.md והתקן.
2. Open folder as vault → בחר `C:\Users\6leon\Desktop\kadmoo-brain`.
3. Settings → Community plugins → הפעל Community plugins.
4. התקן את התוסף **Obsidian Git** והפעל אותו.
5. ההגדרות ל-auto commit/push כל 5 דקות כבר ב־`.obsidian/plugins/obsidian-git/data.json`.

## 2. צור ריפו GitHub פרטי

```powershell
cd C:\Users\6leon\Desktop\kadmoo-brain
git init
git add .
git commit -m "Initial Kadmoo Brain vault"
# צור ריפו פרטי ב-GitHub (למשל topamcc/kadmoo-brain) ואז:
git branch -M main
git remote add origin https://github.com/<YOUR_ORG>/kadmoo-brain.git
git push -u origin main
```

## 3. Personal Access Token

ב-GitHub → Settings → Developer settings → Fine-grained token (או classic):

- הרשאות: `Contents: Read and write` על הריפו `kadmoo-brain`
- שמור את הטוקן — תצטרך אותו ב-Vercel וגם ב-Obsidian Git (אם תבחר HTTPS)

## 4. סודות ב-Vercel (kadmoo-app)

הוסף ב-Environment Variables:

| Name | Value |
|------|--------|
| `BRAIN_SYNC_SECRET` | מחרוזת אקראית ארוכה (למשל `openssl rand -hex 32`) |
| `KADMOO_BRAIN_GITHUB_TOKEN` | ה-PAT מלמעלה |
| `KADMOO_BRAIN_REPO` | `owner/kadmoo-brain` |
| `KADMOO_BRAIN_BRANCH` | `main` |

Redeploy אחרי השמירה.

## 5. סודות ב-GitHub (ריפו kadmoo-brain)

Settings → Secrets and variables → Actions:

| Name | Value |
|------|--------|
| `BRAIN_SYNC_SECRET` | **אותו ערך** כמו ב-Vercel |
| `KADMOO_BRAIN_SYNC_URL` | `https://il.kadmoo.co.il/api/agent/brain/sync` |

ה-workflow ב־`.github/workflows/sync-brain.yml` יקרא ל-endpoint בכל push.

## 6. מיגרציה (אם עדיין לא נדחפה)

בתיקיית האפליקציה:

```powershell
cd "C:\Users\6leon\Desktop\Kadmoo App 2026"
npx supabase db push
npm run db:types
```

## 7. איך עורכים את הסוכן

| תיקייה | משפיע על |
|--------|----------|
| `01-Agency/` | persona, tone, voice, communication_style, enabled_tools, system_prompt_override |
| `02-Departments/` | RAG גלובלי + `read_brain_note` (מחלקות) |
| `10-Skills/` | `agent_skills` (נטען ב־`load_skill`) |
| `20-Playbook/` | מדיניות משרד (מוזרקת לכל שיחה) |
| `30-Knowledge/` | RAG גלובלי (Strategy Stack, Creative OS…) |
| `40-Clients/<slug>/` | זיכרון + RAG פר-לקוח |
| `50-Agent-Learnings/` | מה שהסוכן למד — סקור והעבר ל-Playbook |

**רק פתקים עם `status: approved` מסתנכרנים.** טיוטות נשארות ב-Vault בלבד.

אחרי שמירה ב-Obsidian → Git push (אוטומטי) → Action → Supabase → הסוכן בשיחה הבאה.

## 8. בדיקה מהירה

1. שנה פתק ב־`20-Playbook/` או `30-Knowledge/` (status: approved).
2. שמור → חכה ל-push.
3. ב-Control Plane → טאב **Brain** → ודא שהשורה `synced`.
4. שאל את הסוכן שאלה שקשורה לידע החדש.

אפשר גם ללחוץ **סנכרן עכשיו** בטאב Brain בלי לחכות ל-Action.

<!-- sync-check 2026-08-18 16:44 -->

