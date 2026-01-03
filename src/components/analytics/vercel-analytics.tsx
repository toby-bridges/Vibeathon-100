import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

export function VercelAnalyticsComponent() {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return <VercelAnalytics />
}
