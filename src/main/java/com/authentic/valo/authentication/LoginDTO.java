package com.authentic.valo.authentication;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginDTO {
    @NotNull
    private String username;
    @NotNull
    private String password;
}
