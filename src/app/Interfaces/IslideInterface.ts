import {Component, Type} from "@angular/core";

export interface IslideInterface {
    title : string,
    description : string,
    component ?: Type<Component>
}
