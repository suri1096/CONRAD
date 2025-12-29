import type { ReactNode } from 'react'

type PlaceholderImageProps = {
  label: string
  sublabel?: string
  aspect?: '16/9' | '3/2' | '1/1' | '21/9'
  children?: ReactNode
}

const aspectToPadding: Record<NonNullable<PlaceholderImageProps['aspect']>, string> = {
  '16/9': '56.25%',
  '3/2': '66.6667%',
  '1/1': '100%',
  '21/9': '42.8571%',
}

export function PlaceholderImage({ label, sublabel, aspect = '16/9', children }: PlaceholderImageProps) {
  return (
    <div className="placeholderFrame" role="img" aria-label={label}>
      <div className="placeholderAspect" style={{ paddingTop: aspectToPadding[aspect] }}>
        <div className="placeholderFill" />
        <div className="placeholderOverlay">
          <div className="placeholderLabel">{label}</div>
          {sublabel ? <div className="placeholderSublabel">{sublabel}</div> : null}
        </div>
        {children ? <div className="placeholderContent">{children}</div> : null}
      </div>
    </div>
  )
}


