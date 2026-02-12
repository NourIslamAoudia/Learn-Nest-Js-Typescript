import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Perform validation logic here
    // For example, you can check if the value is a string and throw an error if it's not
    if (typeof value !== 'string') {
      throw new Error('Validation failed: value must be a string');
    }
    return value;
  }
}
