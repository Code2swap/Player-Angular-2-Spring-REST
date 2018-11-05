package com.cg.dao;

import java.util.List;

import com.cg.bean.Player;

public interface IPlayerDao {

	List<Player> getAllPlayers();

	Player getPlayerById(String playerId);

	Player addNewPlayer(Player player);
	
	Player deletePlayer(String playerId);

	Player updatePlayer(Player player);
}
