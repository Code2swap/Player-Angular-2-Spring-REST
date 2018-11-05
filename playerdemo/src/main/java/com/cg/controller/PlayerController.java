package com.cg.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cg.bean.Player;
import com.cg.service.IPlayerService;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
//Access-Control-Allow-Credentials
@RestController
@RequestMapping(value = "/")
public class PlayerController {

	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	IPlayerService playerService;
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public List<Player> addNewPlayer(@RequestBody Player player) {
		logger.info("Player Added.");
		playerService.addNewPlayer(player);
		return playerService.getAllPlayers();
	}
	
	@RequestMapping(value = "/delete/{playerId}", method = RequestMethod.DELETE)
	public List<Player> deletePlayer(@PathVariable String playerId) {
		logger.info("Deleting Player: " + playerId);
		playerService.deletePlayer(playerId);
		return playerService.getAllPlayers();
	}
	
	@RequestMapping(value = "/update/", method = RequestMethod.PUT)
	public List<Player> updatePlayer(@RequestBody Player player) {
		logger.info("Player Updated.");
		playerService.updatePlayer(player);
		return playerService.getAllPlayers();
	}
	
	@RequestMapping(value = "/get/{playerId}", produces = "application/json", 
			method = RequestMethod.GET)
	public Player getPlayerByID(@PathVariable String playerId) {
		logger.info("Fething Player with Player ID: " + playerId);
		System.out.println("Getting player by Id: " + playerId);
		Player player = playerService.getPlayerById(playerId);
		System.out.println(player);
		return playerService.getPlayerById(playerId);
	}
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<Player> getAllPlayers() {
		logger.info("Getting All Players...");
		System.out.println("Players are displayed...");
		return playerService.getAllPlayers();
	}
}
