'use client'

import React from 'react'

interface ChallengeProgressProps {
  completed: number
  total: number
}

export function ChallengeProgress({ completed, total }: ChallengeProgressProps) {
  const percentage = Math.round((completed / total) * 100)

  const milestones = [
    { threshold: 10, label: '🌱 起步', emoji: '🌱' },
    { threshold: 25, label: '🚀 加速', emoji: '🚀' },
    { threshold: 50, label: '⭐ 半程', emoji: '⭐' },
    { threshold: 75, label: '🔥 冲刺', emoji: '🔥' },
    { threshold: 100, label: '🎉 完成', emoji: '🎉' }
  ]

  const currentMilestone = milestones
    .reverse()
    .find(m => percentage >= m.threshold) || milestones[0]

  return (
    <div className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700/40 dark:bg-zinc-800/50">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          100天 Vibe Coding 挑战进度
        </h3>
        <span className="text-2xl">{currentMilestone.emoji}</span>
      </div>

      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-zinc-600 dark:text-zinc-400">
          已完成 {completed} / {total} 个作业
        </span>
        <span className="font-bold text-teal-600 dark:text-teal-400">
          {percentage}%
        </span>
      </div>

      <div className="mb-4 h-4 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { threshold: 10, emoji: '🌱' },
          { threshold: 25, emoji: '🚀' },
          { threshold: 50, emoji: '⭐' },
          { threshold: 75, emoji: '🔥' },
          { threshold: 100, emoji: '🎉' }
        ].map(milestone => (
          <div
            key={milestone.threshold}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
              percentage >= milestone.threshold
                ? 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400'
                : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600'
            }`}
          >
            <span>{milestone.emoji}</span>
            <span>{milestone.threshold}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
