import { Request, Response } from "express";
import ShowService from "./Shows.Service";

export default class ShowsModule{
  constructor(private showService = new ShowService){}
  async getShows(req: Request,res: Response){
    const shows = await this.showService.getShow()
    res.render('showsPage', {shows: shows})
  }
  async createShow(req: Request,res: Response){
    const form: HTMLFormElement = document.querySelector('form');
    form.onsubmit = () => {
      const formData = new FormData(form);
      const text = formData.get('textInput') as string;
      console.log(text);
      return false; // prevent reload
    };
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