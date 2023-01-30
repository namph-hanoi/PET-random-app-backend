import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        email: string;

    @Column()
        password: string;

    @Column()
        yolo: string;
}
