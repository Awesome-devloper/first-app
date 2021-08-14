import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective {

    constructor() { }
    // ngOnInit(): void {
    // this.className = '';
    // }
    // @HostBinding('class') className!: string;
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') Onlick() {
        // this.className = this.className == '' ? 'open' : '';
        this.isOpen = !this.isOpen;
    }
}