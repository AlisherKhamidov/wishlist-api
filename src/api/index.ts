import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './wishes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/wishes', emojis);

export default router;
