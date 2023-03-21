import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Timestamp, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User";

@Entity()
export class EmailActivationServices {
    @PrimaryColumn()
    user_id!: number;
    @Column({
        length: 100,
        nullable:false,
        unique:true
    })
    UNIQUE_CODE!: string;
    
    @Column({
        nullable:false,
      
    })
    LINK_ENDTIME!: Date;
  
@OneToOne(()=> User)
@JoinColumn()
User!:User
    
}


