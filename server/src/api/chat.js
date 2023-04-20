const express = require('express');
const router = express.Router();
const chatService = require('../services/chat');

// Endpoint to send a message
router.post('/message', async (req, res) => {
  const { username, message } = req.body;
  try {
    const result = await chatService.postMessage(username, message);
    res.status(200).json({ message: 'Message sent successfully', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message', error });
  }
});

// Endpoint to get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await chatService.getAllMessages();
    res.status(200).json({ message: 'Messages retrieved successfully', data: messages });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve messages', error });
  }
});

module.exports = router;
