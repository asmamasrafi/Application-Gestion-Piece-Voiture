package com.example.GestionPiecesVoitures.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.GestionPiecesVoitures.Model.Client;
import com.example.GestionPiecesVoitures.Model.PieceVoiture;
import com.example.GestionPiecesVoitures.Model.Vente;
import com.example.GestionPiecesVoitures.Repository.ClientRepositorry;
import com.example.GestionPiecesVoitures.Repository.PieceVoitureRepository;
import com.example.GestionPiecesVoitures.Repository.VenteRepository;

@Service
public class VenteService {
	
	// Interface repository pour effectuer des opérations sur l'entité Vente.
	@Autowired
	private VenteRepository venterepository ;
	
	@Autowired
    private PieceVoitureRepository pieceVoitureRepository;
	
	@Autowired
	private ClientRepositorry clientrepository;
	
	//JavaMailSender utilisé pour envoyer des notifications par e-mail
	@Autowired
	private JavaMailSender mailSender;
	
	public List<Vente> getAllSales() {
        return venterepository.findAll();
    }

    public Vente addVente(Vente vente) {
        // Implement any validation logic if needed
        return venterepository.save(vente);
    }
    
  public ResponseEntity<Vente>  buyPiece(Long idPiece, int quantity, String paymentMethod, LocalDate saleDate, Long clientId) {
        PieceVoiture pieceVoiture = pieceVoitureRepository.findById(idPiece).orElse(null);

        if (pieceVoiture != null) {
            int currentQuantity = pieceVoiture.getQuantitePiece();

            if (currentQuantity >= quantity) {
                pieceVoiture.setQuantitePiece(currentQuantity - quantity);

                if ((currentQuantity - quantity )<= 10) {
                    // Send an email notification
                    sendLowStockNotification(pieceVoiture);
                }

                pieceVoitureRepository.save(pieceVoiture);

             // Calculate the amount
                BigDecimal price = pieceVoiture.getPrixPiece();
                BigDecimal amount = price.multiply(BigDecimal.valueOf(quantity));

                // Create a Sale entity
                Vente sale = new Vente();
                sale.setPiece(pieceVoiture);
                sale.setQuantity(quantity);
                sale.setPaymentMethod(paymentMethod);
                sale.setSaleDate(saleDate);
                sale.setAmount(amount);

                // Retrieve the client from the database and set it in the Sale entity
                Client client = clientrepository.findById(clientId).orElse(null);
                sale.setClient(client);

                // Save the Sale entity
              Vente savedSale= venterepository.save(sale);
              
                return new ResponseEntity<>(savedSale, HttpStatus.OK);
                
            }
        }
        return ResponseEntity.badRequest().build();
        // Return null if the purchase cannot be completed (e.g., not enough stock).
    }
    
  
    private void sendLowStockNotification(PieceVoiture pieceVoiture) {
        // Create and send an email notification
    	
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("asmamasrafi.2004@gmail.com"); // Set the recipient's email address
        message.setSubject("Low Stock Notification");
        message.setText("Low stock for car part: " + pieceVoiture.getNomPiece());

        mailSender.send(message); // Send the email notification
    }
}
