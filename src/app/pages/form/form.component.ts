import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor() {

  }


  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('')
    })
  }

  adicionarUsuario() {
    let x = this.cadastroForm.value;
    console.log(x)
  }



}
