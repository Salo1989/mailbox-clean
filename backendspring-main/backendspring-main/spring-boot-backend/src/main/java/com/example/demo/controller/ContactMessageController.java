package com.example.demo.controller;

import com.example.demo.model.ContactMessage;
import com.example.demo.service.ContactMessageService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://13.60.60.33")
public class ContactMessageController {

    private final ContactMessageService service;

    public ContactMessageController(ContactMessageService service) {
        this.service = service;
    }

    @PostMapping
    public ContactMessage createMessage(@RequestBody ContactMessage message) {
        return service.saveMessage(message);
    }

    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return service.getAllMessages();
    }
    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        service.deleteMessage(id);
    }
}