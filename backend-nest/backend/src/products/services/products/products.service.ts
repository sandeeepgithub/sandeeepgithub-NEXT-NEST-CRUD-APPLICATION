import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entity/Products';
import { ProductTypes } from 'src/products/types/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  getAllProducts() {
    return this.productRepository.find();
  }

  createProduct(imagUrl: string, product: ProductTypes) {
    const newProduct = this.productRepository.create({
      images: imagUrl,
      ...product,
    });
    return this.productRepository.save(newProduct);
  }

  editProduct(id: number, product: ProductTypes) {
    const newProduct = this.productRepository.update({ id }, { ...product });

    return newProduct;
  }

  deleteProduct(id: number) {
    const newProduct = this.productRepository.delete({ id });

    return newProduct;
  }
}
