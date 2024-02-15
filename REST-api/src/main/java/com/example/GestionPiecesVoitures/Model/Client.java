package com.example.GestionPiecesVoitures.Model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "client")
public class Client {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id_client")
	    private Long idClient;
	 
	 @Column(name = "nom_client")
	    private String nomClient;
	 
	 @Column(name = "telephon_client")
	    private Integer telephonClient;
	 public Client() {
		 
	 }
     public Client(Long idClient, String nomClient, Integer telephonClient) {
		this.idClient = idClient;
		this.nomClient = nomClient;
		this.telephonClient=telephonClient;
	}
	
	public Long getIdClient() {
		return idClient;
	}

	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}

	public String getNomClient() {
		return nomClient;
	}

	public void setNomClient(String nomClient) {
		this.nomClient = nomClient;
	}
	public Integer getTelephonClient() {
		return telephonClient;
	}
	public void setTelephonClient(Integer telephonClient) {
		this.telephonClient = telephonClient;
	}

	


}
