import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreCompleto: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  mensaje: string;
}
export class CreateUserDto {
  nombreCompleto: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

