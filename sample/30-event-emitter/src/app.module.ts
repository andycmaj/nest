import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { OrdersModule2 } from './orders/orders.module.2';

@Module({
  imports: [
    EventEmitterModule.forRoot({ global: true, wildcard: true }),
    OrdersModule,
    OrdersModule2,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
