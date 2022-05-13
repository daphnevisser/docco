import { Fragment } from "react";
import { useTypedSelector } from "../../hooks/useTpedSelected";
import CellListItem from "./CellListItem";
import AddCell from "../AddCell/AddCell";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const rederedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell forceVisible={!cells.length} previousCellId={null} />
      {rederedCells}
    </div>
  );
};

export default CellList;
