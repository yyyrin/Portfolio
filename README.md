# Portfolio 구현

## Overview

이 프로젝트는 React와 TypeScript를 사용하여 제작된 포트폴리오 화면입니다. header의 Navigation을 통해 각 섹션으로 쉽게 이동할 수 있습니다.

## 주요 기능

- 포트폴리오의 다양한 섹션으로 이동하는 Navigation 기능
- Image 섹션에서는 필수 이미지를 600px x 600px 크기로 보여주는 화면

### 프로젝트 확인

프로젝트는 다음 주소에서 확인하실 수 있습니다: [배포 주소](https://portfolio-a51bd.web.app/)

## Tech Stack

- React
- TypeScript
- styled-components
- Vite

## Quick start

Run the project by running:

```bash
npm install
npm run dev
```

## Folder Structure

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂about
 ┃ ┃ ┣ 📜idex.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┗ 📂header
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂essentialImage
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂projects
 ┃ ┃ ┣ 📜Dawool.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜Poppop.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📂skills
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┣ 📂constants
 ┃ ┗ 📜colors.ts
 ┣ 📂fonts
 ┣ 📂pages
 ┃ ┣ 📜ImagePage.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜PortfolioPage.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
