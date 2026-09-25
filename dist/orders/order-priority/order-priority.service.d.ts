import { OrderEntity } from '../entities/order.entity';
export interface OrderPriorityResult {
    priority: 'completed' | 'high' | 'medium' | 'normal';
    message: string;
}
export declare class OrderPriorityService {
    classify(order: OrderEntity): OrderPriorityResult;
}
