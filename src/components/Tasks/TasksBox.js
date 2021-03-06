import React from 'react'
import { Box, GU, useViewport } from '@aragon/ui'
import TaskAmounts from './TasksAmounts'

function TasksBox() {
  const { below } = useViewport()
  const compactMode = below('medium')
  const tasks = [
    { status: 'active', amount: 34 },
    { status: 'completed', amount: 21 },
    { status: 'archived', amount: 67 },
  ]

  return (
    <Box heading='Overview'>
      <div
        css={`
          /*
            * translate3d() fixes an issue on recent Firefox versions where the
            * scrollbar would briefly appear on top of everything (including the
            * sidepanel overlay).
            */
          min-height: 112px;
          transform: translate3d(0, 0, 0);
          overflow-x: auto;
        `}
      >
        <ul
          css={`
            list-style: none;
            display: flex;
            ${compactMode
              ? `
                  flex-direction: column;
                  padding: ${1 * GU}px 0;
                `
              : ''}
          `}
        >
          {tasks.map(({ amount, status }) => (
            <li
              key={amount}
              css={`
                display: block;
                min-width: ${20 * GU}px;
                ${compactMode ? `margin-bottom: ${3 * GU}px;` : ''}
                &:last-of-type {
                  min-width: unset;
                  margin-bottom: 0;
                }
              `}
            >
              <TaskAmounts amount={amount} status={status} />
            </li>
          ))}
        </ul>
      </div>
    </Box>
  )
}

export default TasksBox
