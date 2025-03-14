import express from 'express';
const Router = express.Router();

import {
    createNewChat
} from '../controller/AIchatController.js'

Router.post('/chat_with_ai', createNewChat);

export default Router;