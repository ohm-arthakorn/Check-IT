import React ,{ useState } from "react";

export default function testingApp() {
    const [name, setName] = useState('Nuttha')
    return (
        <div>
            <div>
                <h1>
                    My favorite name is {name}! 
                </h1>
                <button type="button" onClick={()=>setName('Arthakorn')}>
                Arthakorn
                </button>
            </div>
        </div>
    )
}
