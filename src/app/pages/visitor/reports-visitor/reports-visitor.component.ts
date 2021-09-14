import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { VacancieModel } from 'src/app/models/vacancie.model';
import { VacancieServiceService } from 'src/app/services/vacancieService/vacancie-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reports-visitor',
  templateUrl: './reports-visitor.component.html',
  styleUrls: ['./reports-visitor.component.css']
})
export class ReportsVisitorComponent implements OnInit {
  vacanciesList: VacancieModel[] = []; 

  constructor(private vacancieService: VacancieServiceService) { }

  ngOnInit(): void { 
    this.getVacancies();
    // this.downloadPDF();
  }

  downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_filterName.pdf`);
    });
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

  getVacancies(){
    this.vacancieService.getVacancies().subscribe(
      (data) => {
        this.vacanciesList = data;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

}
