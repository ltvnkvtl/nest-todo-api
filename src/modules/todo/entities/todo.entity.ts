import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column({ default: false })
  isCompleted: boolean;
}
