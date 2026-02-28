import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './database/database.module';
import { UserModule } from './users/user.module';
import { TypeORMError } from 'typeorm';
import { ProductsModule } from './products/product.module';


@Module({
 imports:[
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    DataBaseModule,
    UserModule,
    ProductsModule
 ],
 controllers:[AppController],
 providers:[AppService]
})
export class AppModule {}
