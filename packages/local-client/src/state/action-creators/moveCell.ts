import { ActionType } from "../action-types";
import { MoveCellAction, Direction } from "../actions";

const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export default moveCell;
