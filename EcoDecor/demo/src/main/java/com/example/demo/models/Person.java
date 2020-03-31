package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Person {
  @Id
  String id;

  String firstName;
  String lastName;
  String email;
  String password;
  String mob;

  public Person(String firstName, String lastName, String email, String password, String mob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mob = mob;
    this.email = email;
    this.password = password;

  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getAge() {
    return mob;
  }

  public void setMob(String mob) {
    this.mob = mob;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

}
