import { Injectable, InternalServerErrorException } from '@nestjs/common';
import Metadata from './metadata';
import { dynamoDB } from './dynamodb';

@Injectable()
export class AppService {
    async getMetadata(id: string): Promise<Metadata | null> {
        try {
            const results = await dynamoDB
                .get({
                    TableName: 'KawaiiMetadata',
                    Key: { id },
                })
                .promise();

            if (!results.Item) {
                return null;
            }

            return results.Item as Metadata;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}
