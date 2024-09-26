import { Controller, Get, Req, Post, HttpCode } from '@nestjs/common';
import { time } from 'console';
import { Request } from 'express';


@Controller('cats')
export class CatsController {
    
    @Post()
    @HttpCode(201)
    create(): string {
        return ('this route creates something...');
    }
    
    @Get()
    async findAll(@Req() request: Request): Promise<any[]> {

        return [];
    }
}
