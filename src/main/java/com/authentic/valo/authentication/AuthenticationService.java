package com.authentic.valo.authentication;

import com.authentic.valo.player.Player;
import com.authentic.valo.player.PlayerRepository;
import com.authentic.valo.player.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
public class AuthenticationService {

    private final PlayerService playerService;
    private final PlayerRepository playerRepository;

    @Autowired
    public AuthenticationService(PlayerService playerService, PlayerRepository playerRepository) {
        this.playerService = playerService;
        this.playerRepository = playerRepository;
    }

    public void loginAuthentication(LoginDTO loginDTO) {
        try {
            Player player = playerService.getPlayerByUsername(loginDTO.getUsername());
            if (!player.getPassword().equals(loginDTO.getPassword())) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN);
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid login data. Try again later.");
        }
    }

    public void pswValidation(UUID playerId, PasswordDTO passwordDTO) {
        try {
            Player player = playerService.getPlayerByPlayerId(playerId);
            if (!player.getPassword().equals(passwordDTO.getPassword())) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN);
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid data. Try again later.");
        }
    }

    public void changePassword(UUID playerId, PasswordDTO passwordDTO) {
        Player player = playerService.getPlayerByPlayerId(playerId);
        if (passwordDTO.getPassword().length() > 20 | passwordDTO.getPassword().length() < 6)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password must have at least 6 characters and less than 20.");
        else if (player.getPassword().equals(passwordDTO.getPassword())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Your new password can't be your current password.");
        }
        else {
            player.setPassword(passwordDTO.getPassword());
            playerRepository.save(player);
        }
    }
}
