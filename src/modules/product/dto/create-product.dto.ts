import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product name will be displayed in product data',
    example: 'Shampoo Treseme',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Product description will be displayed in product data',
    example: 'Shampoo hidratação profunda',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description:
      'Product value will be displayed in product data, this field represents the value in cents',
    example: 100000,
  })
  @IsNumber()
  value: number;

  @ApiProperty({
    description: 'Product quantity will be displayed in product data',
    example: 5,
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    description:
      'Product logo will be displayed in product data, this field is a url from image src',
    example: 'https://m.media-amazon.com/images/I/31wIIbQPWNS._AC_.jpg',
  })
  @IsOptional()
  @IsString()
  logo: string;
}
