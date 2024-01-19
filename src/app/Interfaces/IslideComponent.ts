import {Component, Type} from "@angular/core";

export interface ISlideComponent {
    title : string,
    description : string,
    component ?: Type<Component>
}
