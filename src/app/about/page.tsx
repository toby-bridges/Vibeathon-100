import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { aboutMeHeadline, aboutMeHeadlineEn, aboutParagraphs } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'

import portraitImage from '@/images/portrait.jpg'
import SocialLinks from '@/components/about/SocialLinks'




export const metadata: Metadata = {
  title: 'About',
  description:
    '我是李韭二，正在进行100天的 Vibe Coding 挑战。',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-3">
            {aboutMeHeadline}
          </h1>
          <p className="text-2xl text-muted-foreground/70 italic mb-6">
            {aboutMeHeadlineEn}
          </p>
          <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className={index % 2 === 0 ? "text-zinc-700 dark:text-zinc-300" : "text-muted-foreground"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          <SocialLinks />
        </div>
      </div>
    </Container>
  )
}
