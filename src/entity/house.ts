import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "house"})
export class House {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    desc: string

    @Column()
    price: number

    @Column()
    post_code: string

}
