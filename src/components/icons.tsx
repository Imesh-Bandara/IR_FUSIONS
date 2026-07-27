export type IconName =
  | 'layers'
  | 'cpu'
  | 'star'
  | 'code'
  | 'mobile'
  | 'cloud'
  | 'database'
  | 'spark'
  | 'grid'
  | 'gauge'
  | 'globe'
  | 'bulb'
  | 'shield'
  | 'target'
  | 'lifebuoy'
  | 'download'
  | 'quote'

function IconPaths({ name }: { name: IconName }) {
  switch (name) {
    case 'layers':
      return (
        <>
          <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
          <path d="m3.5 12 8.5 4.5 8.5-4.5" />
          <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
        </>
      )
    case 'cpu':
      return (
        <>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 6l-2 2M6 18l2-2M16 18l-2-2" />
        </>
      )
    case 'star':
      return <path d="m12 3 2.6 5.86 6.4.62-4.86 4.34 1.44 6.28L12 16.9l-5.58 3.2 1.44-6.28-4.86-4.34 6.4-.62L12 3Z" />
    case 'code':
      return <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 5 10.5 19" />
    case 'mobile':
      return (
        <>
          <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
          <path d="M11 18h2" />
        </>
      )
    case 'cloud':
      return <path d="M7 18.5a4.5 4.5 0 0 1-.5-8.98A5.5 5.5 0 0 1 17.3 8.1 4 4 0 0 1 17 16.5H7Z" />
    case 'database':
      return (
        <>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
          <path d="M5 5.5V18c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V5.5" />
          <path d="M5 11.75c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8" />
        </>
      )
    case 'spark':
      return <path d="M12 2.5c.6 3.8 2.3 5.5 6.1 6.1-3.8.6-5.5 2.3-6.1 6.1-.6-3.8-2.3-5.5-6.1-6.1 3.8-.6 5.5-2.3 6.1-6.1ZM18.5 15.5c.3 1.9 1.15 2.75 3.05 3.05-1.9.3-2.75 1.15-3.05 3.05-.3-1.9-1.15-2.75-3.05-3.05 1.9-.3 2.75-1.15 3.05-3.05Z" />
    case 'grid':
      return (
        <>
          <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5" />
          <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5" />
          <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5" />
          <rect x="13" y="13" width="7.5" height="7.5" rx="1.5" />
        </>
      )
    case 'gauge':
      return (
        <>
          <path d="M4 15a8 8 0 1 1 16 0" />
          <path d="M12 15 15.5 9.5" />
          <path d="M12 15h.01" />
        </>
      )
    case 'globe':
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z" />
        </>
      )
    case 'bulb':
      return (
        <>
          <path d="M9 18h6M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3.6 10.8c.66.5 1.1 1.28 1.1 2.2h5c0-.92.44-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
        </>
      )
    case 'shield':
      return <path d="M12 3.5 19 6v6c0 4.5-3 7.7-7 8.5-4-.8-7-4-7-8.5V6l7-2.5ZM9 12l2 2 4-4.5" />
    case 'target':
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" />
        </>
      )
    case 'lifebuoy':
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="m6.1 6.1 3.5 3.5M17.9 6.1l-3.5 3.5M6.1 17.9l3.5-3.5M17.9 17.9l-3.5-3.5" />
        </>
      )
    case 'download':
      return (
        <>
          <path d="M12 3.5v11.5M8 11l4 4 4-4" />
          <path d="M4.5 16.5V18a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-1.5" />
        </>
      )
    case 'quote':
      return (
        <path
          fill="currentColor"
          stroke="none"
          d="M9.5 6.5C6.5 8 5 10.3 5 13.1c0 2.3 1.5 3.9 3.5 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.4-1.5 1.6-2.9 3.1-3.7L9.5 6.5Zm8 0C14.5 8 13 10.3 13 13.1c0 2.3 1.5 3.9 3.5 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-2.9.4-1.5 1.6-2.9 3.1-3.7L17.5 6.5Z"
        />
      )
  }
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <IconPaths name={name} />
    </svg>
  )
}
