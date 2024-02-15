package com.example.GestionPiecesVoitures.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.GestionPiecesVoitures.Model.Vente;

@Repository
public interface VenteRepository extends JpaRepository<Vente, Long>{

}
