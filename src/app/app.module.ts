import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './share/map/map.component';
import { ReferencesComponent } from './share/references/references.component';
import { SlideHomepageComponent } from './share/slide-homepage/slide-homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ListProduitComponent } from './boutique/list-produit/list-produit.component';
import { ProduitComponent } from './boutique/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BoutiqueComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    MapComponent,
    ReferencesComponent,
    SlideHomepageComponent,
    ListProduitComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
