import React from 'react';
import styles from './App.module.css';

// Sample array data
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Item component
const Item = ({ name }) => {
  return <li className={styles.item}>{name}</li>;
};

// ItemList component
const ItemList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Item key={item.id} name={item.name} />
      ))}
    </ul>
  );
};

// Main App component
function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React Component and JSX Demo</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <ItemList items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
