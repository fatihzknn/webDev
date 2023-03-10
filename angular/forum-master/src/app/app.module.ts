import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserTableService } from './user-table/user-table.service';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UserTableComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserTableService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
