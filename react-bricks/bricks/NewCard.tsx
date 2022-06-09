import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { types, Text, RichText } from 'react-bricks/frontend'
import Image from 'next/image';
import { getAllStages } from '../../api/dato-cms'
import { Stage, Talk } from '../types';
import cn from 'classnames';
import Link from 'next/link';
import { parseISO, format, isBefore, isAfter } from 'date-fns';
import styles from './newCard.module.css';

interface NewCardProps {
    hasShadow: boolean
    bgColor: types.IColor
}

interface StageProps {
    stage?: Stage;
}
interface ScheduleProps {
    allStages: Stage[];
}

interface OneSchedule {
    stage: Stage,
    timeon: any
}

interface CardScheduleProps {
    hasShadow: boolean
    bgColor: types.IColor
}

type CardProps = {
  key: string;
  talk: Talk;
  showTime: boolean;
};

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};


const NewCard: types.Brick<CardProps> = ({
    key,
    talk,
    showTime,
    ...rest
  }) => {
    const [data, updateData] = useState<OneSchedule | null>(null);
    const [isTalkLive, setIsTalkLive] = useState(false);
    const [startAndEndTime, setStartAndEndTime] = useState('');
  
    useEffect(() => {
      const now = Date.now();
      setIsTalkLive(isAfter(now, parseISO(talk.start)) && isBefore(now, parseISO(talk.end)));
      setStartAndEndTime(`${formatDate(talk.start)} – ${formatDate(talk.end)}`);
    }, [talk.end, talk.start]);
  
    console.log(talk.title, talk.speaker, talk.start, talk.end)
    const firstSpeakerLink = `/speakers/${talk.speaker[0].slug}`;


      return data &&  (
        <div key={talk.title} className={styles.talk}>
        {showTime && <p className={styles.time}>{startAndEndTime || <>&nbsp;</>}</p>}
        <Link href={firstSpeakerLink}>
          <a
            className={cn(styles.card, {
              [styles['is-live']]: isTalkLive
            })}
          >
            <div className={styles['card-body']}>
              <h4 title={talk.title} className={styles.title}>
                {talk.title}
              </h4>
              <div className={styles.speaker}>
                <div className={styles['avatar-group']}>
                  {talk.speaker.map(s => (
                    <div key={s.name} className={styles['avatar-wrapper']}>
                      <Image
                        loading="lazy"
                        alt={s.name}
                        className={styles.avatar}
                        src={s.image.url}
                        title={s.name}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}
                </div>
                <h5 className={styles.name}>
                  {talk.speaker.length === 1 ? talk.speaker[0].name : `${talk.speaker.length} speakers`}
                </h5>
              </div>
            </div>
          </a>
        </Link>
      </div>
    )
}

NewCard.schema = {
    name: 'newCard',
    label: 'NewCard',
    getDefaultProps: () => ({
        title: 'Hello, world!',
        description: 'Lorem ipsum dolor sit amet.',
        talk: {
          title: 'Will React Survive in 2030?',
          description: 'Will React Survive in 2030?',
          start: '2020-10-27T11:30:00+01:00',
          end: '2020-10-27T12:10:00+01:00',
          speaker: 
          [{name: 'User 1',
          bio: 'no',
          title: 'no',
          slug: 'User 1',
          twitter: '',
          github: '',
          company: '',
          image: {url: 'https://www.datocms-assets.com/73703/1654116743-avataaars.png?fit=crop&fm=jpg&h=120&w=120', blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…1Kab1qcUXcjZVjdCUqVCqQJzprURKAZ/AH13PyIN613P/2Q=='},
          imageSquare: {url: 'https://www.datocms-assets.com/73703/1654116743-avataaars.png?fit=crop&fm=jpg&h=120&w=120', blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…1Kab1qcUXcjZVjdCUqVCqQJzprURKAZ/AH13PyIN613P/2Q=='}
          }]
        },
        showTime: 0
      
    }),
    sideEditProps: [
        {
            name: 'fontSize',
            label: 'Font Size',
            type: types.SideEditPropType.Number,
            validate: value => value >= 12 && value <= 32
        },
        {
            name: 'productCategory',
            label: 'Category',
            type: types.SideEditPropType.Select,
            /*selectOptions: {
                display: types.OptionsDisplay.Select,
                getOptions: () => {
                  return axios.get('...').then(res => res.data)
                }
              }*/
              selectOptions: {
                display: types.OptionsDisplay.Select,
                getOptions: () => {
                  return [{value:1, label:'Option 1'},{value:2, label:'Option 2'}]
                }
              }
        }
    ],
}

export default NewCard