import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../pipes/pipes';

@NgModule({
  declarations: [ConvertToSpacesPipe, StarComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, ConvertToSpacesPipe, StarComponent],
})
export class SharedModule {}
