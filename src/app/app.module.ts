// eslint-disable-next-line max-classes-per-file
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveConfigModule } from '@deejayy/reactive-config';
import { RuntimeLocalizerModule } from '@deejayy/runtime-localizer';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ApiConnector } from '@deejayy/api-caller';
import { CustomApiConnector } from '@shared/service/custom-api-connector.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export class ConfigVars {
  public apiUrl!: string;
}

const languageFiles = [
  {
    lang: 'en-US',
    path: '/assets/messages/messages.en-US.json',
  },
  {
    lang: 'hu-HU',
    path: '/assets/messages/messages.hu-HU.json',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Angular 18 Bootstrap',
      maxAge: 200,
      logOnly: environment.production,
    }),
    ReactiveConfigModule.forRoot(ConfigVars, { configPath: environment.config }),
    RuntimeLocalizerModule.forRoot(languageFiles),
  ],
  providers: [{ provide: ApiConnector, useClass: CustomApiConnector }],
  bootstrap: [AppComponent],
})
export class AppModule {}
