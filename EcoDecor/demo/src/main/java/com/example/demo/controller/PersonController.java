package com.example.demo.controller;

import com.example.demo.models.Person;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
public class PersonController {

  @Autowired
  private PersonService personService;

  @RequestMapping("/create")
  public String create(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String mob, @RequestParam String email, @RequestParam String password) {
    Person p = personService.create(firstName, lastName, mob,email,password);
    return p.toString();
  }

  @RequestMapping(method= RequestMethod.POST,value="/create")
  public String create(@RequestBody Person person)
  {
    personService.create(person.getFirstName(),person.getLastName(),person.getAge(),person.getEmail(),person.getPassword());
    return ("Hi");
  }
  @RequestMapping("/get")
  public Person getPerson(@RequestParam String firstName) {
    return personService.findByFirstName(firstName);
  }

  @RequestMapping("/getAll")
  public List<Person> getAllPerson() {
    return personService.getAll();
  }

  @RequestMapping("/update")
  public String update(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String mob) {
    Person p = personService.update(firstName, lastName, mob);
    return p.toString();
  }

  @RequestMapping("/delete")
  public String delete(@RequestParam String firstName) {
    personService.delete(firstName);
    return "Deleted " + firstName;
  }

  @RequestMapping("/deleteAll")
  public String deleteAll() {
    personService.deleteAll();
    return "Deleted All Records!";
  }
}
