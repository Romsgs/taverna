import { Request, Response } from "express";
import ShowService from "./Shows.Service";

export default class ShowsModule{
  constructor(private showService = new ShowService){}
  async getShows(req: Request,res: Response){
    const shows = await this.showService.getShow()
    console.table(shows)
    res.render('showsPage', {shows: shows})
  }
  async createShow(req: Request,res: Response){
    await this.showService.createShow(req.body)
    const shows = await this.showService.getShow()
    res.render('showsPage', {shows})
  }
}