import { DataSource } from "typeorm"

const databaseProviders = [{
    provide:'DATA_SOURCE',
    useFactory: async() =>{
        const datasource = new DataSource({
            type:"postgres",
            host:process.env.DB_HOST,
            port:parseInt(process.env.DB_PORT!, 10),
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_NAME,
            entities:[__dirname+'/../**/*/entities{.ts,.js}'],
            synchronize:true
        })
        return datasource.initialize()
    }

}]