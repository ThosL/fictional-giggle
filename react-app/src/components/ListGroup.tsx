import { useState } from "react";


function ListGroup() {
    let items = [
        'New York',
        'Kansas City',
        'Oklahoma City',
        'Baltimore',
        'St. Louis',
        'Niotaze'
    ];
    /*this is a hook to allow us to tap into built-in function in react */
    const [selectedIndex,setSelectedIndex] = useState(-1);
    /*arr[0] //selected index variable
    arr[1] //updater function
*/
    const getMessage = () => {

        return items.length === 0 ? <p>No items found.</p> : <p>{items.length} items found.</p>;
    }
    return (
        <>
            {getMessage()}
            <h1>List</h1>
            <ul className="list-group ">
                {items.map((item, index) =>
                    <li 
                        key={item} 
                        onClick={ ()  => {setSelectedIndex(index);}} 
                        className={ selectedIndex === index ? "list-group-item active": "list-group-item" }>
                            {item}
                    </li>)
                }
            </ul>
        </>
    );
}

export default ListGroup;