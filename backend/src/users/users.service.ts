import { BadRequestException, Delete, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt"


@Injectable()

export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>,
    ) {}

    //Crear un nuevo usuario
    async addUser(userData:Partial<User>):Promise<User>{
       
            const {password, confirmPass, ...rest} = userData

            //Validación de usuario existente 
            const user = await this.userRepository.findOneBy({id:rest.id})

            if(user){
                throw new BadRequestException("Usuario ya se encuentra registrado")
            }

            //Validar que todos los datos se encuentren diligenciados
            if(!rest.id || !rest.name || !rest.lastname || !rest.email || !rest.typeID || !rest.address || !rest.phone){
                throw new BadRequestException("Por favor diligenciar y verificar todos los datos")
            }

            //Validacion de contraseña existente
            if(!password){throw new BadRequestException("Contraseña requerida")}

            //Validación de password y confirmación
            if(password !== confirmPass){throw new BadRequestException("Las contraseñas no coinciden")}

            
        
            //Encriptación de la contraseña
            const hashedPass = await bcrypt.hash(password,10)

            const newUser = await this.userRepository.create({
                ...rest,
                password:hashedPass,
                confirmPass:hashedPass,
            })

            return await this.userRepository.save(newUser)
        
    }

    //Lista de usuarios
    async allUser(){

        const list = await this.userRepository.find()
        
        if(!list){
            throw new BadRequestException("Usuarios no registrados")
        }
        return list 
        
    }

    //Obtener un usuario espécifico
    async oneUser(id:number){
        try{
            const user = await this.userRepository.findOneBy({id})
            
            if(!user){throw new BadRequestException("Usuario no se encuentra registrado")}

            return user
        }
        catch{
            throw new BadRequestException("Error al encontrar usuario")
        }
    }

    //Cambiar datos de un usuario

    async changeUser(updateData:Partial<User>):Promise<User>{
        try{

            //Veridicar si el ussuario existe
            const user = await this.userRepository.findOneBy({id:updateData.id})
            if(!user){throw new BadRequestException("Usuario no se encuentra registrado")}

            // Validar contraseña si viene
            if (updateData.password) {
                
                if (updateData.password !== updateData.confirmPass) {
                    throw new BadRequestException("Las contraseñas no coinciden");
                }
                updateData.password = await bcrypt.hash(updateData.password, 10);
            }

            //Eliminar la confirmación de la contraseña
            delete(updateData.confirmPass)

            //Mezclar los datos
            const updateUser = await this.userRepository.merge(user, updateData) 

            return this.userRepository.save(updateUser)
            
        }
        catch{
            throw new BadRequestException("Error al actualizar dato(s)")
        }
    }

    //Logging (Acceso de cuenta)
    async loggingUser(loggingData:Partial<User>){
        
            //verificación de ususario
            
            if(!loggingData.email && !loggingData.phone){
                throw new BadRequestException("Se requiere correo electrónico o numero de telefono para ingresar")
            }

            if(!loggingData.password){
                throw new BadRequestException("La contraseña es requerida");
            }

            const whereCondition = loggingData.email ?{email:loggingData.email}:{phone:loggingData.phone}
            
            const userLog = await this.userRepository.findOne({where:whereCondition})
            
            if(!userLog){
                throw new BadRequestException("Usuario y/o contraseña incorrectas")
            }

            //Comparación de contraseña
           const isMatch = await bcrypt.compare(loggingData.password!, userLog.password!)
            if(!isMatch){
                throw new BadRequestException("Usuario y/o contraseña incorrectas")
            }

            return {message:"Ingreso exitoso. Bienvenido", name:loggingData.name +" "+loggingData.lastname, isMatch}
    }  

    //Eliminar usuario
    async deleteUser(id:number){
        try{
            const user = await this.userRepository.findOneBy({id})
            if(!user){
                throw new NotFoundException("Usuario no se encuentra registrado")
            }

            this.userRepository.delete(user)

            return "Usuario eliminado correctamente"    
        }
        catch{
            throw new BadRequestException("Error al eliminar ususario")
        }
    }
    
}

