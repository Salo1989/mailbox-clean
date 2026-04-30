package com.example.demo.service;

import com.example.demo.model.ContactMessage;
import com.example.demo.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactMessageService {

    private final ContactMessageRepository repository;
    private final EmailService emailService;

    public ContactMessageService(
            ContactMessageRepository repository,
            EmailService emailService
    ) {
        this.repository = repository;
        this.emailService = emailService;
    }

    public ContactMessage saveMessage(ContactMessage message) {

        ContactMessage saved = repository.save(message);

        try {

            emailService.sendContactMessageEmail(
                    saved.getFullName(),
                    saved.getEmail(),
                    saved.getPhone(),
                    saved.getSubject(),
                    saved.getMessage()
            );

            System.out.println("CONTACT EMAIL SENT");

        } catch (Exception e) {

            System.out.println("CONTACT EMAIL FAILED: " + e.getMessage());
        }

        return saved;
    }

    public List<ContactMessage> getAllMessages() {
        return repository.findAll();
    }

    public void deleteMessage(Long id) {
        repository.deleteById(id);
    }
}