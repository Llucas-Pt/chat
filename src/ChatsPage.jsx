import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
//import { ChatEngine } from 'react-chat-engine'
  

const ChatsPage = (props) => {

  return (

    <div style={{height:'100vh'}}>

       <PrettyChatWindow
      projectId="899b283f-b4de-4b74-8bef-9c17a90b2fba"
      username={props.user.username}
      secret={props.user.secret}
      />
 

</div>
 )     
};

export default ChatsPage

  /*
    <PrettyChatWindow
      projectId="7d544457-843e-495d-ad55-cc28b1c25ba5"
      username={props.user.username}
      secret={props.user.secret}
   */