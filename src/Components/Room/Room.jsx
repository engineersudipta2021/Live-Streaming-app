import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {appid,secret} from '../Helper';

function Room() {
  const { id } = useParams();

  //room reference
  const myLiveStream = async (element) => {
    // generate a kit token 
    const appID = appid;
    const serverSecret = secret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "sudipta dhawya");

    //create instance for Live-room
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    //join room function

    zc.joinRoom({
      container: element,
      sharedLinks:[{
          name:"COPY LINK",
          url:`http://localhost:5173/Live-vedio-call/${id}`
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
       
      },
      showScreenSharingButton:true
 
    });

  }
  console.log(id);
  return (

    <div>
   <div ref={myLiveStream}/>
    </div>
  )
}


export default Room
