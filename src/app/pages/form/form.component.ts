import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/shared/types/usuario.types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cadastroForm!: FormGroup;
  usuario!: Usuario;

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
    this.usuario = Object.assign({},this.usuario,this.cadastroForm.value)
    console.log(this.usuario)
  }



}
