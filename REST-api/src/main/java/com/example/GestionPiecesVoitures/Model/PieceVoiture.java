package com.example.GestionPiecesVoitures.Model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pieces_voiture")
public class PieceVoiture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_piece")
    private Long idPiece;

    @Column(name = "nom_piece")
    private String nomPiece;

    @Column(name = "fabricant")
    private String fabricant;

    @Column(name = "quantite_piece")
    private int quantitePiece;

    @Column(name = "prix_piece")
    private BigDecimal prixPiece;

	public PieceVoiture(String nomPiece, String fabricant, int quantitePiece, BigDecimal prixPiece) {
		this.nomPiece = nomPiece;
		this.fabricant = fabricant;
		this.quantitePiece = quantitePiece;
		this.prixPiece = prixPiece;
	}

	public PieceVoiture() {

		// TODO Auto-generated constructor stub
	}

	public Long getIdPiece() {
		return idPiece;
	}

	public void setIdPiece(Long idPiece) {
		this.idPiece = idPiece;
	}

	public String getNomPiece() {
		return nomPiece;
	}

	public void setNomPiece(String nomPiece) {
		this.nomPiece = nomPiece;
	}

	public String getFabricant() {
		return fabricant;
	}

	public void setFabricant(String fabricant) {
		this.fabricant = fabricant;
	}

	public int getQuantitePiece() {
		return quantitePiece;
	}

	public void setQuantitePiece(int quantitePiece) {
		this.quantitePiece = quantitePiece;
	}

	public BigDecimal getPrixPiece() {
		return prixPiece;
	}

	public void setPrixPiece(BigDecimal prixPiece) {
		this.prixPiece = prixPiece;
	}

    
    
}