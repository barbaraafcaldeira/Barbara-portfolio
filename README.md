# Barbara A. F. Caldeira Portfolio

Standalone React portfolio site for deployment to AWS Amplify Hosting.

## Local Development

```bash
npm install
npm start
```

## Production Build

```bash
npm run build
```

Vite writes the production bundle to `dist`.

## Deploy To AWS Amplify

1. Push this `portfolio-react` folder to GitHub as its own repository, or keep it in this repository and set Amplify's app root to `portfolio-react`.
2. In AWS Amplify Hosting, connect the GitHub repository.
3. Use these build settings:

```yaml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: dist
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
    appRoot: portfolio-react
```

If this folder becomes its own repository, remove the `applications` wrapper and use `baseDirectory: dist`.

## Personalize Before Publishing

- Replace `barbara@example.com` in `src/main.jsx` with your real contact email.
- Add your GitHub, LinkedIn, or live project links.
- Update project descriptions as your portfolio grows.
