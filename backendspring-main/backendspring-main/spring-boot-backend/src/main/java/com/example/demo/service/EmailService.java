package com.example.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${dad.email}")
    private String dadEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendAppointmentEmail(String name, String phone, String service, String dateTime, String message) {
        SimpleMailMessage email = new SimpleMailMessage();

        email.setTo(dadEmail);
        email.setSubject("New Appointment Booked");

        email.setText(
                "A new appointment was booked:\n\n" +
                        "Name: " + name + "\n" +
                        "Phone: " + phone + "\n" +
                        "Service: " + service + "\n" +
                        "Date/Time: " + dateTime + "\n" +
                        "Message: " + message
        );

        mailSender.send(email);
    }
}