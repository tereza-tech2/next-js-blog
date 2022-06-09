import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Stage, Talk } from '../types';
import styles from './schedule.module.css';
import TalkCard from './TalkCard';
import { types, Text, RichText, Image } from 'react-bricks/frontend'
import { getAllStages } from '../../api/dato-cms'

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

const StageRow: types.Brick<StageProps> = ({ stage }) => {
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

    return data && <div key={data.stage.name} className={styles.row}>
      <h3 className={cn(styles['stage-name'], styles[data.stage.slug])}>
        <span>{data.stage.name}</span>
      </h3>
      <div className={cn(styles.talks, styles[data.stage.slug])}>
        {Object.keys(data.timeon).map((startTime: string) => (
          <div key={startTime}>
            {data.timeon[startTime].map((talk: Talk, index: number) => (
              <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </div>
    </div>

}

StageRow.schema = {
  name: 'stage-row',
  label: 'Stage schedule',
  category: 'streaming',
  sideEditProps: [
  ]
}

const Schedule: types.Brick<ScheduleProps> = ({ allStages }) => {
  const [data, updateData] = useState<Stage[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      const resp = await getAllStages()
      updateData(resp);
    }
    getData();
  }, []);
  // console.log(allStages)
  return data && <div className={styles.container}>
    <div className={styles['row-wrapper']}>
      {data.map(stage => (
        <StageRow key={stage.slug} stage={stage} />
      ))}
    </div>
  </div>

}
Schedule.schema = {
  name: 'schedule',
  label: 'Schedule',
  category: 'streaming',
  getDefaultProps: () => ({
    allStages: getAllStages()
  }),
  sideEditProps: [
  ],
}

export { Schedule, StageRow }