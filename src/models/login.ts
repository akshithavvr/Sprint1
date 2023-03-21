import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Timestamp, OneToOne, JoinColumn } from "typeorm"

import { User } from "./User";

@Entity()
export class login {
    @PrimaryColumn()
  id!: number; 

    @Column({
        length: 200,
        nullable:false,
        unique:true
    })
    SESSION_ID!: string;
    
    @Column({
        nullable:false,
    })
    LOGIN_TIME!: Date;

    @Column({
        
        nullable:false,
       
    })
    SESSION_ACTIVE!: Boolean;

    @OneToOne(()=> User)
    @JoinColumn()
    User!:User

    
    
}


