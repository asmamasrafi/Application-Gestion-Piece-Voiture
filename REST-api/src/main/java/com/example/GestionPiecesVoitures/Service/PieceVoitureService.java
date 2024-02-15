package com.example.GestionPiecesVoitures.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.GestionPiecesVoitures.Model.PieceVoiture;
import com.example.GestionPiecesVoitures.Repository.PieceVoitureRepository;

import java.util.List;

@Service
public class PieceVoitureService {

    @Autowired
    private PieceVoitureRepository pieceVoitureRepository;

	
	
    public List<PieceVoiture> getAllPieces() {
        return pieceVoitureRepository.findAll();
    }

    public PieceVoiture getPieceById(Long idPiece) {
        return pieceVoitureRepository.findById(idPiece).orElse(null);
    }

    public PieceVoiture addPiece(PieceVoiture pieceVoiture) {
        return pieceVoitureRepository.save(pieceVoiture);
    }

    public PieceVoiture updatePiece(Long idPiece, PieceVoiture updatedPiece) {
        PieceVoiture existingPiece = pieceVoitureRepository.findById(idPiece).orElse(null);
        if (existingPiece != null) {
            existingPiece.setNomPiece(updatedPiece.getNomPiece());
            existingPiece.setFabricant(updatedPiece.getFabricant());
            existingPiece.setQuantitePiece(updatedPiece.getQuantitePiece());
            existingPiece.setPrixPiece(updatedPiece.getPrixPiece());
            return pieceVoitureRepository.save(existingPiece);
        }
        return null;
    }
   

    public void deletePiece(Long idPiece) {
        pieceVoitureRepository.deleteById(idPiece);
    }
    
    
    
    




}

