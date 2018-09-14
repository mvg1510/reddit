import React from 'react';
import Item from './../item/Item';
import './List.css';

function List({ items }) {
    return (
        <div className="Reddit-List">
            {items.data && items.data.children && items.data.children.map(item => 
                <Item key={item.data.id} item={item.data} />
            )}
        </div>
    );
}

export default List;