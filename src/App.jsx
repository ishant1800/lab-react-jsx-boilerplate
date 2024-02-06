import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const imageElements = imageData().map((image) => (
    <img
      key={image.id}
      className="images"
      src={image.img}
      alt={`Image ${image.id}`}
    />
  ));

  return (
    <>
      <div className="h1Container">
        <h1>Kalvium gallary</h1>
      </div>
      <div className="imagesContainer">{imageElements}</div>
    </>
  );
}

export default App;