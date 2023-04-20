const Message = require('../models/Message');

class ChatService {
  static async getMessages() {
    try {
      const messages = await Message.find();
      return messages;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async addMessage(data) {
    try {
      const message = new Message(data);
      await message.save();
      return message;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = ChatService;
