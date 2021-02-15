import React, { useEffect, useState } from "react";

import BubbleDetail from "../components/bubbleDetail"
import BubbleResponse from "../components/bubbleResponse"

function ChatBubbleDetail() {

    return (
        <div>

            <BubbleDetail />
            <BubbleResponse/>
            <input placeholder="Respond to bubble..."></input>

            <button>Send Button</button>

        </div>
    );
}


export default ChatBubbleDetail;