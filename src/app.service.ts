import { hostname } from 'node:os';

import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  async getHello(loopCount: number): Promise<string> {
    this.logger.log('getHello()');

    for (let i = 0; i < loopCount; i++) {
      console.log(i);
    }

    return 'Hello World!!! ' + hostname();
  }
}
