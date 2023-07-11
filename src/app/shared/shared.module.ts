import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

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
    NzTableModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzGridModule,
    NzSelectModule,
  ],
})
export class SharedModule {}
