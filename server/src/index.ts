import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;
const CHAT_ID = process.env.CHAT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();
app.use(express.json());
app.use(cors({
  origin: FRONTEND_URL
}))

interface MessageRequest {
  text: string;
}

if (CHAT_ID == undefined || BOT_TOKEN == undefined || PORT == undefined || FRONTEND_URL == undefined) {
    throw new Error('Ошибка парсинга переменных окружения');
}

app.post('/send', async (req, res) => {
    const request : MessageRequest = req.body;

    if (!request || request.text == undefined) {
      return res.status(400).json({ error: 'Сообщение обязательно' });
    }

    try {
      await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text: request.text,
        }
      );
      res.json({ success: true });
    } catch (error : any) {
      console.error('Ошибка Telegram:', error.response?.data || error.message);
      res.status(500).json({ error: 'Не удалось отправить сообщение' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});