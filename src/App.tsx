import { Table } from './components/Table';
import { IDevice, Items } from './types';
import { ChangeEvent, useEffect, useState } from 'react';

import { Sort } from './components/Sort';
import data from './data.json';

function App() {
  const [items, setItems] = useState<Items>(data);
  const [textValue, setTextValue] = useState<string>(JSON.stringify(data));

  const sortItems = (prop: string, order: string) => {
    const sortedItems = items.devices
      .sort((a: any, b: any): any => {
        let x = a[prop].toLowerCase();
        let y = b[prop].toLowerCase();
        if (order === 'asc') {
          if (x < y) {
            return -1;
          } else if (x > y) { 
            return 1;
          } else {
            return 0;
          }
        } else if (order === 'desc') {
          if (x > y) {
            return -1;
          } else if (x < y) { 
            return 1;
          } else {
            return 0;
          }
        }
      })
      .map((item: IDevice, index: number) => {
        return item;
      });

      setItems((prevItems: Items) => {
        return {
          ...prevItems,
          devices: sortedItems
        }
      });
  };

  const deleteItem = (index: number) => {
    setItems((prevItems: Items) => {
      return {
        ...items,
        devices: prevItems.devices.filter((el: IDevice, idx: number) => {
          return index !== idx;
        })
      }
    });
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handleClickLoad = () => {
    setItems(JSON.parse(textValue));
  };

  const handleClickSave = () => {
    setTextValue(JSON.stringify(items));
  };

  return (
    <div className="app">
      <h3>Табличный редактор</h3>
      <Sort sortItems={sortItems} />
      <Table items={items} setItems={setItems} deleteItem={deleteItem} />
      <div>
        <button onClick={handleClickSave}>Сохранить</button>
      </div>
      <div>
        <h4>Загрузка данных</h4>
        <div>
          <textarea 
            id="text"
            name="text"
            value={textValue}
            onChange={handleTextChange} 
          />
          <div>
            <button onClick={handleClickLoad}>Загрузить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
