import { Request, Response } from "express";
import ShowService from "./Shows.Service";

export default class ShowsModule{
  constructor(private showService = new ShowService){}
  async getShows(req: Request,res: Response){
    const shows = await this.showService.getShow()
    res.render('showsPage', {shows: shows})
  }
  async createShow(req: Request,res: Response){
    console.log("🚀 ~ file: Shows.Module.ts ~ line 13 ~ ShowsModule ~ createShow ~ req.body", req.body)
    // console.dir(req.body)
    
    // console.dir(req.query)
    console.log("🚀 ~ file: Shows.Module.ts ~ line 15 ~ ShowsModule ~ createShow ~ req.query", req.query)
    // console.dir(req.params)
    console.log("🚀 ~ file: Shows.Module.ts ~ line 17 ~ ShowsModule ~ createShow ~ req.params", req.params)
    const {when, address, mapsLink, income, contact, fee} = req.body
    const body = {when, address, mapsLink, income, contact, fee}
    console.log(body)
    await this.showService.createShow(body)
    const shows = await this.showService.getShow()
    res.render('showsPage', {shows})
  }
  async index(req, res){
    res.render('index')
  }
  async about(req, res){
    res.render('about')
  }
  async agenda(req, res){
    const shows = await this.showService.getShow()
    res.render('agenda', {shows: shows})
  }
  async criarShow(req, res){
    res.render('criarShowForm')
    
  }
}