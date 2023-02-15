import { FC, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { IDevice } from "../types";

interface IRowProps {
  item: IDevice;
  deleteItem: (index: number) => void;
  index: number;
}

export const Row: FC<IRowProps> = ({
  item,
  deleteItem,
  index
}) => {
  const [name, setName] = useState<string>(item.name);
  const [value, setValue] = useState<string>(item.value);

  const [nameInputShown, setNameInputShown] = useState<boolean>(false);
  const [valueInputShown, setValueInputShown] = useState<boolean>(false);

  const nameRef = useRef<any>(null);
  const valueRef = useRef<any>(null);

  // stopped here, making update functionality

  const handleDelete = () => {
    deleteItem(index);
  };

  return (
    <div className="table-body__row table-row">
      <div className="table-row__name">{item.name}</div>
      <div className="table-row__value">{item.value}</div>
      <div className="table-row__deleteIcon" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
