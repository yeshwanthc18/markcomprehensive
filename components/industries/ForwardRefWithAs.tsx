"use client"

import * as React from "react"

/**
 * Minimal forwardRefWithAs helper
 * - Works like React.forwardRef but keeps the generic element/ref type
 * - Supports an optional `as` prop without enforcing it (to keep usage simple)
 * This matches our IndustryCard usage: forwardRefWithAs<HTMLDivElement, Props>(...)
 */
export type WithAsProps<E extends React.ElementType, P> = P & {
  as?: E
} & Omit<React.ComponentPropsWithoutRef<E>, keyof P | "as">

export function forwardRefWithAs<E extends React.ElementType, P = {}>(
  render: (props: WithAsProps<E, P>, ref: React.ForwardedRef<React.ElementRef<E>>) => React.ReactElement | null,
) {
  // TS cast pattern to preserve generic `as` support on return
  return React.forwardRef(render) as unknown as <EE extends React.ElementType = E>(
    props: WithAsProps<EE, P> & { ref?: React.Ref<React.ElementRef<EE>> },
  ) => React.ReactElement | null
}

export default forwardRefWithAs
