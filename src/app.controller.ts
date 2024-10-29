import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('loop-count') loopCount: string): Promise<string> {
    return this.appService.getHello(loopCount ? Number(loopCount) : 10);
  }
}
