import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import BootstrapButton from "./components/BootstrapButton";
import { useState } from "react";

function App() {

  const [alertVisible,setAlertVisibile ] = useState(false);
  let items = [
    'New York',
    'Kansas City',
    'Oklahoma City',
    'Baltimore',
    'St. Louis',
    'Niotaze'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const handleButtonClick = () => {
    setAlertVisibile(true);
  }
  const handleAlertClose = () =>{
    setAlertVisibile(false);
  }
  return <div>
   {alertVisible &&<Alert onClose={handleAlertClose}>Button Clicked!</Alert>}
    

    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />

    <BootstrapButton color='success' onClick={handleButtonClick}> My Button 1</BootstrapButton>
    
    </div>;
}

export default App;