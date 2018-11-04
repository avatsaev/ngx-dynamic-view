import {Type} from '@angular/core';

export class DynamicViewPlaceholder<T> {

    constructor(public component: Type<T>, public params?: {
        inputs?: {[D in keyof T]?: T[D]},
        outputHandlers?: {
            [D in keyof T]?: Function
        },
        message?: string
    }) {}

}
