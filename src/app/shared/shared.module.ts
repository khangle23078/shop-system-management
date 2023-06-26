import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageServiceModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzMessageServiceModule,
  ],
})
export class SharedModule {}
