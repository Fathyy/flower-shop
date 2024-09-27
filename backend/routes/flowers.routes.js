import express from 'express';
import { getFlowers } from '../controllers/flowers.controllers.js';

const router = express.Router();

router.get('/', getFlowers);

export default router;