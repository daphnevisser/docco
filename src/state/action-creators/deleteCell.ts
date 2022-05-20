import { ActionType } from "../action-types";
import { DeleteCellAction } from "../actions";

const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export default deleteCell;
