import { ActionType } from "../action-types";
import { UpdateCellAction } from "../actions";

const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export default updateCell;
