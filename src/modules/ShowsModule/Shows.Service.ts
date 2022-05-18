import { PrismaClient } from "@prisma/client";
import { ShowsDto } from "./dto";

export default class ShowService {
  constructor(private prisma = new PrismaClient()) {}
  async getShow() {
    return this.prisma.show.findMany();
  }

  async createShow(body: ShowsDto) {
    await this.prisma.show.create({
      data: {
        address: body.address,
        contact: body.contact,
        mapsLink: body.mapsLink,
        when: body.when,
        income: body.income,
        fee: body.fee
      },
    });
    return "OK"

  }

  async deleteShow(id: string) {
    await this.prisma.show.delete({
      where:{id}
    });
    return "OK"

  }
  }
