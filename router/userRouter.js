import express from 'express';
import { alluser } from '../controller/userController.js';

const router = express.Router();

router.get('/user', alluser);
router.post('/user',createuser);
router.delete('/user/:id',deleteUser);

export default router;