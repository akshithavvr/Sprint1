import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from "typeorm"
import { login } from "./login";
import { EmailActivationServices } from "./emailActivationService";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn("increment")
    id!:Number;

    @Column({
        length: 50,
        unique:true,
        nullable:false
    })
    EMAIL_ADDRESS!: string;

    @Column({
        length: 50,
        nullable:false
    
    })
    FIRSTNAME!: string;
    @Column({
        length: 50,
        nullable:false
    })
    LASTNAME!: string;

    
    @Column({
        length: 100,
        nullable: true
    })
    COMPANYNAME!: string;

    @Column({
        length: 50,
        nullable:true
    })
    POSITION!: string;
    @Column({
        length: 50,
        nullable:false
    })
    COUNTRY!: string;
    @Column({
        length: 50,
        nullable:false
    })
    USERTYPE!: string;

    @Column({
    
        nullable:false
    })
    IS_ISSUER!: Boolean;
    
    @Column({
    
        nullable:false
    })
    IS_INVESTOR!: Boolean;
    @Column({
    
        nullable:false
    })
    IS_ACTIVE!: Boolean;
    @Column({
    
        nullable:false
    })
    IS_BLOCKED!: Boolean;
   
   
}


