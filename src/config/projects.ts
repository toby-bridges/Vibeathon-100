// projects
export const projectHeadLine = "我的100天挑战作业"
export const projectIntro = "每天一个作业，记录我的成长历程。从Day 001到Day 100，见证蜕变之旅。"

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects
  export const projects: Array<ProjectItemType> = [
    {
      name: 'Day 001 - 圣诞礼物',
      description: '给女朋友制作的圣诞节特别礼物，用代码表达爱意',
      link: { href: 'https://love-zeta-snowy.vercel.app/', label: '在线演示' },
      category: ['Web App'],
      techStack: ['Next.js', 'React', 'TailwindCSS'],
      tags: ['Love', 'Gift']
    },
    {
      name: 'Day 002 - 岳母股票预言机',
      description: '一个有趣的股票预测小工具，帮助岳母大人做投资决策',
      link: { href: 'https://yue-mu-stock.vercel.app/', label: '在线演示' },
      category: ['Web App'],
      techStack: ['Next.js', 'React', 'Data Visualization'],
      tags: ['Stock', 'Prediction']
    },
    {
      name: 'Day 003 - 敬请期待',
      description: '第3天的作业正在创作中，敬请期待！',
      link: { href: '/blogs', label: '查看所有作业' },
      category: ['Coming Soon'],
      techStack: ['TBD'],
      tags: ['WIP']
    },
    {
      name: '更多作业',
      description:
        'Find the best AI tools in AIBest.tools',
      link: { href: 'aibest.tools', label: 'AI Best Tools' },
      logo: 'images/icon/aibesttools.png',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['AI', 'Tools Directory']
    },
    {
      name: 'Best Directories',
      description:
        'Your ultimate directory of directories.',
      link: { href: 'bestdirectories.org', label: 'Best Directories' },
      logo: '/images/icon/bestdirectories.png',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['Directory of Directories']
    },
    {
      name: 'User Growth',
      description:
        'Boost Your business growth with UserGrowth.link',
      link: { href: 'usergrowth.link', label: 'User Growth' },
      logo: '/images/icon/usergrowth.ico',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['User Growth', 'Marketing', 'SEO']
    },
    {
      name: 'Dev Toolset',
      description:
        'Open-source database-free tools directory.',
      link: { href: 'devtoolset.net', label: 'Dev Toolset' },
      logo: '/images/icon/devtoolset.png',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['Open Source', 'Database-Free', 'Tools Directory']
    },
    {
      name: 'Domain Score',
      description:
        'Ultimate AI-Powered tool for domain scoring and evaluation',
      link: { href: 'domainscore.ai', label: 'Domain Score' },
      logo: '/images/icon/domainscore.png',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['Domain', 'AI', 'SEO']
    },
    {
      name: 'MagicBox Tools',
      description:
        'Find the best AI tools in MagicBox.tools',
      link: { href: 'magicbox.tools', label: 'MagicBox Tools' },
      logo: '/images/icon/magicbox.png',
      category: ['Website'],
      techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
      tags: ['AI', 'Tools Directory']
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'Devtoolset',
      description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
      link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
      gitStars: 203,
      gitForks: 67
    },
    {
      name: 'Corey Chiu Portfolio Template',
      description:
        'portfolio template by corey chiu',
      link: { href: 'github.com/iAmCorey/coreychiu-portfolio-template', label: 'Corey Chiu Portfolio Template' },
      gitStars: 229,
      gitForks: 30
    },
    {
      name: 'Chrome Extension Plasmo Template',
      description:
        'A chrome extension template using plasmo, tailwind css, shadcn/ui',
      link: { href: 'github.com/iAmCorey/chrome-extension-plasmo-template', label: 'Chrome Extension Plasmo Template' },
      gitStars: 54,
      gitForks: 10
    },
    {
      name: 'Awesome Indie Hacker Tools',
      description:
        '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
      link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
      gitStars: 815,
      gitForks: 69
    },
    {
      name: 'Awesome AI Directory',
      description:
        'AI资源工具导航站收录 / Find all the best AI directories',
      link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
      gitStars: 40,
      gitForks: 7
    },
    {
      name: 'Producthunt Daily Bot',
      description:
        'A bot getting product hunt daily top products',
      link: { href: 'github.com/iAmCorey/producthunt-daily-bot', label: 'Producthunt Daily Bot' },
      gitStars: 3,
      gitForks: 3
    },
    {
      name: 'Cantonese Echoes',
      description:
        'Cantonese Echoes / 粵語殘片',
      link: { href: 'github.com/iAmCorey/Cantonese-Echoes', label: 'Cantonese Echoes' },
      gitStars: 1
    },
  ]
  