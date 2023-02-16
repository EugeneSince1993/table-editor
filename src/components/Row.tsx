import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { IDevice, Items } from "../types";

interface IRowProps {
  item: IDevice;
  items: Items;
  setItems: any;
  deleteItem: (index: number) => void;
  index: number;
}

export const Row: FC<IRowProps> = ({
  item,
  items,
  setItems,
  deleteItem,
  index
}) => {
  const [name, setName] = useState<string>(item.name);
  const [value, setValue] = useState<string>(item.value);

  const [nameInputShown, setNameInputShown] = useState<boolean>(false);
  const [valueInputShown, setValueInputShown] = useState<boolean>(false);

  const nameRef = useRef<any>(null);
  const valueRef = useRef<any>(null);

  const handleInfoClick = (e: any) => {
    switch (e.target.className) {
      case 'table-row-name__info':
        setNameInputShown(true);
        break;
      case 'table-row-value__info':
        setValueInputShown(true);
        break;
    }
  };

  const updateInput = (id: number, propName: string, propValue: string | null) => {
    setItems((prevItems: any) => {
      return {
        ...prevItems,
        devices: prevItems.devices.map((obj: IDevice, idx: number) => {
          if (id === idx) {
            return {
              ...obj,
              [propName]: propValue
            }
          } else {
            return obj;
          }
        })
      };
    });

    switch (propName) {
      case "name":
        setNameInputShown(false);
        break;
      case "value":
        setValueInputShown(false);
        break;
    }
  };

  useEffect(() => {
    switch (true) {
      case nameInputShown:
        nameRef.current.focus();
        break;
      case valueInputShown:
        valueRef.current.focus();
        break;
    }
  }, [nameInputShown, valueInputShown]);

  useEffect(() => {
    setName(item.name);
    setValue(item.value);
  }, [items]);

  const handleDelete = () => {
    deleteItem(index);
  };

  return (
    <div className="table-body__row table-row">
      <div className="table-row__name table-row-name">
        <div 
          className={classNames("table-row-name__info", {
            "hidden": nameInputShown
          })}
          onClick={handleInfoClick}
        >
          {name}
        </div>
        <div 
          className={classNames("table-row-name__input", {
            "hidden": !nameInputShown
          })}
        >
          <input 
            type="text" 
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            onBlur={() => updateInput(index, "name", name)}
            ref={nameRef}
          />
        </div>
      </div>
      <div className="table-row__value table-row-value">
        <div 
          className={classNames("table-row-value__info", {
            "hidden": valueInputShown
          })}
          onClick={handleInfoClick}
        >
          {value}
        </div>
        <div 
          className={classNames("table-row-value__input", {
            "hidden": !valueInputShown
          })}
        >
          <input 
            type="text" 
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
            }}
            onBlur={() => updateInput(index, "value", value)}
            ref={valueRef}
          />
        </div>
      </div>
      <div className="table-row__deleteIcon" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
