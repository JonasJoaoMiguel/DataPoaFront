import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class NomeLotacaoForm {

    constructor(private formBuilder: FormBuilder) { }

    public createForm(): FormGroup {
        return this.formBuilder.group({
            nome: this.formBuilder.control('', [])
        });
    }
}
