import { Module } from '@nestjs/common';
import { OrderCreatedListener } from './listeners/order-created.listener';
import { OrdersService } from './orders.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule.forRoot({ global: true, wildcard: true })],
})
export class OrdersModule2 {}
