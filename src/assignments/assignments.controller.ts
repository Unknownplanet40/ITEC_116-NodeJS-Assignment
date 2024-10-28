import { Controller, Get, Param } from '@nestjs/common';
import { json } from 'stream/consumers';

@Controller('assignments')
export class AssignmentsController {
//factorial function
    @Get('factorial/:n')
    factorial(@Param('n') n: number): any {
        if (isNaN(n) || n < 0) {
            throw new Error('You must provide a positive number (' + NaN + ')');
        }

        function fact(n: number): number {
            if (n === 0) {
                return 1;
            }
            return n * fact(n - 1);
        }

        return { "factorial": fact(n) };

    }

}
