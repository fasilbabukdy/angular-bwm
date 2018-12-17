import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';

const exportMaterial = [MatButtonModule, MatToolbarModule, MatInputModule];
@NgModule({
  imports: [...exportMaterial],
  exports: [...exportMaterial]
})
export class MaterialModule {}
