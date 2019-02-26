import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class PocForm {

    constructor(private formBuilder: FormBuilder) {}

    public createForm(): FormGroup {
        return this.formBuilder.group({
            id: this.formBuilder.control('', [])
        });
    }
}
