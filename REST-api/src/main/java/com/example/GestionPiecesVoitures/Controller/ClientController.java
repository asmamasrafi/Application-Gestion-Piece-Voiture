package com.example.GestionPiecesVoitures.Controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.example.GestionPiecesVoitures.Model.Client;

import com.example.GestionPiecesVoitures.Service.ClientService;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping ("/Client")

public class ClientController {
	
	@Autowired
	private ClientService clientservice;
	
	@GetMapping()
    public List<Client> getAllClient() {
        return clientservice.getAllClient();
    }
	
	@PostMapping()
    public Client addClient(@RequestBody Client client) {
        return clientservice.addClient(client);
    }
	
	
}
