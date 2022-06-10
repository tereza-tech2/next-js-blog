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

interface SideProps {
  label: string,
  value: { 
    className: string,
    size?: any,
    color?: any
  }
}

interface IColor {
  color: string;
  [propName: string]: any;
}

interface IFontSize {
  fontSize: string;
  [propName: string]: any;
}

interface StyleProps {
  hasShadow: boolean,
  bgColor: IColor,
  fontSize: IFontSize
}

interface ThumbnailProps {
  hasShadow: boolean
  fontSize: number
  bgColor: types.IColor
}

const NewBlock: types.Brick<StageProps & StyleProps> = ({
  stage,
  bgColor,
  hasShadow,
  fontSize,
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
      updateData({ stage: oneStage, timeon: timeBlocks });
    }
    getData();
  }, []);
  return data && (
      <div
        {...rest}
        className={`my-6 p-6 text-center border rounded-lg ${
          hasShadow ? 'shadow-xl' : ''
        } ${bgColor.className} text-[${fontSize}px]`}
      >
      <div key={data.stage.name} className={styles.row}>
        <h3 className={cn(styles['stage-name'], styles[data.stage.slug]) + 'text-green-600'}>
        <span className={`my-6 p-6 text-center border rounded-lg ${bgColor.className} text-[${fontSize}px]`}
         >{data.stage.name}</span>
        </h3>
        <div className={cn(styles.talks, styles[data.stage.slug])}>
          {Object.keys(data.timeon).map((startTime: string) => (
            <div key={startTime}>
              {data.timeon[startTime].map((talk: Talk, index: number) => (
                <Repeater key={talk.title} itemProps={talk} propName="newCard" />
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
    hasShadow: true,
    bgColor: { color: '#ffffff', className: 'bg-white' },
    fontSize: '16px'
}),
sideEditProps: [
    {
        name: 'fontSize',
        label: 'Font Size',
        type: types.SideEditPropType.Number
    },
    {
        name: 'hasShadow',
        label: 'Shadow',
        type: types.SideEditPropType.Boolean,
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
    },
    {
        name: 'bgColor',
        label: 'Background',
        type: types.SideEditPropType.Select,
        selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
                {
                    label: 'White',
                    value: { color: '#ffffff', className: 'bg-white' },
                },
                {
                    label: 'Light blue',
                    value: { color: '#eff6ff', className: 'bg-blue-50' },
                },
            ],
        },
    },
],
}

export default NewBlock