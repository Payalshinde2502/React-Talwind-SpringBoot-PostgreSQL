package com.example.contactus;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

 

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }  
}