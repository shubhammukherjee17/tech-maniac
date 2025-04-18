'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  url: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
    >
      <Share2 size={20} />
      <span>Share</span>
    </button>
  )
}