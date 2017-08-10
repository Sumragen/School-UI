/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {DateFormatPipe} from './date-format.pipe';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [DropdownDirective]
})
export class SharedModule {
}
