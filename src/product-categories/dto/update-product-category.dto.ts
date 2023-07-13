import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductCategoryDto } from './create-product-category.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateProductCategoryDto extends PartialType(
  CreateProductCategoryDto,
) {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
