# Deployment Instructions

## Prerequisites
- Node.js and npm installed
- Heroku CLI (or Azure/AWS CLI if using those platforms)

## Environment Variables
Create a `.env` file with:
```
SESSION_SECRET=your_production_secret
DATABASE_URL=./db/database.sqlite
PORT=3000
```

## Deploy to Heroku
1. Login: `heroku login`
2. Create app: `heroku create <your-app-name>`
3. Add SQLite buildpack: `heroku buildpacks:add https://github.com/luislobo/heroku-buildpack-sqlite.git`
4. Push code: `git push heroku module-four:main`
5. Set env vars: `heroku config:set SESSION_SECRET=your_production_secret`
6. Open app: `heroku open`

## Notes
- For Azure/AWS, follow their Node.js deployment guides.
- Ensure your session secret is strong and not checked into source control.
- Use environment variables for all secrets and config.
