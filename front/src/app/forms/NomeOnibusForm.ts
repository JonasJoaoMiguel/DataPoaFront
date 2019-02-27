import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class NomeOnibusForm {

    constructor(private formBuilder: FormBuilder) { }

    public createForm(): FormGroup {
        return this.formBuilder.group({
            nome: this.formBuilder.control('', [])
        });
    }
}
