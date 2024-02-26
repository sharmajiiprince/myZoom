import React from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import {useParams} from 'react-router-dom';
function Room(){
    const {roomId} =useParams();
    const myMeeting=async (element)=>{
    const appID=540899412
    const serverSecret='1082c2e54f13f3896b1d003862568d03'
    const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"prince raj");
    const zc=ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:'copy',
                url:`http://localhost:3000/room/${roomId}`
            }
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.GroupCall,
        },
        showScreenSharingButton:true
    })
    }
    return (
    <div>
        <div ref={myMeeting} />
    </div>
    )
}
export default Room;