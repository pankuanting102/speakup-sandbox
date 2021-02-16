import React, { useEffect, useState } from "react";

import BubbleDetail from "../components/bubbleDetail"
import BubbleResponse from "../components/bubbleResponse"

import words from "../utils/badWordArray"

function ChatBubbleDetail() {


    const input = "hey you are a whore";

    function handleInput() {

        if (words.some(word => input.toLowerCase().includes(word))) {
            const arr = []
            for (var i = 0; i <= words.length; i++) {
                
                if (input.toLowerCase().includes(words[i])) {
                    arr.push(words[i])
                }
            }
            console.log(arr)
        }
        else {

            console.log("no bad words detected")
        }
    };


    return (
        <div>

            <BubbleDetail />
            <BubbleResponse />
            <input placeholder="Respond to bubble..."></input>

            <button>Send Button</button>

        </div>
    );
}


export default ChatBubbleDetail;