package com.example.GestionPiecesVoitures.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.GestionPiecesVoitures.Repository.ClientRepositorry;
import com.example.GestionPiecesVoitures.Model.Client;

@Service
public class ClientService {

	@Autowired
	private ClientRepositorry clientrepository;
	
	public List<Client> getAllClient(){
		return clientrepository.findAll();
}
	public Client addClient(Client client){
		return  clientrepository.save(client);
}
	
}
