import { Route, ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../../../services/pensamento.service';
import { IPensamento } from './../pensamento/IPensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

    pensamento: IPensamento = {
      id: 0,
      conteudo: '',
      autoria: '',
      modelo: ''
    }

    constructor(
      private serice: PensamentoService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.serice.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
      })
    }

    editarPensamento() {

    }

    cancelar() {

    }

}
