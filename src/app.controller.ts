import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { AppService } from './app.service';
import Metadata from './metadata';

@Controller('api/metadata')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/:tokenId')
    async getMetadata(@Param('tokenId') tokenId: string): Promise<Metadata> {
        const metadata = await this.appService.getMetadata(tokenId);

        if (!metadata) {
            throw new NotFoundException();
        }

        return metadata;
    }
}
