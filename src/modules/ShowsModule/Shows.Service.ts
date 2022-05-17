import { PrismaClient } from "@prisma/client";
import { ShowsDto } from "./dto";

export default class ShowService {
  constructor(private prisma = new PrismaClient()) {}
  async getShow() {
    return this.prisma.show.findMany();
  }

  async createShow(body: ShowsDto) {
    console.log(body)
    await this.prisma.show.create({
      data: {
        address: body.address,
        contact: body.contact,
        mapsLink: body.mapsLink,
        when: body.when,
        income: body.income
      },
    });
  }
}
