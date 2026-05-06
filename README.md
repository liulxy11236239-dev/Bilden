# 彼灯教育 · Bilden 官网

这是彼灯教育官网的初始 Next.js + Tailwind CSS 项目，当前已包含首页、家庭战略研究中心、AI 素养发展中心三个页面。

## 页面路由

- `/`：首页，包含品牌首屏、两大中心入口、家长痛点、课程精选和咨询 CTA。
- `/parents`：家庭战略研究中心，面向 3-15 岁孩子家长，展示家庭教育策略服务。
- `/ai-center`：AI 素养发展中心，展示孩子 AI 素养能力模型、分龄路径和体验课入口。

## 本地预览

先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

然后在浏览器打开：

```text
http://localhost:3000
```

## 生产构建

```bash
npm run build
npm run start
```

## 部署到 Vercel

1. 确认代码已经推送到 GitHub 仓库。
2. 打开 [Vercel](https://vercel.com/) 并选择 `Add New Project`。
3. 导入 GitHub 仓库 `Bilden`。
4. Framework Preset 选择 `Next.js`（通常会自动识别）。
5. 点击 `Deploy`，等待生成线上预览链接。

## 当前技术栈

- Next.js App Router
- React
- Tailwind CSS v4
