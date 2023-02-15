import './scss/app.scss';
import { Table } from './components/Table';
import { IDevice, IDevices, Items } from './types';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { Sort } from './components/Sort';

function App() {
  const [items, setItems] = useState<Items>({
    devices: [
      {
        name: "Apple", 
        value: "iPhone 14"
      },
      {
        name: "Redmi", 
        value: "Note 11"
      },
      {
        name: "Samsung", 
        value: "Galaxy A52"
      },
      {
        name: "Google", 
        value: "Pixel 7 Pro"
      }
    ]
  });

  // <FontAwesomeIcon icon={faArrowDownShortWide} />

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

  return (
    <div className="app">
      <h3>Табличный редактор</h3>
      <Sort sortItems={sortItems} />
      <Table items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
