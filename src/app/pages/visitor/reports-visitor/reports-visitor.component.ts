import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { VacancieModel } from 'src/app/models/vacancie.model';
import { VacancieServiceService } from 'src/app/services/vacancieService/vacancie-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { UserModel } from 'src/app/models/user.model';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reports-visitor',
  templateUrl: './reports-visitor.component.html',
  styleUrls: ['./reports-visitor.component.css']
})
export class ReportsVisitorComponent implements OnInit {
  vacanciesList: VacancieModel[] = []; 
  vacanciesListFilterDate: VacancieModel[] = []; 
  usersListMU: UserModel[] = [];
  usersListMT: UserModel[] = [];
  usersMUCount: any; 
  usersMTCount: any;

  constructor(private vacancieService: VacancieServiceService, private userService: UserServiceService) { }

  ngOnInit(): void { 
    this.getVacanciesFilterTechnology();
    this.getVacanciesFilterDate();
    this.getUsersMUT();
  }

  filterTechnology() {
    const DATA: any = document.getElementById('htmlData');let doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'transparent',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_filterTechnology.pdf`);
      let refresh: any = window.location.reload()
      setTimeout(refresh, 1000);
    });
  }

  filterDate(){
    const DATA: any = document.getElementById('htmlData2');let doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'transparent',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_filterDate.pdf`);
      let refresh: any = window.location.reload()
      setTimeout(refresh, 1000);
    });
  }

  filterMindU(){
    const DATA: any = document.getElementById('htmlData3');let doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'transparent',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_filterMindU.pdf`);
      let refresh: any = window.location.reload()
      setTimeout(refresh, 1000);
    });
  }

  filterMindT(){
    const DATA: any = document.getElementById('htmlData4');let doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'transparent',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_filterMindT.pdf`);
      let refresh: any = window.location.reload()
      setTimeout(refresh, 1000);
    });
  }

  getVacanciesFilterTechnology(){
    this.vacancieService.getVacancies().subscribe(
      (data) => {
        this.vacanciesList = data;
        // const vacanciesFilterName = orderBy(this.vacanciesList, [(e: { technology: string; }) => e.technology.toLowerCase()], ['asc']);
        // console.log(vacanciesFilterName);
        var filterName = this.vacanciesList.sort((a,b) => a.technology!.localeCompare(b.technology!));
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  getVacanciesFilterDate(){
    this.vacancieService.getVacancies().subscribe(
      (data) => {
        this.vacanciesListFilterDate = data;
        var filterDate = this.vacanciesListFilterDate.sort((a,b) => a.date_vacancy!.localeCompare(b.date_vacancy!));
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  getUsersMUT(){
    this.userService.getUsers().subscribe(
      (data) => {
        this.usersListMU = data.filter(e => e.type_mind === 'Mind University');
        this.usersListMT = data.filter(e => e.type_mind === 'Mind Teams');
        this.usersMTCount = this.usersListMT.length;
        this.usersMUCount = this.usersListMU.length;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

}
