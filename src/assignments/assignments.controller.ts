import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get('prime/:n')
    getPrime(@Param('n') n: number): string {
        if (isNaN(n) || n < 1) {
            return 'You must provide a positive integer';
        }

        function isPrime(num: number): boolean {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return num > 1;
        }
        
        return JSON.stringify({
            isPrime: isPrime(n),
        });
    }
}
