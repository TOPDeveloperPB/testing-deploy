'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type CustomLinkProps = {
  href?: string
  className?: string
  children?: React.ReactNode
} & LinkProps

const CustomLink = ({
  href,
  children,
  className,
  ...rest
}: CustomLinkProps) => {
  const pathname = usePathname()

  let linkHref = ''

  if (!href) {
    linkHref = ''
  } else if (typeof href === 'string') {
    const cleanedHref = href.replace(/^\/{2,}/, '/')
    if (cleanedHref.startsWith('http')) {
      linkHref = cleanedHref
    } else {
      linkHref =
        pathname === '/[[...slug]]'
          ? cleanedHref || `/`
          : cleanedHref.startsWith('/')
            ? cleanedHref
            : `/${cleanedHref}`
    }
  } else {
    linkHref = ''
  }

  return (
    <Link href={linkHref} className={className} {...rest}>
      {children}
    </Link>
  )
}

export default CustomLink