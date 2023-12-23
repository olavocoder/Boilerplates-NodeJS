import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

//Teste de criacao de controllers para apis
@Controller('produtos')
export class ProdutosController {
  @Post()
  create(): string {
    return 'Esta ação pega um produto';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return `<h1>Isso é uma ação que retorna um produto ${request.query.name}<h1>`;
  }
}
