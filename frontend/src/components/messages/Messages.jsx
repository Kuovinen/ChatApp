import { useEffect, useRef } from "react";
//import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
//import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
      {" "}
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};
export default Messages;
