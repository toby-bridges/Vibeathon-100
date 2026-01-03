'use client'

import React from 'react'

interface VoteButtonProps {
  workId: string
  workTitle: string
}

export function VoteButton({ workId, workTitle }: VoteButtonProps) {
  const tallyFormId = process.env.NEXT_PUBLIC_TALLY_FORM_ID || '44JkJ5'

  // 构建Tally表单URL，自动填充workId
  const tallyUrl = `https://tally.so/r/${tallyFormId}?workId=${encodeURIComponent(workId)}&workTitle=${encodeURIComponent(workTitle)}`

  return (
    <div className="mt-8 flex flex-col items-center gap-4 rounded-lg border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-6 dark:border-teal-800 dark:from-teal-950/30 dark:to-cyan-950/30">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          喜欢这个作业吗？
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          你的每一票都是对我最大的鼓励！
        </p>
      </div>

      <a
        href={tallyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      >
        <span>👍</span>
        <span>为这个作业投票</span>
      </a>

      <p className="text-xs text-zinc-500 dark:text-zinc-500">
        点击投票，无需登录
      </p>
    </div>
  )
}
