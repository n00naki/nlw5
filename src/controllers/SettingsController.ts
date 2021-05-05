import { Request, Response } from "express";
import { SettingsService } from '../services/SettingsService';

class SettingsController {
    async create(req: Request, resp: Response) {

        const { chat, username } = req.body;

        const settingsService = new SettingsService();

        try {

            const settings = await settingsService.create({ chat, username });

            return resp.json(settings);

        } catch (error) {
            return resp.status(400).json({
                message: error.message
            });
        }

    }

    async findByUsername(req: Request, resp: Response){
        const { username } = req.params;

        const settingsService = new SettingsService();

        const settings = await settingsService.findByUsername(username);

        return resp.json(settings);
    }

    async update(req: Request, resp: Response){
        const { username } = req.params;
        const { chat } = req.body;

        const settingsService = new SettingsService();

        const settings = settingsService.update(username, chat);

        return resp.json(settings);
    }
}

export { SettingsController }