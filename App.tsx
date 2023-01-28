import './App.css';
import dummy from "./info-json/information.json"
import React, { useState } from "react";

function App() {
  const allWorldList = dummy.information
  type member = {
    name: string;
    country: string;
    food: string;
  };
  type world = {
    name: string;
    country: string;
  }
  type WorldList = Array<world>;

const allMemberList = [
  {
    name: "太郎",
    country: "Japan",
    food: "焼肉"
  },
  {
    name: "花子",
    country: "Japan",
    food: "ケーキ"
  },
  {
    name: "リチャード",
    country: "Canada",
    food: "ステーキ"
  },
  {
    name: "マイケル",
    country: "USA",
    food: "ハンバーガー"
  }
];


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
    </div>

    // <table>
    //   <tbody>
    //     {worldList.map((world) => (
    //       <tr key={world.name}>	 
    //         <td>{world.age}</td>	  	
    //         <td>{world.country}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

  );
}

export default App;
