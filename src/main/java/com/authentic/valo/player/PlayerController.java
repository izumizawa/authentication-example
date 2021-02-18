package com.authentic.valo.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/players")
public class PlayerController {

    // Controller -> Service -> Repository
    private final PlayerService playerService;

    @Autowired
    public PlayerController (PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/id/{playerId}")
    public Player getPlayerByPlayerId(@PathVariable("playerId") UUID playerId){
        return playerService.getPlayerByPlayerId(playerId);
    }

    @GetMapping("/username/{username}")
    public Player getPlayerByUsername(@PathVariable("username") String username){
        return playerService.getPlayerByUsername(username);
    }

    @PostMapping
    public Player insertPlayer(@RequestBody Player player){
        return playerService.insertPlayer(player);
    }

    @DeleteMapping("/{playerId}")
    public void deletePlayer(@PathVariable("playerId") UUID playerId) {
        playerService.deletePlayer(playerId);
    }
}
