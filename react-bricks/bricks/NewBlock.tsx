import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'
import { getAllStages } from '../../api/dato-cms'
import { Stage, Talk } from '../types';
import cn from 'classnames';
import styles from './newBlock.module.css';
import NewCard from './NewCard';

interface NewBlockProps {
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

interface BlockScheduleProps {
    hasShadow: boolean
    bgColor: types.IColor
}

const NewBlock: types.Brick<StageProps> = ({
    stage,
    ...rest
  }) => {
    const [data, updateData] = useState<OneSchedule | null>(null);
    useEffect(() => {
        const getData = async () => {
          const resp = await getAllStages();
          const oneStage = stage ? stage : resp[1];
          const timeBlocks = oneStage.schedule.reduce((allBlocks: any, talk) => {
            allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
            return allBlocks;
          }, {});
          updateData({stage: oneStage, timeon: timeBlocks});
        }
        getData();
      }, []);
      return data &&  (
      <div
        {...rest}
        className={`my-6 p-6 text-center border rounded-lg`}
      >
         <div key={data.stage.name} className={styles.row}>
      <h3 className={cn(styles['stage-name'], styles[data.stage.slug])}>
        <span>{data.stage.name}</span>
      </h3>
    {/* <div className={cn(styles.talks, styles[data.stage.slug])}>
        {Object.keys(data.timeon).map((startTime: string) => (
          <div key={startTime}>
            {data.timeon[startTime].map((talk: Talk, index: number) => (
              <NewCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </div>
    */}
    <div className={cn(styles.talks, styles[data.stage.slug])}>
        {Object.keys(data.timeon).map((startTime: string) => (
          <div key={startTime}>
            {data.timeon[startTime].map((talk: Talk, index: number) => (
                <Repeater key={talk.title} talk={talk} showTime={index === 0} propName="newCard" />
            ))}
          </div>
        ))}
      </div>
    </div>
           
        </div>
    )
}

NewBlock.schema = {
    name: 'newBlock',
    label: 'NewBlock',
    getDefaultProps: () => ({
        title: 'Hello, world!',
        description: 'Lorem ipsum dolor sit amet.',
        stageName: 'Stage x'
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

export default NewBlock