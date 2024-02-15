package com.example.GestionPiecesVoitures.Controller;

import java.time.LocalDate;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.GestionPiecesVoitures.Model.Vente;
import com.example.GestionPiecesVoitures.Service.VenteService;



@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping ("/Vente")

public class VenteController {
	
	@Autowired
	private VenteService venteservice;
	

	
	@GetMapping()
    public List<Vente> getAllSales() {
        return venteservice.getAllSales();
    }
	
	@PostMapping()
    public Vente addVente(@RequestBody Vente vente) {
        return venteservice.addVente(vente);
    }
	

	@PostMapping("/buy-piece/{idPiece}")
	
	public ResponseEntity<Vente> buyPiece(
			@PathVariable Long idPiece,
            @RequestParam int quantity,
            @RequestParam String paymentMethod,
            @RequestParam LocalDate saleDate,
            @RequestParam Long clientId
	) {
		try {
            ResponseEntity<Vente> sale = venteservice.buyPiece(idPiece, quantity, paymentMethod, saleDate, clientId);
            return sale;
        } catch (Exception e) {
            // Handle exceptions and return an appropriate HTTP status code
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
	}
}
