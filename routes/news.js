import express from 'express';
import { getAllNews, createNews } from '../controllers/newsController';

const router = express.Router();

router.get('/', getAllNews);
router.post('/', createNews);

module.exports = router;