import Link, { LinkMeta } from '../db/model';
import { LinkInput } from '../@types/link';

class DatabaseService {

    async getItem(input: LinkInput): Promise<LinkMeta | null> {
        const item: LinkMeta | null = await Link.findOne(input);
        return item;
    }

    async setItem(input: LinkInput): Promise<LinkMeta> {
        const newLink = new Link(input);
        return await newLink.save();
    }

}

export default (new DatabaseService());