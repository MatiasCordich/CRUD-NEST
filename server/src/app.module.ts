import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configOptions } from './config/config.options';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    TaskModule,
    ConfigModule.forRoot(configOptions),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory:async (ConfigService: ConfigService) => {
        const mongoConfig = ConfigService.get('mongo')

        return {uri: mongoConfig.uri}
      }
    }),
    CommonModule
  ]
})
export class AppModule {}
