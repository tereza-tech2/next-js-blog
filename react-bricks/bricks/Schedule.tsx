import cn from 'classnames';
import { Stage, Talk } from '../types';
import styles from './schedule.module.css';
import TalkCard from './TalkCard';
import { types, Text, RichText, Image } from 'react-bricks/frontend'

interface  StageProps {
    stage: Stage;
}
interface  ScheduleProps {
    allStages: Stage[];
}

const StageRow: types.Brick<StageProps> = ({ stage }) => {
  // Group talks by the time block
  const timeBlocks = stage.schedule.reduce((allBlocks: any, talk) => {
    allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
    return allBlocks;
  }, {});

  return (
    <div key={stage.name} className={styles.row}>
      <h3 className={cn(styles['stage-name'], styles[stage.slug])}>
        <span>{stage.name}</span>
      </h3>
      <div className={cn(styles.talks, styles[stage.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map((talk: Talk, index: number) => (
              <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

StageRow.schema = {
    name: 'stage-row',
    label: 'Stage schedule',
    category: 'streaming',
    sideEditProps: [
    ],
    getDefaultProps: () => ({
        stage: 'A60xWr-nqv0'
      }),
  }

const Schedule: types.Brick<ScheduleProps> = ({ allStages }) => {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => (
          <StageRow key={stage.slug} stage={stage} />
        ))}
      </div>
    </div>
  );
}
Schedule.schema = {
    name: 'schedule',
    label: 'Schedule',
    category: 'streaming',
    getDefaultProps: () => ({}),
    sideEditProps: [
    ],
  }

export {Schedule, StageRow}