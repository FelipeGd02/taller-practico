import { OrderEntity } from '../entities/order.entity';
import { OrderPriorityService } from './order-priority.service';
import { describe, it, expect } from '@jest/globals';

describe('OrderPriorityServiceTest', () => {
  const service = new OrderPriorityService();

  it('returns normal priority for a pending order with quantity 1', () => {
    const orderMock = { status: 'pending', quantity: 1 } as OrderEntity;
    expect(service.classify(orderMock).priority).toBe('normal');
  });

  it('returns medium priority for a pending order with quantity 3', () => {
    const orderMock = { status: 'pending', quantity: 3 } as OrderEntity;
    expect(service.classify(orderMock).priority).toBe('medium');
  });

  it('returns high priority for a pending order with quantity 4', () => {
    const orderMock = { status: 'pending', quantity: 4 } as OrderEntity;
    expect(service.classify(orderMock).priority).toBe('high');
  });

  it('returns completed priority for a ready order with quantity 5', () => {
    const orderMock = { status: 'ready', quantity: 5 } as OrderEntity;
    expect(service.classify(orderMock).priority).toBe('completed');
  });
});