import React from 'react';

import {DynamicListContext,} from './context';
import Items from "./Items";
import Form from "./Form";
import SendToServer from "./SendToServer";

const DynamicList = () => (
    <DynamicListContext.Provider value={{}}>
        <Form />
        <Items/>
        <hr />
        <SendToServer />
    </DynamicListContext.Provider>)

export default DynamicList;