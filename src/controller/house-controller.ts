import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { House } from "../entity/house"

export class HouseController {

    private houseRepository = AppDataSource.getRepository(House)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.houseRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const house = await this.houseRepository.findOne({
            where: { id }
        })

        if (!house) {
            return "house not found"
        }
        return house
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, desc, price, post_code } = request.body;

        const house = Object.assign(new House(), {
            name,
            desc,
            price,
            post_code
        })

        return this.houseRepository.save(house)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.houseRepository.findOneBy({ id })

        if (!userToRemove) {
            return "house not exist"
        }

        await this.houseRepository.remove(userToRemove)

        return "house has been removed"
    }

}