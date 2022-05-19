import {Request, Response, Router} from 'express';
import ShowsModule from '../modules/ShowsModule/Shows.Module';
import multer from 'multer'
const router = Router();
const showsModule = new ShowsModule()
router.get('/', (req:Request,res: Response) => showsModule.index(req, res))
router.get('/about', (req:Request,res: Response) => showsModule.about(req, res))
router.get('/agenda', (req:Request,res: Response) => showsModule.agenda(req, res))
router.get('/criarShow',(req:Request,res: Response) => showsModule.criarShow(req, res))
export default router;