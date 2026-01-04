#!/usr/bin/env node

/**
 * 自动创建新的博客文章（作业）
 *
 * 使用方法：
 * npm run new-blog
 *
 * 然后按照提示输入：
 * - 作业编号（如：4）
 * - 作业标题（如：Todo List）
 * - 作业描述（如：一个简单的待办事项应用）
 * - 项目链接（如：https://todo.vercel.app）
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function padNumber(num) {
  return String(num).padStart(3, '0');
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

async function main() {
  console.log('\n🚀 创建新的100天挑战作业\n');

  // 获取用户输入
  const dayNumber = await question('作业编号（如：4）: ');
  const title = await question('作业标题（如：Todo List）: ');
  const description = await question('作业描述（如：一个简单的待办事项应用）: ');
  const projectUrl = await question('项目链接（如：https://todo.vercel.app）: ');

  const paddedDay = padNumber(dayNumber);
  const slug = `day-${paddedDay}-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const date = getTodayDate();

  // 生成 MDX 内容
  const mdxContent = `---
title: 'Day ${paddedDay} - ${title}'
description: '${description}'
author: '李韭二'
date: '${date}'
---

## 项目简介

这是我100天挑战的第${dayNumber}个作业。${description}

## 技术栈

- Next.js
- React
- TailwindCSS

## 项目链接

🔗 [在线演示](${projectUrl})

## 收获与反思

（在这里写下你的收获和反思）

---

**为这个作业投票 👇**
`;

  // 保存文件
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const filePath = path.join(blogDir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.log(`\n❌ 文件已存在: ${slug}.mdx`);
    rl.close();
    return;
  }

  fs.writeFileSync(filePath, mdxContent, 'utf-8');

  console.log('\n✅ 作业创建成功！');
  console.log(`📝 文件路径: src/content/blog/${slug}.mdx`);
  console.log(`🔗 访问链接: https://vibeathon-100.vercel.app/blogs/${slug}`);
  console.log('\n下一步：');
  console.log('1. 编辑文件补充"收获与反思"部分');
  console.log('2. git add . && git commit -m "添加Day ' + paddedDay + '作业" && git push');
  console.log('3. Vercel 会自动部署\n');

  rl.close();
}

main().catch(err => {
  console.error('❌ 错误:', err);
  rl.close();
  process.exit(1);
});
