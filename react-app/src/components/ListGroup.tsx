function ListGroup() {
    const items= [
        'New York',
        'Kansas City',
        'Oklahoma City',
        'Baltimore',
        'St. Louis',
        'Niotaze'
    ];

    const getMessage = () => {

        return items.length === 0 ? <p>No items found.</p>: <p>{items.length} items found.</p>;
    }
    return(
    <>
    {getMessage()}
    <h1>List</h1>
        <ul className="list-group"> 
            {items.map(item => 
                <li key={item} className="list-group-item">{item}</li>)
            }
        </ul>
    </>
    );
}

export default ListGroup;