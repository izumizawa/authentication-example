package com.authentic.valo.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public void loginAuthentication(@RequestBody LoginDTO loginDTO) {
        authenticationService.loginAuthentication(loginDTO);
    }

    @PostMapping("/validate-psw/{playerId}")
    public void pswValidation(@PathVariable UUID playerId, @RequestBody PasswordDTO passwordDTO) {
        authenticationService.pswValidation(playerId, passwordDTO);
    }

    @PatchMapping("/psw/{playerId}")
    public void changePassword(@PathVariable UUID playerId, @RequestBody PasswordDTO passwordDTO) {
        authenticationService.changePassword(playerId, passwordDTO);
    }

}
