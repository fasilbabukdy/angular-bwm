import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

const exportMaterial = [MatButtonModule, MatToolbarModule];
@NgModule({
  imports: [...exportMaterial],
  exports: [...exportMaterial]
})
export class MaterialModule {}
