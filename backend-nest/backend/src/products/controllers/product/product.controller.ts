import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UploadedFile,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  DeleteProductDto,
  ProductDto,
  UpdateProductDto,
} from 'src/products/dtos/product.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './images',
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
        },
      }),
    }),
  )
  @UsePipes(new ValidationPipe())
  createProduct(
    @Body() product: ProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = file.filename;

    return this.productsService.createProduct(imageUrl, product);
  }

  @Patch()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './images',
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
        },
      }),
    }),
  )
  @UsePipes(new ValidationPipe())
  editProduct(
    @Body() product: UpdateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const updatedProduct = { ...product, images: file.filename };

    return this.productsService.editProduct(product.id, updatedProduct);
  }

  @Delete()
  deleteProduct(@Body() product: DeleteProductDto) {
    return this.productsService.deleteProduct(product.id);
  }
}
