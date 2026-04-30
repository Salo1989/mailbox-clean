package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.service.EmailService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://13.60.60.33")
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;
    private final EmailService emailService;

    public AppointmentController(AppointmentRepository appointmentRepository, EmailService emailService) {
        this.appointmentRepository = appointmentRepository;
        this.emailService = emailService;
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        Appointment saved = appointmentRepository.save(appointment);

        try {
            emailService.sendAppointmentEmail(
                    saved.getFullName(),
                    saved.getPhone(),
                    "Life Scan",
                    saved.getAppointmentDate() + " " + saved.getAppointmentTime(),
                    saved.getNotes()
            );
        } catch (Exception e) {
            System.out.println("Email failed, but appointment was saved: " + e.getMessage());
        }

        return saved;
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        appointmentRepository.deleteById(id);
    }
}