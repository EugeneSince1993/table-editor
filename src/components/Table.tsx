import { FC } from "react";
import { IDevice, Items } from "../types";
import { Header } from "./Header";
import { Row } from "./Row";

interface ITableProps {
  items: Items;
  setItems: (items: Items) => void;
  deleteItem: (index: number) => void;
}

export const Table: FC<ITableProps> = ({
  items,
  setItems,
  deleteItem
}) => {
  const rows = items.devices.map((item: IDevice, index: number) => {
    return (
      <Row 
        item={item} 
        items={items}
        setItems={setItems}
        deleteItem={deleteItem} 
        index={index} 
        key={index} 
      />
    );
  });

  return (
    <div className="table">
      <Header />
      {rows}
    </div>
  );
};
