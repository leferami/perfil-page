import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  saveEditarPerfil(){
    console.log(this.form.value)
  }
 
  private  buildForm(){
    this.form = this.formBuilder.group({
        nombre:['',[Validators.required]],
        apellidos:['',[Validators.required]],
        mail_principal:['',[Validators.required]],
        tipo_usuario:['',[Validators.required]],
        edad:['',[Validators.required]],
        codigo_externo:['',[Validators.required]],
        telefono_celular:['',[Validators.required]],
        codigo:['',[Validators.required]],
        cedula:['',[Validators.required]],
        razon_social:['',[Validators.required]],
        direccion_principal:['',[Validators.required]],
        nombre_comercial:['',[Validators.required]],
        telefono_celular1:['',[Validators.required]],
        telefono_celular2:['',[Validators.required]],
        fecha_nacimiento:['',[Validators.required]],
        estado_civil:['',[Validators.required]],
        sexo:['',[Validators.required]]
    });
  }
}
