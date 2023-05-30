import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { House } from "../entity/house.entity"

export class HouseController {

    private houseRepository = AppDataSource.getRepository(House)

    async getSkipAndTake(request: Request, response: Response, next: NextFunction) {
        const skip = request.query.skip;
        const take = request.query.take;

        const data = await this.houseRepository.find({skip, take, order: {id: 'ASC'}})

        const res = {
            payload: data,
            count: data.length
        }

        return res
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

    async update(request: Request, response: Response, next: NextFunction) {
        const { id, name, desc, price, post_code } = request.body;

        const house = Object.assign(new House(), {
            id,
            name,
            desc,
            price,
            post_code
        })

        return this.houseRepository.save(house)
    }

    async getPostCode(request: Request, response: Response, next: NextFunction) {
        const data = await this.houseRepository.createQueryBuilder().
                                                select(['a.post_code']).
                                                from(House, 'a').
                                                getMany();

        const res = {
            payload: data,
            count: data.length
        }

        return res
    }

    async getPostCodeAvg(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const data = await this.houseRepository.createQueryBuilder().
                                                select(['a.price']).
                                                from(House, 'a').
                                                orderBy('a.price', 'ASC').
                                                getMany();

        const sum = data.reduce((sum, current) => sum + current.price, 0);
        const avg = sum / data.length;

        let median = 0;
        if (data.length % 2 == 0) {
            median = (data[data.length / 2].price + data[(data.length / 2) - 1].price) / 2;
        } else {
            median = data[Math.floor(data.length / 2)].price;
        }

        const res = {
            payload: {
                average: avg,
                median: median
            }
        }

        return res
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