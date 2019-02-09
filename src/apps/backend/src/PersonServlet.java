package backend.api;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import angular_samples.api.Person;
import angular_samples.api.Persons;

import com.googlecode.protobuf.format.JsonFormat;

import javax.servlet.annotation.WebServlet;
@WebServlet(value = "/persons")
public class PersonServlet extends HttpServlet {

  JsonFormat jsonFormat = new JsonFormat();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    Person person1 = Person.newBuilder().setName("Joe").setAddress("Test Street1").build();
    Person person2 = Person.newBuilder().setName("Peter").setAddress("Test Street2").build();
    Person person3 = Person.newBuilder().setName("Tom").setAddress("Test Street3").build();
    Person person4 = Person.newBuilder().setName("Jack").setAddress("Test Street4").build();
    Person person5 = Person.newBuilder().setName("Bob").setAddress("Test Street5").build();
    
    Persons persons = Persons.newBuilder()
                             .addPersons(person1)
                             .addPersons(person2)
                             .addPersons(person3)
                             .addPersons(person4)
                             .addPersons(person5).build();

    response.setContentType("application/json");

    response.getWriter().print(jsonFormat.printToString(persons));
  }
}
