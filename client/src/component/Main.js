import { useState } from 'react';
import axios from 'axios';
import ObjectForm from './ObjectForm';
import ObjectList from './ObjectList';

function Main() {

    const [object, setObject] = useState([]);


    return(

        <div>
            <ObjectForm object={object} setObject={setObject} />
            <hr/>
            <ObjectList object={object} setObject={setObject} />
        </div>
    );
}

export default Main;