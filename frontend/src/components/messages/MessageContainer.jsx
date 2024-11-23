import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="conContainer md:min-w-[450px] rounded-lg overflow-hidden flex flex-col  bl015">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bl03 px-4 py-2 mb-2 flex justify-between">
            <p>
              {" "}
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-300 font-bold">
                {selectedConversation.fullname}
              </span>
            </p>

            <TiMessages className="text-1xl md:text-3xl inline opacity-25" />
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="p-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Hi,{authUser.fullname}!</p>
        <p>Select a user to chat with.</p>
      </div>
    </div>
  );
};
