import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
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
    let senha = new FormControl('', Validators.required)

    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['',[Validators.required, Validators.min(6),Validators.max(15)]],
      senhaConfirmacao: ['', [Validators.required, Validators.min(6), Validators.max(15)]]
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
