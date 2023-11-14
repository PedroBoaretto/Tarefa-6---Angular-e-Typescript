import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-drive',
  templateUrl: './form-template-drive.component.html',
  styleUrls: ['./form-template-drive.component.css']
})
export class FormTemplateDriveComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  nome: string = '';
  email: string = '';
  senha: string = '';

  onSubmit(form: any){}
}
