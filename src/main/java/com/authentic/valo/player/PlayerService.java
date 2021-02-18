package com.authentic.valo.player;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PlayerService {

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    private final PlayerRepository playerRepository;


    public Player insertPlayer(Player player) {
        Player playerFound = null;
        if (playerRepository.findByUsername(player.getUsername()).isPresent()) {
            playerFound = playerRepository.findByUsername(player.getUsername()).get();
        }
        if (playerFound == null) {
            if (player.getPassword().length() > 20 | player.getPassword().length() < 6) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password must have at least 6 characters and less than 20.");
            }
            if (player.getUsername().length() == 0 | player.getUsername().length() < 4) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username cannot be null and should be at least 4 characters.");
            }
            UUID newPlayerId = UUID.randomUUID();
            Player newPlayer = new Player(player);
            newPlayer.setPlayerId(newPlayerId);
            return playerRepository.save(newPlayer);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already taken. Please choose another one.");
        }
    }

    public Player getPlayerByPlayerId(UUID playerId) {
        return playerRepository.findById(playerId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player ID not found."));
    }

    public Player getPlayerByUsername(String username) {
        return playerRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Player username not found."));
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public void deletePlayer(UUID playerId) {
        try {
            playerRepository.deleteById(playerId);
        } catch (EmptyResultDataAccessException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Player ID not found. Try a valid one.");
        }
    }

    public Player patchPlayerPropertyByPlayerId(UUID playerId, Player player) {
        Optional<Player> optionalPlayer = playerRepository.findById(playerId);
        if (optionalPlayer.isPresent()) {
            Player auxPlayer = optionalPlayer.get();
            if (StringUtils.isNotBlank(player.getUsername()))
                auxPlayer.setUsername(player.getUsername());
            if (StringUtils.isNotBlank(player.getPassword()))
                auxPlayer.setPassword(player.getPassword());
            return playerRepository.save(auxPlayer);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_EXTENDED, "Player not found.");
        }
    }
}
