/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 扫描 src 目录下的所有 JavaScript 和 TypeScript 文件
    "./public/index.html", // 如果您在 HTML 中也使用了 Tailwind 类，也可以包括这个
  ],
  theme: {
    extend: {
      height: {
        '75screen': '75vh',
      }
    },
  },
  plugins: [],
};
