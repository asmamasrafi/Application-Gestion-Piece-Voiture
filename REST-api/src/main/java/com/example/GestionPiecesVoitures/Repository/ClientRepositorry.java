package com.example.GestionPiecesVoitures.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GestionPiecesVoitures.Model.Client;

public interface ClientRepositorry extends JpaRepository<Client, Long>{

}
