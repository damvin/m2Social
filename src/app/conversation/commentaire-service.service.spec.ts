import { TestBed, inject } from '@angular/core/testing';

import { CommentaireServiceService } from './commentaire-service.service';

describe('CommentaireServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentaireServiceService]
    });
  });

  it('should be created', inject([CommentaireServiceService], (service: CommentaireServiceService) => {
    expect(service).toBeTruthy();
  }));
});
