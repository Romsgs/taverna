import {Request, Response, Router} from 'express';
import ShowsModule from '../modules/ShowsModule/Shows.Module';

const mainRouter = Router();
const showsModule = new ShowsModule()
mainRouter.get('/', (req:Request,res: Response) => showsModule.getShows(req, res))
mainRouter.post('/', (req:Request,res: Response) => showsModule.createShow(req, res))

export default mainRouter;