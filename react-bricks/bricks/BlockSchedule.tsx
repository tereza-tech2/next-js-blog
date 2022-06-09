import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Stage, Talk } from '../types';
import styles from './schedule.module.css';
import TalkCard from './TalkCard';
import { types, Text, RichText, Image } from 'react-bricks/frontend'
import { getAllStages } from '../../api/dato-cms'
import { forEach } from 'lodash';

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


const BlockSchedule: types.Brick<StageProps & BlockScheduleProps> = ({stage, 
    hasShadow,
    bgColor,
    ...rest
}) => {
  /*  const [data, updateData] = useState<OneSchedule | null>(null);
    useEffect(() => {
        const getData = async () => {
            const resp = await getAllStages();
            try {
                let innerIn = []
                let afterIn = await Promise;
                let allD = resp.values().next();
                console.log(innerIn)
                !allD.done ? innerIn.push(allD.value) : (console.log(innerIn), afterIn.reject())
                return [innerIn, afterIn]
              } catch (ex) {
                console.error('inner', ex.message);
                throw ex;
              }
             /*   resp.values().next().done
            console.log((resp.values().next().value))
            const oneStage = stage[0] ? stage[0] : resp[0][1];*/
           /* const timeBlocks = oneStage.schedule.reduce((allBlocks: any, talk) => {
                 allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
                 return allBlocks;
             }, {});
            updateData({ stage: oneStage, timeon: timeBlocks });*/
      /*  }
        getData();
    }, []);
    return data && (
        <div
            {...rest}
            className={`my-6 p-6 text-center border rounded-lg ${hasShadow ? 'shadow-xl' : ''
                }`}
        >
            <div key={data.stage.name} className={styles.row}>
                <h3 className={cn(styles['stage-name'], styles[data.stage.slug])}>
                    <span>{data.stage.name}</span>
                </h3>

            </div>
           
              <div>
                {Object.keys(data.timeon).map((startTime: string) => (
                   <p>{startTime}</p>
                ))}
            </div> 
            <Text
                propName="title"
                renderBlock={({ children }) => (
                    <h1 className="text-2xl font-bold">{children}</h1>
                )}
                placeholder="Type a title..."
            />


        </div>
    )*/
    return (
        <div
        {...rest}
        className="bg-blue-50">Hello</div>
    )
}

BlockSchedule.schema = {
    name: 'blockSchedule',
    label: 'Block Schedule',
    getDefaultProps: () => ({
        stage: getAllStages(),
        title: 'Hello, world!',
        description: 'Lorem ipsum dolor sit amet.',
        hasShadow: true,
        bgColor: { color: '#ffffff', className: 'bg-white' }
    }),
    sideEditProps: [
        {
            name: 'fontSize',
            label: 'Font Size',
            type: types.SideEditPropType.Number,
            validate: value => value >= 12 && value <= 32
        },
        {
            name: 'hasShadow',
            label: 'Shadow',
            type: types.SideEditPropType.Boolean,
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

export default BlockSchedule