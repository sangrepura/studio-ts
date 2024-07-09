import clsx from 'clsx'
import React from 'react'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-sky-200' : 'text-sky-600',
      )}
    >
      <strong className={invert ? 'text-sky-50' : 'text-sky-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Alabama, USA" invert={invert}>
          3817 Gulf Shore Pkwy, Suite 4
          <br />
          Gulf Shores, AL 36542
        </Office>
      </li>
    </ul>
  )
}
