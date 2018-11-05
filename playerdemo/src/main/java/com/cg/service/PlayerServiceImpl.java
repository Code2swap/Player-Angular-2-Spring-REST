package com.cg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.bean.Player;
import com.cg.dao.IPlayerDao;

@Service
public class PlayerServiceImpl implements IPlayerService {

	@Autowired
	private IPlayerDao playerDao;
	
	@Override
	public List<Player> getAllPlayers() {
		return playerDao.getAllPlayers();
	}

	@Override
	public Player getPlayerById(String playerId) {
		return playerDao.getPlayerById(playerId);
	}

	@Override
	public Player addNewPlayer(Player player) {
		return playerDao.addNewPlayer(player);
	}

	@Override
	public Player deletePlayer(String playerId) {
		return playerDao.deletePlayer(playerId);
	}

	@Override
	public Player updatePlayer(Player player) {
		return playerDao.updatePlayer(player);
	}

}
