import ListGroup from "./components/ListGroup";

function App() {

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
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>;
}

export default App;