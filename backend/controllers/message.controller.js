import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export async function sendMessage(req, res) {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = new Message({
      senderId: senderId,
      recieverrId: recieverId,
      message: message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
