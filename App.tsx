import './App.css';
import dummy from "./info-json/information.json"

function App() {
  const worldList = dummy.information
  const elementStyle ={
    border:'solid',
    borderRadius:'10px',
    position:'relative',
    left:'10vh',
    height:'3vh',
    width:'20vh',
    marginTop:'5vh',
    marginBottom:'10vh'
  }
  return (
  <div>
    <table>
      <tbody>
        {worldList.map((world) => (
          <tr key={world.name}>	 
            <td>{world.age}</td>	  	
            <td>{world.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default App;
