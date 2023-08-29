import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);


  public movimento = 
    {
      data: "",
      descricao: "",
      operacao: "",
      valor: 0
    };

  public movimentos: Array<{ data: string; descricao: string; operacao: string; valor: number }> = [];

  calcularSaldo(){
    let saldoTotal = 0;
    this.movimentos.forEach(item => {
      if (item.operacao == "credito"){
        saldoTotal += item.valor;
      } else {
        saldoTotal -= item.valor;
      }
      
    })
    return saldoTotal;
  }

  adicionar() {
    this.movimentos.push({
      data: this.movimento.data,
      descricao: this.movimento.descricao,
      operacao: this.movimento.operacao,
      valor: this.movimento.valor
    })
    this.movimento.data = ""
    this.movimento.descricao = ""
    this.movimento.operacao = ""
    this.movimento.valor = 0
  }

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
