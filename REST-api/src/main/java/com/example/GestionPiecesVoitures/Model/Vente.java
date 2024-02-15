package com.example.GestionPiecesVoitures.Model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Vente {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@ManyToOne
    @JoinColumn(name = "id_piece")
    private PieceVoiture piece;
	
	 @Column(name = "quantity")
	private int quantity;

	 @Column(name = "paymentMethod")
    private String paymentMethod; // Payment method

	 @Column(name = "saleDate")
    private LocalDate saleDate; // Date of the sale

	 @Column(name = "amount")
    private BigDecimal amount; // Sale amount

    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;

    public Vente() {}
	public Vente(Long id, PieceVoiture piece, int quantity, String paymentMethod, LocalDate saleDate, BigDecimal amount,
			Client client) {
		
		this.id = id;
		this.piece = piece;
		this.quantity = quantity;
		this.paymentMethod = paymentMethod;
		this.saleDate = saleDate;
		this.amount = amount;
		this.client = client;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public PieceVoiture getPiece() {
		return piece;
	}

	public void setPiece(PieceVoiture piece) {
		this.piece = piece;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public LocalDate getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(LocalDate saleDate) {
		this.saleDate = saleDate;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}
    
    
    
}
