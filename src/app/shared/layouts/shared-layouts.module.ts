import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseLayout } from './base/base.layout';
import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  declarations: [BaseLayout],
  imports: [CommonModule, RouterModule, SharedComponentsModule],
  exports: [BaseLayout]
})
export class SharedLayoutsModule {}
