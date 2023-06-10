import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRatingDto } from './create-rating.dto';


export class UpdateRatingDto extends PartialType(CreateRatingDto) {
    @ApiProperty({ required: false })
    rating: number;
}
