import { FC, useEffect, useState } from "react";

interface ISortProps {
  sortItems: (prop: string, order: string) => void;
}

export const Sort: FC<ISortProps> = ({
  sortItems
}) => {
  const [column, setColumn] = useState<string>("name");
  const [orderBy, setOrderBy] = useState<string>("asc");

  const handleSort = () => {
    sortItems(column, orderBy);
  };

  useEffect(() => {
    console.log("column is: ", column, "order is: ", orderBy);
  }, [column, orderBy]);

  return (
    <div className="sort">
      <select 
        name="column" 
        id="column" 
        onChange={(event) => setColumn(event.target.value)}
      >
        <option value="name">Марка</option>
        <option value="value">Модель</option>
      </select>
      <select 
        name="order" 
        id="order"
        onChange={(event) => setOrderBy(event.target.value)}
      >
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
      <button onClick={handleSort}>Сортировать</button>
    </div>
  );
};
