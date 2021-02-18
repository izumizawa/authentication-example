package com.authentic.valo.player;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@Table(name = "player_data")
public class Player implements PlayerProjection {

    public Player(Player player) {
        this.playerId = player.getPlayerId();
        this.username = player.getUsername();
        this.password = player.getPassword();
    }
    @Id
    private UUID playerId;
    String password;
    String username;
}
