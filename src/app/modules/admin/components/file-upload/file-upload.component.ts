import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../../configs/app.config';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public fileUploadLink: String;

  constructor() { }

  ngOnInit() {
    this.fileUploadLink = AppConfig.endpoints.fileUpload;
    console.log(this.fileUploadLink);
  }

}
