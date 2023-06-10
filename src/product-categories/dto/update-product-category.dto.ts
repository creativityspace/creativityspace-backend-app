import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductCategoryDto } from './create-product-category.dto';

export class UpdateProductCategoryDto extends PartialType(CreateProductCategoryDto) {
    @ApiProperty()
    name: string;
}
