import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzMessageModule,
    NzLayoutModule,
  ],
})
export class SharedModule {}
