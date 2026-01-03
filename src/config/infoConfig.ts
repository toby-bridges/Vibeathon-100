export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = '李韭二'
export const headline = '邀请你见证一个韭二代的自救和重生之路'
export const introduction = '我是李韭二，正在进行100天的 Vibe Coding 挑战，每天一个作业，记录我的成长之路'
export const email = 'contact@example.com'
export const githubUsername = 'toby-bridges'

// about page
export const aboutMeHeadline = "我是李韭二，一个韭二代的自救和重生之路"
export const aboutParagraphs = [
  "我正在进行100天 Vibe Coding 挑战，每天完成一个编程作业，记录我的成长历程。",
  "从零开始，一步一个脚印，用代码改变自己的命运。",
  "欢迎见证我的蜕变之旅，也欢迎为我的作业投票和反馈！"
]


// blog
export const blogHeadLine = "100天 Vibe Coding 挑战"
export const blogIntro = "记录我的每一个作业，见证成长的每一步。每个作业都可以投票！"


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/lijiuer92',
    external: true
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/toby-bridges',
    external: true
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: '/wechat-qr',
    ariaLabel: '微信公众号：李韭二',
    external: false
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



