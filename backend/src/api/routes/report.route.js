import {Router} from 'express';
import {orderReport, taskReport} from '../controllers/report.controller'


const reportRouter = Router();

reportRouter.get("/orders", orderReport);
reportRouter.get("/tasks", taskReport);


export default reportRouter;