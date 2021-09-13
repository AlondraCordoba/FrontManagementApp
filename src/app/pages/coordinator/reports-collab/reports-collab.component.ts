import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { VacancieModel } from 'src/app/models/vacancie.model';
import { VacancieServiceService } from 'src/app/services/vacancieService/vacancie-service.service';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-reports-collab',
  templateUrl: './reports-collab.component.html',
  styleUrls: ['./reports-collab.component.css']
})
export class ReportsCollabComponent implements OnInit {
  vacanciesList: VacancieModel[] = []; 
  vacanciesCount: any; 

  constructor(private vacancieService: VacancieServiceService, ) { }

  ngOnInit(): void { 
  }

  filterName(){
    let docDefinition = {  
      content: [
        {  
          text: 'Name',  
          style: 'sectionHeader'  
      }, 
      ]
    };  
  
    pdfMake.createPdf(docDefinition).open();  
  }

  filterDate(){
    let docDefinition = {  
      content: [
        {  
          text: 'Date',  
          style: 'sectionHeader'  
      }, 
      ]
    };  
  
    pdfMake.createPdf(docDefinition).open();  
  }

  filterMindU(){
    let docDefinition = {  
      content: [
        {  
          text: 'Mind University',  
          style: 'sectionHeader'  
      }, 
      ]
    };  

    pdfMake.createPdf(docDefinition).open();  
  }

  filterMindT(){
    let docDefinition = {  
      content: [
        {  
          text: 'Mind Teams',  
          style: 'sectionHeader'  
      }, 
      ]
    };  

    pdfMake.createPdf(docDefinition).open();  
  }

}