import { RequestHandler } from 'express';
import { LinkInput } from '../@types/link';
import { LinkMeta } from '../db/model';
import _ from 'lodash';
import DatabaseService from './service';

class DatabaseController {

    getItem: RequestHandler = async (req, res) => {
        try {
            if (!_.isEmpty(req.query)) {
                throw new Error('Queries for this api is not acceptable')
            }
            if (req.params.input === '') {
                throw new Error('Provide a link');
            }
            const inputForService: LinkInput = {
                shortLink: req.params.input
            };
            const result: LinkMeta | null = await DatabaseService.getItem(inputForService);
            if (!result) {
                throw new Error('Couldn\'t find anything');            
            }
            return res.status(200).send({ originalLink: result.link });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: error.message } );
        }
    }

    setItem: RequestHandler = async (req, res) => {
        try {
            const { shortLink, link, date } = req.body;
            if (!shortLink || shortLink === '') {
                throw new Error('Provide a valid shortcut link');
            }

            if (!link || link === '') {
                throw new Error('Provide a valid link');
            }

            const inputForService: LinkInput = {
                shortLink,
                link,
                date
            };            
            const result: LinkMeta = await DatabaseService.setItem(inputForService);
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: error.message });
        }
    }
}

export default (new DatabaseController());