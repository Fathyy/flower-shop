import express from 'express';
import { getFlowers } from '../controllers/flowers.controllers';

const router = express.Router();

router.get('/flowers', getFlowers);

export default router;