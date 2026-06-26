import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          url?: string
          loading?: string
          'events-target'?: string
        },
        HTMLElement
      >
    }
  }
}

export {}
