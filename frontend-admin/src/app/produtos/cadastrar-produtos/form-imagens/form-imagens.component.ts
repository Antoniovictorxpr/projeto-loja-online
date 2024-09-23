import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { GalleriaResponsiveOptions } from 'primeng/galleria';

@Component({
  selector: 'app-form-imagens',
  templateUrl: './form-imagens.component.html',
  styleUrls: ['./form-imagens.component.scss'],
  providers: [MessageService]
})
export class FormImagensComponent implements OnInit {

  @ViewChild('fileUpload') fileUpload!: FileUpload;

  uploadedFileName: string = '';
  uploadedImageUrl: string = '';  // URL da imagem para exibição
  imageData: string | ArrayBuffer | null = ''; // Variável local para armazenar o conteúdo da imagem
  responsiveOptions: GalleriaResponsiveOptions[]|undefined;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    console.log("Componente de formulário de imagens carregado!");
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropzone = event.target as HTMLElement;
    dropzone.classList.add('dragover');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropzone = event.target as HTMLElement;
    dropzone.classList.remove('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropzone = event.target as HTMLElement;
    dropzone.classList.remove('dragover');

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.uploadFiles(files);
    }
  }

  onUpload(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Upload completo',
      detail: `O arquivo ${event.files[0].name} foi carregado com sucesso!`
    });
  
    console.log('Arquivos carregados:', event.files);
  }

  uploadFiles(files: FileList) {
    const fileUpload = this.fileUpload as any;

    // Limpa arquivos anteriores
    fileUpload.files = [];

    // Adiciona arquivos ao FileUpload (não necessário para salvar localmente)
    for (let i = 0; i < files.length; i++) {
      fileUpload.files.push(files[i]);
    }

    // Salvar localmente em vez de upload
    this.readFiles(files);
  }

  readFiles(files: FileList) {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

    const file = files[0]; // Pega o primeiro arquivo
    if (!validImageTypes.includes(file.type)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro no upload',
        detail: `O arquivo ${file.name} não é uma imagem válida.`
      });
      return;
    }

    // Cria um FileReader para ler o arquivo
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageData = e.target?.result ?? null;  // Garante que 'undefined' seja tratado como 'null'
      this.uploadedImageUrl = URL.createObjectURL(file);  // URL para visualização local
    };
    reader.readAsDataURL(file);  // Lê o arquivo como base64

    this.uploadedFileName = file.name;
    this.messageService.add({
      severity: 'success',
      summary: 'Imagem carregada localmente',
      detail: `A imagem ${file.name} foi carregada com sucesso!`
    });

    console.log(file);
  }
}
