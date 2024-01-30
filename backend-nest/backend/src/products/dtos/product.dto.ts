import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  name: string;
}

export class UpdateProductDto {
  id: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  name: string;
}

export class DeleteProductDto {
  id: number;
}
