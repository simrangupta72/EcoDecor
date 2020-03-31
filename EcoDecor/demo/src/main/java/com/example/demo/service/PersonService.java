package com.example.demo.service;

import java.util.List;
import com.example.demo.models.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
  @Autowired
  private PersonRepository personRepository;
  public Person create(String firstName, String lastName, String mob,String email,String password) {
    return personRepository.save(new Person(firstName, lastName, mob, email, password));
  }
  //RetrieveOperation
  public List<Person> getAll() {
    return personRepository.findAll();
  }

  public Person findByFirstName(String firstName) {
    return personRepository.findByFirstName(firstName);
  }

  //UpdateOperation
  public Person update(String firstName, String lastName, String mob) {
    Person p = personRepository.findByFirstName(firstName);
    p.setLastName(lastName);
    p.setMob(mob);
    return personRepository.save(p);
  }

  //DeleteOperation
  public void deleteAll() {
    personRepository.deleteAll();
  }

  public void delete(String firstName) {
    Person p = personRepository.findByFirstName(firstName);
    personRepository.delete(p);
  }
}
