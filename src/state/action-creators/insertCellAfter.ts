import { ActionType } from "../action-types";
import { InsertCellAfterAction } from "../actions";
import { CellTypes } from "./../cell";

const insertCellAfter = (
  id: string | null,
  CellType: CellTypes
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: CellType,
    },
  };
};

export default insertCellAfter;
