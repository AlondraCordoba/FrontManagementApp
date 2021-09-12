import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reports-visitor',
  templateUrl: './reports-visitor.component.html',
  styleUrls: ['./reports-visitor.component.css']
})
export class ReportsVisitorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }

  filterName(){
    let docDefinition = {  
      header: 'Name',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog',
    };  
  
    pdfMake.createPdf(docDefinition).open();  
  }

  filterDate(){
    let docDefinition = {  
      header: 'Date',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog',
    };  
  
    pdfMake.createPdf(docDefinition).open();  
  }

  filterMindU(){
    let docDefinition = {  
      header: 'Mind University',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog',
    };  
  
    pdfMake.createPdf(docDefinition).open();  
  }

  filterMindT(){
    let docDefinition = {  
      header: 'Mind Teams',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog',
    };  
  
    pdfMake.createPdf(docDefinition).open();  
  }

}
