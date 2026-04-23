package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://13.60.60.33")
public class AdminController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        if ("admin".equals(username) && "password123".equals(password)) {
            return ResponseEntity.ok("success");
        } else {
            return ResponseEntity.status(401).body("invalid");
        }
    }
}