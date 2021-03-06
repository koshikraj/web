import React from 'react'

import { Box, Button, GU, textStyle, useViewport } from '@aragon/ui'
import { useAccount } from '../../wallet/Account.js';
import wallet from 'wallet-besu';

import ProfileIcon from '../../assets/profile.png'
import ANJBadgeIcon from '../../assets/anjBadge.svg'
import IconCheck from '../../assets/IconCheck.svg'

const Web3 = require("web3")
const web3 = new Web3("http://localhost:8545");

export default function ProfileHeader({ active }) {
  const { below } = useViewport()
  const walletAccount = useAccount();
  console.log(wallet.getAddress())
  // const theme = useTheme()

  return (
    <Box
      padding={40}
      css={`
        border-radius: 0;
        margin-bottom: ${2 * GU}px;
      `}
    >
      <div
        css={`
          margin-bottom: ${3 * GU}px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        `}
      >
        <div
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={`
              position: relative;
              margin-right: ${3 * GU}px;
            `}
          >
            <img alt="profile" src={ProfileIcon} />
            <img
              alt="active-juror"
              src={ANJBadgeIcon}
              css="position: absolute; top: 0; right: -5px"
            />
          </div>
          <div>
            <div
              css={`
                margin-bottom: ${1 * GU}px;
                display: flex;
                align-items: center;
              `}
            >
              <span
                css={`
                  ${textStyle('title4')}
                  letter-spacing: 1px;
                  margin-right: ${2 * GU}px;
                `}
              >
                {web3.eth.accounts.privateKeyToAccount(walletAccount.account).address}
              </span>
              {active && (
                <div
                  css={`
                    display: flex;
                    align-items: center;
                  `}
                >
                  <img
                    alt="active"
                    src={IconCheck}
                    css={`
                      margin-right: 4px;
                    `}
                  />
                  {/* <span
                    css={`
                      ${textStyle('label2')}
                      color: ${theme.contentSecondary};
                    `}
                  >
                    ACTIVE JUROR
                  </span> */}
                </div>
              )}
            </div>
            {/* <div>
              <p
                css={`
                  ${textStyle('body3')}
                `}
              >
                You are active and eligible to be drafted starting from the next
                term, on 14/12/19 at 16:00.
              </p>
            </div> */}
          </div>
        </div>
        {!below('medium') && (
          <div>
            <Button>
              <span
                css={`
                  color: #636971;
                `}
              >
                View profile
              </span>
            </Button>
          </div>
        )}
      </div>
    </Box>
  )
}
