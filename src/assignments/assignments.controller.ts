import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get('fibonacci/:n')
    fibonacci(@Param('n') n: string): { sequence: number[] } {
        const num = parseInt(n, 10);

        if (isNaN(num) || num <= 0) {
            throw new Error('Parameter should be a positive integer.');
        }

        return { sequence: this.calculateFibonacci(num) };
    }

    private calculateFibonacci(n: number): number[] {
        const fiboseq = [];
        let a = 0, b = 1, temp;

        for (let i = 0; i < n; i++) {
            fiboseq.push(a);
            temp = a;
            a = b;
            b = temp + b;
        }

        return fiboseq;
    }
}
