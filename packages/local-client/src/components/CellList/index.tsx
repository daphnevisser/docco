import "./cell-list.css";
import { Fragment, useEffect } from "react";
import { useTypedSelector } from "../../hooks";
import CellListItem from "./CellListItem";
import AddCell from "../AddCell";
import { useActions } from "../../hooks";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rederedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={!cells.length} previousCellId={null} />
      {rederedCells}
    </div>
  );
};

export default CellList;
