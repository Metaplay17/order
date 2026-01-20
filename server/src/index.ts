import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;
const CHAT_ID = process.env.CHAT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const FRONTEND_URL = process.env.FRONTEND_URL;
const MAX_REQUESTS_COUNT = 5;
const MAX_REQUESTS_PERIOD = 1000 * 60;
const BAN_TIME = 1000 * 60 * 60;

interface RequestInfo {
  count: number,
  lastRequest: Date,
  bannedUntil: Date | null
}

const requestStore : Map<string, RequestInfo> = new Map<string, RequestInfo>();

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(cors({
  origin: FRONTEND_URL
}));

interface MessageRequest {
  text: string;
}

if (CHAT_ID == undefined || BOT_TOKEN == undefined || PORT == undefined || FRONTEND_URL == undefined) {
    throw new Error('Ошибка парсинга переменных окружения');
}

const rateLimiter = (req : express.Request, res : express.Response, next : express.NextFunction) => {
    const ip : string | undefined = req.ip;
    const now = Date.now();
    const nowDate = new Date(now);

    if (!ip) {
        return res.status(400).json({ error: 'IP not found' });
    }

    let info : RequestInfo | undefined = requestStore.get(ip);
    if (!info) {
        info = { count: 0, lastRequest: nowDate, bannedUntil: null };
    }

    if (info.lastRequest.getTime() + MAX_REQUESTS_PERIOD < nowDate.getTime()) {
        info.count = 0;
        info.lastRequest = nowDate;
    }

    if (info.bannedUntil && info.bannedUntil.getTime() > now) {
        return res.status(429).json({ error: "Too Many Requests"});
    }

    if (info.count >= MAX_REQUESTS_COUNT) {
        info.lastRequest = nowDate;
        info.bannedUntil = new Date(nowDate.getTime() + BAN_TIME);
        console.log(`IP BANNED: ${ip}`);
        return res.status(429).json({ error: "Too Many Requests"});
    }

    info.count += 1;
    info.lastRequest = nowDate;
    console.log(`COUNT: ${info.count}, LASTTIME: ${info.lastRequest}, BANNEDUNTIL: ${info.bannedUntil}`);
    requestStore.set(ip, info);

    next();
}

app.post('/send', rateLimiter, async (req, res) => {
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