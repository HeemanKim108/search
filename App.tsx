import './App.css';
import dummy from "./info-json/information.json"
import React, { useState } from "react";
import { stringify } from 'querystring';
import { logDOM } from '@testing-library/react';

function App() {
  const allWorldList = dummy.information
  type world = {
    name: string;
    country: string;
  }
  interface Category {
    name: string;
  }
  // type category = {
  //   name: string;
  // }
  const categoryList = [
    { name: 'ALL' },
    { name: 'USA' },
    { name: 'JAPAN' },
    { name: 'KOREA' },
  ];
  type WorldList = Array<world>;
  // type CategoryList = Array<category>;

  const [categoryItem, setCategoryItem] = useState<Category>(categoryList[0]);
  const [toggle, setToggle] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState("");
  const [worldList, setWorldList] = useState<WorldList>(allWorldList);

  const search = (value: string) => {
    if (value !== "") {
      const filteredList = allWorldList.filter((world: world) =>
        Object.values(world).some(
          (item: string) =>
            item?.toUpperCase().indexOf(value.trim().toUpperCase()) !== -1
        )
      );
      setWorldList(filteredList);
      return;
    }

    setWorldList(allWorldList);
    return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  function filterCategory(cate: Category) {
    setCategoryItem(cate);
    setToggle(false);
    // ... api 호출
  };

  return (
    <div className="App">
      <h1>LIST</h1>
      <div>
        <span style={{ marginRight: "5px" }}>SEARCH</span>
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>
      <ul>
        {worldList.map((world, index) => {
          return (
            <li key={index}>
              {world.name} / {world.country}
            </li>
          );
        })}
      </ul>

      <div
        className={`select-box ${toggle ? 'open' : ''}`}
        onClick={() => setToggle(!toggle)} >
        {categoryItem.name}
        {/* <img src={} /> */}
        ↑
      </div>

      {toggle && (
        <div className="select-dropdown">
          {categoryList.map((cate, index) => (
            <div
              className="select-item"
              key={index}
              onClick={() => filterCategory(cate)}
            >
              {cate.name}
            </div>
          ))}
        </div>
      )}
    </div>

  );
}

export default App;
