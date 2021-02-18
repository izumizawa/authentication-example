package com.authentic.valo.player;

import java.util.UUID;

public interface PlayerProjection {
    UUID getPlayerId();
    String getPassword();
    String getUsername();
}
