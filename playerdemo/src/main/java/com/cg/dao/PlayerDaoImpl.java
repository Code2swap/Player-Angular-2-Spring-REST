package com.cg.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.cg.bean.Player;

@Repository
public class PlayerDaoImpl implements IPlayerDao {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	@Override
	public List<Player> getAllPlayers() {
		return mongoTemplate.findAll(Player.class);
	}

	@Override
	public Player getPlayerById(String playerId) {
		return mongoTemplate.findById(playerId, Player.class);
	}

	@Override
	public Player addNewPlayer(Player player) {
		mongoTemplate.save(player);
		return player;
	}

	@Override
	public Player deletePlayer(String playerId) {
		Player player = mongoTemplate.findById(playerId, Player.class);
		if(player != null)
			mongoTemplate.remove(player);
		return player;
	}

	@Override
	public Player updatePlayer(Player player) {
		mongoTemplate.save(player);
		return player;
	}

}
