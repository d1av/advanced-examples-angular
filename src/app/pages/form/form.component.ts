import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/shared/types/usuario.types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cadastroForm!: FormGroup;
  usuario!: Usuario;
  formResult: string = '';

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    })
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
      this.formResult = JSON.stringify(this.usuario)
      console.log(this.usuario)
    } else {
      this.formResult = "Não submeteu"
    }
  }



}
