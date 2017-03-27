/**
 * Created by leonardli on 3/23/17.
 */
import Dish from '../types/Dish';
import {getDishes} from '../StorageInterface';
export default function () {
  return getDishes().then(dishesDataArr => {
    return dishesDataArr.map(dish => {
      return new Dish(dish);
    })
  })
}