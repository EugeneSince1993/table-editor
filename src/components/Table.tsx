import { FC } from "react";
import { IDevice, Items } from "../types";
import { Header } from "./Header";
import { Row } from "./Row";

interface ITableProps {
  items: Items;
  deleteItem: (index: number) => void;
}

export const Table: FC<ITableProps> = ({
  items,
  deleteItem
}) => {
  const rows = items.devices.map((item: IDevice, index: number) => {
    return <Row item={item} key={index} deleteItem={deleteItem} index={index} />;
  });

  return (
    <div className="table">
      <Header />
      {rows}
    </div>
  );
};
