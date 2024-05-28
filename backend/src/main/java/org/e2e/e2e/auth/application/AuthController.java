package org.e2e.e2e.auth.application;

import org.e2e.e2e.auth.domain.AuthService;
import org.e2e.e2e.auth.dto.JwtAuthResponse;
import org.e2e.e2e.auth.dto.LoginReq;
import org.e2e.e2e.auth.dto.RegisterReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginReq req) {
        System.out.println("Logeado");
        return ResponseEntity.ok(authService.login(req));
    }

    @PostMapping("/register")
    public ResponseEntity<JwtAuthResponse> register(@RequestBody RegisterReq req) {
        return ResponseEntity.ok(authService.register(req));
    }

    @GetMapping("/test/connection")
    public ResponseEntity<String> testConnection() {
        try {
            jdbcTemplate.execute("SELECT 1"); // Execute a simple SQL query to test the connection
            return ResponseEntity.ok("Connection to PostgreSQL database is successful");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error connecting to PostgreSQL database: " + e.getMessage());
        }
    }
}
