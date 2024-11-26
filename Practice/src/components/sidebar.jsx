import "../styles/sidebar.css"

import { useState } from "react"
export let Sidebar = () => {
    let [toggle, setToggle] = useState(false);

    return(
        <div className="sidebar">
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {
                toggle?
                <div>
                    <p>getting sidebar out .</p>
                    <p>getting sidebar out .</p>
                    <p>getting sidebar out .</p>
                    <p>getting sidebar out .</p>
                </div>
                :
                <div>

                </div>
            }
        </div>
    )
}