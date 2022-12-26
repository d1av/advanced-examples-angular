import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormControlName } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import { merge, mergeWith } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/types/usuario.types';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm!: FormGroup;
  usuario!: Usuario;
  formResult: string = '';

  validationMessages!: ValidationMessages;
  genericValidator!: GenericValidator;
  displayMessage: DisplayMessage = {};


  constructor(
    private fb: FormBuilder
  ) {
    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minlength: 'O Nome precisa ter no minimo 2 caracteres',
        maxlength: 'O Nome precisa ter no maximo 150 caracteres'
      },
      cpf: {
        required: 'O cpf é requerido',
      },
      email: {
        required: 'O email é requerido',
        email: 'O email é invalido'
      },
      senha: {
        required: 'A senha é requerido',
        minlength: 'O Nome precisa ter no minimo 2 caracteres',
        maxlength: 'O Nome precisa ter no maximo 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'A Confirmação de senha é requerido',
        minlength: 'O Nome precisa ter no minimo 2 caracteres',
        maxlength: 'O Nome precisa ter no maximo 15 caracteres'
      },
    }
    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[]= this.formInputElements
    .map((formControl:ElementRef)=> fromEvent(formControl.nativeElement, 'blur'));

    mergeWith(...controlBlurs).subscribe(()=>{
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    })
  }


  ngOnInit(): void {
    let senha = new FormControl('', Validators.required)

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.min(2), Validators.max(150)]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.min(6), Validators.max(15)]],
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
