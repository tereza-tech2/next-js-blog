import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import Thumbnail from './Thumbnail'
import Gallery from './Gallery'
import Video from './Video'
import BlogImage from './Image'
import VideoRow from './VideoRow'
import TeamRound from './TeamRound'
import { Schedule, StageRow } from './Schedule'
//import  from './ImageGrid'
import AddSchedule from './AddSchedule'
import BlockSchedule from './BlockSchedule'
import NewBlock from './NewBlock'
import NewBlocker from './NewBlocker'
import NewCard from './NewCard'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, 
  Thumbnail,
  Gallery,
  Video,
  BlogImage,
  VideoRow,
  TeamRound,
  Schedule,
  StageRow,
  AddSchedule,
  BlockSchedule,
  NewBlock,
  NewBlocker,
  NewCard
  
  // Example custom brick
  // Put here your other bricks...
]

export default bricks
