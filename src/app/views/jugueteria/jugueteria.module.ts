import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';
import { ProductoDetalleModule } from '../../components/producto-detalle/producto-detalle.module';

import { JugueteriaRibbonModule } from './components/jugueteria-ribbon/jugueteria-ribbon.module';

import { JugueteriaComponent } from './jugueteria.component';
import { JugueteriaService } from './jugueteria.service';
import { JugueteriaRoutingModule } from './jugueteria-routing.module';
import { JugueteriaListadoComponent } from './jugueteria-listado/jugueteria-listado.component';
import { JugueteriaDetalleComponent } from './jugueteria-detalle/jugueteria-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    JugueteriaRoutingModule,
    
    TarjetasProductoModule,
    ProductoDetalleModule,
    
    JugueteriaRibbonModule,
  ],
  declarations: [
    JugueteriaComponent, 
    JugueteriaListadoComponent,
    JugueteriaDetalleComponent
  ],
  exports: [
    JugueteriaComponent,
    JugueteriaListadoComponent,
    JugueteriaDetalleComponent
  ],
  providers: [
    JugueteriaService,
  ]
})
export class JugueteriaModule {}