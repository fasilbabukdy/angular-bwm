import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const exportMaterial = [MatButtonModule];
@NgModule({
  imports: [...exportMaterial],
  exports: [...exportMaterial]
})
export class MaterialModule {}
