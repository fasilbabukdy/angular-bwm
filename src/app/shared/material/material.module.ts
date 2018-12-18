import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule } from '@angular/material';

const exportMaterial = [MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule];
@NgModule({
  imports: [...exportMaterial],
  exports: [...exportMaterial]
})
export class MaterialModule {}
