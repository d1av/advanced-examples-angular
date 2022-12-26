import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }


  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    })
  }

  adicionarUsuario() {
    let x = this.cadastroForm.value;
    console.log(x)
  }



}
