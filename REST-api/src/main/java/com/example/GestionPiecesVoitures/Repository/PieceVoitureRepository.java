package com.example.GestionPiecesVoitures.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.GestionPiecesVoitures.Model.PieceVoiture;

@Repository
public interface PieceVoitureRepository extends JpaRepository<PieceVoiture, Long> {
}
