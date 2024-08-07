import { useState } from 'react';


import { ChatContainer, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './App.css';
import { Image, Flex, Box} from '@chakra-ui/react';



const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function TravelGenie() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm TravelGenie! Ask me anything!",
      sentTime: "just now",git
      sender: "ChatGPT",
      direction:'incoming'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
      
     
    };
    

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch(" https://api.openai.com/v1/chat/completions ", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
         direction:'incoming' 
      }]);
      setIsTyping(false);
    });
  }



  return (
    
      <div className="App" >
       <div>
       <Flex alignItems={"center"} 
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={"center"}>	
				<Box display={{ base: "none", md: "block" }}><Image src='./fontgenie.png' h={30}></Image></Box>
        <Image src='./genie.png' w={100} h={100}></Image>
				</Flex>
      < MainContainer>
          <ChatContainer   style={{
    height: '500px'
  }}>       
            <MessageList 
            scrollBehavior="smooth" 
            typingIndicator={isTyping ? <TypingIndicator content="istyping" /> : null}

            >

   {messages.map((message, i) => {
return                   <Message  key={i} model={message}> </Message>
             } )}
          
  
            </MessageList> 
            
            <MessageInput  placeholder="Type your message here" onSend={handleSend}>

  
          
            </MessageInput>
           


            
        
            
                  
          </ChatContainer>
        </MainContainer>  






       </div>
      </div>
      
      
    
  ) 
}

export default TravelGenie
