import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  titleEdit = '';
  loading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe((data: Album) => {
      this.album = data;
      this.titleEdit = data.title;
      this.loading = false;
    });
  }

  save(): void {
    const updated: Album = { ...this.album, title: this.titleEdit };

    this.albumService.updateAlbum(updated).subscribe((res: Album) => {
      this.album = res;
      alert('Saved!');
    });
  }
}