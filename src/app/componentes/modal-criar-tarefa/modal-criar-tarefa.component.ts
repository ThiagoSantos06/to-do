import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-criar-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './modal-criar-tarefa.component.html',
  styleUrl: './modal-criar-tarefa.component.css'
})
export class ModalCriarTarefaComponent {
  ngOnInit() {
    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
      exampleModal.addEventListener('show.bs.modal', (event:any) => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput:any = exampleModal.querySelector('.modal-body input')
        
        modalBodyInput.value = recipient
      })
    }
  }
}
