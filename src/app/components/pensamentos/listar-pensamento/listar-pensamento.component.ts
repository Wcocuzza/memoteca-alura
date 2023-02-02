import { PensamentoService } from './../../../services/pensamento.service';
import { IPensamento } from './../pensamento/IPensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Array<IPensamento> = [];

  constructor(
    private service: PensamentoService
  ) { }

    ngOnInit(): void {
        this.service.listar().subscribe((listaPensamentos) => {
          this.listaPensamentos = listaPensamentos;
        })
    }

}
