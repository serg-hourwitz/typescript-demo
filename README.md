# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


! - це TypeScript-синтаксис, який називається "non-null assertion operator" або оператор підтвердження ненульного значення. Це означає, що ви гарантуєте TypeScript, що ви впевнені, що значення, повернене document.getElementById('root'), не буде нульовим або undefined.

У більшості випадків getElementById може повертати null, якщо елемент не знайдено на сторінці. Використання ! позбавляє TypeScript від жалюгідності щодо можливості нульового значення і дає вам можливість впевнено викликати методи чи отримувати властивості об'єктів без перевірки на null.

Однак, варто бути обережним з використанням !, оскільки це може призвести до помилок у виконанні, якщо значення насправді буде null або undefined. Ви маєте бути впевнені, що елемент існує у вашому DOM-дереві, перш ніж використовувати !.