import * as React from 'react'
import { SuccessBanner } from './success-banner'

interface ISuccessfulSquashedBannerProps {
  readonly branchName: string
  readonly count: number
  readonly onDismissed: () => void
  readonly onUndo: () => void
}

export class SuccessfulSquash extends React.Component<
  ISuccessfulSquashedBannerProps,
  {}
> {
  public render() {
    const { count, branchName, onDismissed, onUndo } = this.props

    const pluralized = count === 1 ? 'commit' : 'commits'

    return (
      <SuccessBanner timeout={15000} onDismissed={onDismissed} onUndo={onUndo}>
        <span>
          Successfully squashed {count} {pluralized} on{' '}
          <strong>{branchName}</strong>.{' '}
        </span>
      </SuccessBanner>
    )
  }
}
