import React, {useEffect} from "react";

import Cockpitcss from "./Cockpit.module.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[cockpit.js] use effect');
    }, []);
    let additionalClasses = [];
    if (props.personsLength <= 1) {
      additionalClasses.push( Cockpitcss.red );
    }

    if (props.personsLength === 0) {
      additionalClasses.push( Cockpitcss.bold );
    }

    return [
        // <div>
            <h1>{props.title}</h1>,
            <p className={additionalClasses.join(' ')}>This is some basic text</p>,
            <buttton onClick={props.clicked} className={Cockpitcss["btn-style"]}>Switch Name</buttton>
        // </div>
    ];
};

export default React.memo(Cockpit);