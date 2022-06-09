import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UsersTypeDTO {
  id?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
