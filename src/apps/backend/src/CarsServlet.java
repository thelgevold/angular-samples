package backend.api;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import angular_samples.api.Car;
import angular_samples.api.Cars;

import com.googlecode.protobuf.format.JsonFormat;

public class CarsServlet extends HttpServlet {

  JsonFormat jsonFormat = new JsonFormat();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Car countach = Car.newBuilder().setKey("countach").setName("Countach").setTopSpeed("254 km/h (158 mph)-295 km/h (183 mph)").build();
    Car veneno = Car.newBuilder().setKey("veneno").setName("Veneno").setTopSpeed("356 km/h (221 mph)").build();
    Car aventador = Car.newBuilder().setKey("aventador").setName("Aventador").setTopSpeed("349 km/h (217 mph)").build();
  
    Cars cars = Cars.newBuilder().addCars(countach).addCars(veneno).addCars(aventador).build();

    response.setContentType("application/json");

    response.getWriter().print(jsonFormat.printToString(cars));
  }
}
