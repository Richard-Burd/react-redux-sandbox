// Lesson 15 (https://www.youtube.com/watch?v=g5l8xu6i4XQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=15)
// in this file we will define our action creator
import { BUY_CAKE } from './cakeTypes'

export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}
