import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'appId' }), RendererModule.forRoot(), TransferHttpCacheModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
