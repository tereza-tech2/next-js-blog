/*import { ExitIcon, SpeakerIcon } from '@100mslive/react-icons';
import {
  useHMSActions,
  useHMSStore,
  selectDominantSpeaker,
  selectLocalPeer,
  selectPeersByRole
} from '@100mslive/react-sdk';
import UsersIcon from '@components/icons/icon-users';*/
import { useRouter } from 'next/router';
import React from 'react';
import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'
import classNames from 'classnames'
import { badgeColors } from '../../../colors'
import { BadgeColorsSideEditProps } from '../../../LayoutSideProps'
import { Voice2,ChevronRightCircle, People } from 'react-iconly'

interface RadioHeader {
  color?: { color: string; className: string }
  className?: string
}

const RadioHeader: types.Brick<RadioHeader> = ({
  color,
  className,
  ...rest
}) => {
  const router = useRouter();
 /* const peers = useHMSStore(selectPeersByRole('viewer'));
  const actions = useHMSActions();
  const leave = () => {
    try {
      actions.leave().then(() => router.push('/'));
    } catch (error) {
      console.log(error);
    }
  };
  const localPeer = useHMSStore(selectLocalPeer);
  const dominantPeer = useHMSStore(selectDominantSpeaker); */
  return (
    <div
      className="flex items-center justify-between px-4 w-full  "
      style={{ height: 'var(--header-height)' }}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="block items-center">
            <button
              onClick={null}
              className={
                'color-white p-2 md:static w-10 h-10 rounded-lg bg-gray-base mirror cursor-pointer '
              }
            >
              <ChevronRightCircle set="bold" primaryColor="blueviolet"/>
              
            </button>
        </div>

        <div className="flex md:flex-row flex-col md:items-center align-end md:gap-2  gap-x-2">
          <div className="flex flex-row items-center align-bottom md:gap-2 gap-x-2">
            <p className="font-semibold md:text-2xl my-0 text-sm md:leading-8 ">Demo Event</p>
            <span
              className="flex md:px-1 px-0.5 font-semibold md:text-sm text-xs rounded-sm items-center "
              style={{ backgroundColor: '#ed4c5a' }}
            >
              LIVE
            </span>
          </div>

          <div className="flex  ">
            <span className="text-md leading-5 " style={{ color: '#999a99' }}>
              9:30 pm - 10:30 pm
            </span>
          </div>
        </div>
      </div>

      
        <div className="md:flex  hidden items-center space-x-2">
        <Voice2 set="bold" primaryColor="blueviolet"/>
          <span>Dominant Peer</span>
        </div>

      <div className="flex flex-row justify-end gap-4">
        <div className="flex items-center">
          <div
            className="rounded-3xl border-solid py-2 px-4 flex items-center font-normal text-sm leading-4 gap-2 "
            style={{ borderWidth: '1px', borderColor: '#3b3b3b' }}
          >
            <People set="bold" primaryColor="blueviolet"/> <span className="">6</span>{' '}
            <span className="md:block hidden"> watching</span>
          </div>
        </div>
      </div>
    </div>
  );
};

RadioHeader.schema = {
  name: 'radioheader',
  label: 'Radio Header',
  category: 'rb-ui website',
  getDefaultProps: () => ({
    color: { color: '#fef3c7', className: 'bg-amber-100 dark:bg-gray-800' },
  className:'bg-amber-100 dark:bg-gray-800',
  }),
  sideEditProps: [BadgeColorsSideEditProps],
}

export default RadioHeader