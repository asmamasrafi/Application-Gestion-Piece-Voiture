package com.example.GestionPiecesVoitures.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.example.GestionPiecesVoitures.Model.PieceVoiture;
import com.example.GestionPiecesVoitures.Service.PieceVoitureService;

import java.util.List;


@CrossOrigin(value="http://localhost:3000")
@RestController
@RequestMapping("/pieces_voiture")
public class PieceVoitureController {

    @Autowired
    private PieceVoitureService pieceVoitureService;

    @GetMapping()
    public List<PieceVoiture> getAllPieces() {
        return pieceVoitureService.getAllPieces();
    }

    @GetMapping("{idPiece}")
    public PieceVoiture getPieceById(@PathVariable Long idPiece) {
        return pieceVoitureService.getPieceById(idPiece);
    }

    @PostMapping()
    public PieceVoiture addPiece(@RequestBody PieceVoiture pieceVoiture) {
        return pieceVoitureService.addPiece(pieceVoiture);
    }

    @PutMapping("{idPiece}")
    public PieceVoiture updatePiece(@PathVariable Long idPiece, @RequestBody PieceVoiture pieceVoiture) {
        return pieceVoitureService.updatePiece(idPiece, pieceVoiture);
    }

    @DeleteMapping("{idPiece}")
    public void deletePiece(@PathVariable  Long idPiece) {
        pieceVoitureService.deletePiece(idPiece);
    }
    
    
}
