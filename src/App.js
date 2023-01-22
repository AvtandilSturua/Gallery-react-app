import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const addItem = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: image,
    };
    setData((OldList) => [...OldList, item]);
    console.log(image);
  };
  const deleteItem = (id) => {
    const newArray = data.filter((item) => item.id !== id);
    setData(newArray);
  };
  return (
    <>
      <div className="main-container">
        <h1>The home for your memories</h1>
        <div className="input">
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            accept="image/png, image/jpeg"
          />
          <button onClick={addItem}>ADD</button>
        </div>
        <div className="photos-container">
          {data.map((item) => (
            <>
              <div className="box">
                <div className="image">
                  <img width={"250px"} src={URL.createObjectURL(item.value)} />
                </div>
                <div className="attribute">
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
