# Keepsake — Digital & Branding Agency (Vite + Pug + SCSS + JSON)

Лабораторна робота: препроцесори **Pug** і **SCSS**, зовнішні дані у форматі **JSON**, автоматизація збірки на **Vite**, обробка CSS через **PostCSS + Autoprefixer + Browserslist**, оптимізація зображень (**AVIF / WebP / JPEG**, `<picture>`, `srcset`), контроль якості коду (**Prettier**, **Stylelint**, **Husky + lint-staged**).

## Вимоги до середовища та команди

- **Node.js** >= 20 LTS, **npm** >= 10

```bash
npm install          # встановлення залежностей
npm run dev          # запуск dev-сервера Vite
npm run build        # продакшн-збірка у dist/
npm run preview      # попередній перегляд зібраної сторінки
npm run images       # конвертація вихідних зображень у AVIF/WebP/JPEG (400w та 800w)
npm run format       # форматування коду через Prettier
npm run lint         # перевірка стилів (Stylelint) та форматування (Prettier)
```
# landing-keepsake-vite

Ссилка на сайт: https://nekronik10.github.io/landing-keepsake-vite/
